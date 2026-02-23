import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import type { VideoData } from '../../types/youtube'
import { useYouTube } from '../../hooks/useYouTube'
import { staggerContainerVariants } from '../../styles/animations'
import VideoCard from './VideoCard'
import VideoModal from './VideoModal'
import {
  PortfolioSection, PortfolioContainer, SectionHeader, SectionLabel,
  SectionTitle, SectionSubtitle, VideoGrid,
  SkeletonCard, SkeletonThumb, SkeletonMeta, ErrorState,
  ViewAllWrapper, ViewAllLink,
} from './Portfolio.styles'
import { fadeUpVariants } from '../../styles/animations'

const HIGHLIGHTED_VIDEO_IDS = ["zvf-nKO9Kg8", "oRWjKBQ1aTs", "ejkZF6HN9kM"];

export default function Portfolio() {
  const { t } = useTranslation()
  const { videos, loading, error, refetch } = useYouTube({ videoIds: HIGHLIGHTED_VIDEO_IDS })
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null)

  return (
    <PortfolioSection id="portfolio">
      <PortfolioContainer>
        <SectionHeader>
          <SectionLabel>{t("portfolio.label")}</SectionLabel>
          <SectionTitle
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("portfolio.title")}
          </SectionTitle>
          <SectionSubtitle
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("portfolio.subtitle")}
          </SectionSubtitle>
        </SectionHeader>

        {loading ? (
          <VideoGrid>
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i}>
                <SkeletonThumb />
                <SkeletonMeta>
                  <div className="line" />
                  <div className="line" />
                </SkeletonMeta>
              </SkeletonCard>
            ))}
          </VideoGrid>
        ) : error && videos.length === 0 ? (
          <ErrorState>
            <p>{t("portfolio.error")}</p>
            <button onClick={refetch}>{t("portfolio.retry")}</button>
          </ErrorState>
        ) : (
          <VideoGrid
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
          >
            {videos.map(video => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={setSelectedVideo}
              />
            ))}
          </VideoGrid>
        )}

        <ViewAllWrapper>
          <ViewAllLink as={Link} to="/trabajos">
            {t("portfolio.viewAll")}
            <FaArrowRight size={13} />
          </ViewAllLink>
        </ViewAllWrapper>
      </PortfolioContainer>

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </PortfolioSection>
  )
}
