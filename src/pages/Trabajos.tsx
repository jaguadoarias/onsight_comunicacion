import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { VideoData } from "../types/youtube";
import { useYouTube } from "../hooks/useYouTube";
import { staggerContainerVariants, fadeUpVariants } from "../styles/animations";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import VideoCard from "../components/Portfolio/VideoCard";
import VideoModal from "../components/Portfolio/VideoModal";
import {
  VideoGrid,
  SkeletonCard,
  SkeletonThumb,
  SkeletonMeta,
  ErrorState,
} from "../components/Portfolio/Portfolio.styles";

const PageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PageHero = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xl};
  padding-top: calc(${({ theme }) => theme.spacing.xxl} + 80px);
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl}
      ${({ theme }) => theme.spacing.md};
    padding-top: calc(${({ theme }) => theme.spacing.xl} + 80px);
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, ${({ theme }) => theme.fontSize["3xl"]});
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const PageSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 560px;
  line-height: 1.7;
`;

const GridSection = styled.section`
  flex: 1;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md}
      ${({ theme }) => theme.spacing.xl};
  }
`;

const SKELETON_COUNT = 6;

export default function Trabajos() {
  const { t } = useTranslation();
  const { videos, loading, error, refetch } = useYouTube({ maxResults: 50 });
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  // Skip the 3 most recent (shown in the Portfolio section on home)
  const remainingVideos = videos.slice(3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <Navbar />

      <PageHero>
        <BackLink to="/#portfolio">{t("trabajos.back")}</BackLink>
        <PageTitle variants={fadeUpVariants} initial="hidden" animate="visible">
          {t("trabajos.title")}
        </PageTitle>
        <PageSubtitle
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 } as object}>
          {t("trabajos.subtitle")}
        </PageSubtitle>
      </PageHero>

      <GridSection>
        {loading ? (
          <VideoGrid>
            {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
              <SkeletonCard key={i}>
                <SkeletonThumb />
                <SkeletonMeta>
                  <div className="line" />
                  <div className="line" />
                </SkeletonMeta>
              </SkeletonCard>
            ))}
          </VideoGrid>
        ) : error && remainingVideos.length === 0 ? (
          <ErrorState>
            <p>{t("trabajos.error")}</p>
            <button onClick={refetch}>{t("trabajos.retry")}</button>
          </ErrorState>
        ) : remainingVideos.length === 0 ? (
          <ErrorState>
            <p>{t("trabajos.noMore")}</p>
          </ErrorState>
        ) : (
          <VideoGrid
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible">
            {remainingVideos.map(
              (video) =>
                video.id !== "Ku7dAXrmxsA" && (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onClick={setSelectedVideo}
                  />
                ),
            )}
          </VideoGrid>
        )}
      </GridSection>

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <Footer />
    </PageWrapper>
  );
}
