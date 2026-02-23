export interface YouTubeChannelResponse {
  items: Array<{
    contentDetails: {
      relatedPlaylists: {
        uploads: string
      }
    }
  }>
}

export interface YouTubePlaylistItemSnippet {
  title: string
  description: string
  publishedAt: string
  thumbnails: {
    default: { url: string; width: number; height: number }
    medium:  { url: string; width: number; height: number }
    high:    { url: string; width: number; height: number }
    maxres?: { url: string; width: number; height: number }
  }
  resourceId: {
    videoId: string
  }
}

export interface YouTubePlaylistItem {
  snippet: YouTubePlaylistItemSnippet
}

export interface YouTubePlaylistResponse {
  items: YouTubePlaylistItem[]
  nextPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

export interface YouTubeVideoStatistics {
  viewCount: string
  likeCount: string
  commentCount: string
}

export interface YouTubeVideoSnippet {
  title: string
  description: string
  publishedAt: string
  thumbnails: {
    default: { url: string; width: number; height: number }
    medium:  { url: string; width: number; height: number }
    high:    { url: string; width: number; height: number }
    maxres?: { url: string; width: number; height: number }
  }
}

export interface YouTubeVideoItem {
  id: string
  snippet?: YouTubeVideoSnippet
  statistics: YouTubeVideoStatistics
}

export interface YouTubeVideosResponse {
  items: YouTubeVideoItem[]
}

export interface VideoData {
  id: string
  title: string
  description: string
  publishedAt: Date
  thumbnailUrl: string
  viewCount: number
  likeCount: number
}
