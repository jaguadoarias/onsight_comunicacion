import { useState, useEffect, useCallback } from 'react'
import type {
  VideoData,
  YouTubeChannelResponse,
  YouTubePlaylistResponse,
  YouTubeVideosResponse,
} from '../types/youtube'

const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID as string
const API_KEY    = import.meta.env.VITE_YOUTUBE_API_KEY    as string
const BASE_URL   = 'https://www.googleapis.com/youtube/v3'

const FALLBACK_IDS = [
  '5Y5Q3mtucsU',
  'Bw_jBZ-Ah04',
  'wt1d16nCrMw',
  'noPTyfGWToM',
  'Ku7dAXrmxsA',
  'L3WT6_h4GRg',
]

interface UseYouTubeOptions {
  maxResults?: number
  videoIds?: string[]
}

interface UseYouTubeReturn {
  videos:  VideoData[]
  loading: boolean
  error:   string | null
  refetch: () => void
}

function buildFallback(ids: string[], max: number): VideoData[] {
  return ids.slice(0, max).map((id, i) => ({
    id,
    title:        `Proyecto OnSight ${i + 1}`,
    description:  'Producción audiovisual profesional de OnSight Comunicación.',
    publishedAt:  new Date(),
    thumbnailUrl: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    viewCount:    0,
    likeCount:    0,
  }))
}

export function useYouTube({ maxResults = 12, videoIds }: UseYouTubeOptions = {}): UseYouTubeReturn {
  const [videos,  setVideos]  = useState<VideoData[]>([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState<string | null>(null)
  const [trigger, setTrigger] = useState(0)

  const refetch = useCallback(() => setTrigger(n => n + 1), [])

  const videoIdsKey = videoIds?.join(',') ?? ''

  useEffect(() => {
    let cancelled = false

    const fetchVideos = async () => {
      setLoading(true)
      setError(null)

      if (!API_KEY || !CHANNEL_ID) {
        setError('YouTube API key o Channel ID no configurados.')
        const fallbackIds = videoIds ?? FALLBACK_IDS
        setVideos(buildFallback(fallbackIds, videoIds ? fallbackIds.length : maxResults))
        setLoading(false)
        return
      }

      try {
        if (videoIds && videoIds.length > 0) {
          // Fetch specific videos by ID directly
          const res = await fetch(
            `${BASE_URL}/videos?part=snippet,statistics&id=${videoIds.join(',')}&key=${API_KEY}`
          )
          if (!res.ok) throw new Error(`Videos fetch failed: ${res.status}`)
          const data: YouTubeVideosResponse = await res.json()
          const items = data.items ?? []
          if (items.length === 0) throw new Error('No videos found')

          const normalized: VideoData[] = items.map(item => {
            const s = item.snippet!
            const thumb = s.thumbnails.maxres ?? s.thumbnails.high ?? s.thumbnails.medium
            return {
              id:           item.id,
              title:        s.title,
              description:  s.description,
              publishedAt:  new Date(s.publishedAt),
              thumbnailUrl: thumb.url,
              viewCount:    parseInt(item.statistics?.viewCount ?? '0', 10),
              likeCount:    parseInt(item.statistics?.likeCount  ?? '0', 10),
            }
          })

          if (!cancelled) {
            setVideos(normalized)
            setLoading(false)
          }
          return
        }

        // Step 1: Get uploads playlist ID
        const channelRes = await fetch(
          `${BASE_URL}/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        )
        if (!channelRes.ok) throw new Error(`Channel fetch failed: ${channelRes.status}`)
        const channelData: YouTubeChannelResponse = await channelRes.json()
        const uploadsPlaylistId =
          channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads
        if (!uploadsPlaylistId) throw new Error('Uploads playlist not found')

        // Step 2: Get playlist items
        const playlistRes = await fetch(
          `${BASE_URL}/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${uploadsPlaylistId}&key=${API_KEY}`
        )
        if (!playlistRes.ok) throw new Error(`Playlist fetch failed: ${playlistRes.status}`)
        const playlistData: YouTubePlaylistResponse = await playlistRes.json()
        const items = playlistData.items ?? []
        if (items.length === 0) throw new Error('No videos found')

        // Step 3: Batch fetch statistics
        const ids = items.map(item => item.snippet.resourceId.videoId).join(',')
        const statsRes = await fetch(
          `${BASE_URL}/videos?part=statistics&id=${ids}&key=${API_KEY}`
        )
        if (!statsRes.ok) throw new Error(`Statistics fetch failed: ${statsRes.status}`)
        const statsData: YouTubeVideosResponse = await statsRes.json()
        const statsMap = new Map(
          (statsData.items ?? []).map(v => [v.id, v.statistics])
        )

        const normalized: VideoData[] = items.map(item => {
          const s = item.snippet
          const stats = statsMap.get(s.resourceId.videoId)
          const thumb = s.thumbnails.maxres ?? s.thumbnails.high ?? s.thumbnails.medium
          return {
            id:           s.resourceId.videoId,
            title:        s.title,
            description:  s.description,
            publishedAt:  new Date(s.publishedAt),
            thumbnailUrl: thumb.url,
            viewCount:    parseInt(stats?.viewCount ?? '0', 10),
            likeCount:    parseInt(stats?.likeCount  ?? '0', 10),
          }
        })

        if (!cancelled) {
          setVideos(normalized)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : 'Unknown error'
          setError(message)
          const fallbackIds = videoIds ?? FALLBACK_IDS
          setVideos(buildFallback(fallbackIds, videoIds ? fallbackIds.length : maxResults))
          setLoading(false)
        }
      }
    }

    fetchVideos()
    return () => { cancelled = true }
  }, [maxResults, videoIdsKey, trigger])

  return { videos, loading, error, refetch }
}
