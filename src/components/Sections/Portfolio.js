import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaQuoteLeft } from "react-icons/fa"; // Import quote icon
import { Link } from "react-router-dom";

const PortfolioSection = styled.section`
  padding: var(--spacing-xl) 0;
  background: var(--color-bg-dark);
`;

const SectionContainer = styled.div`
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: var(--spacing-xl);
  font-size: calc(var(--font-size-xlarge) + 2px);
`;

const VideoWrapper = styled.div`
  padding: var(--spacing-md);
  padding-bottom: 0;
  height: 600px;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    height: 450px;
  }

  @media screen and (max-width: 768px) {
    height: 350px;
  }

  @media screen and (max-width: 480px) {
    height: 250px;
  }
`;

// Remove PlayButton styled component and FaPlay import

const Description = styled.p`
  color: #fff;
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  font-size: var(--font-size-medium);
  opacity: 0.9;
  line-height: 1.6;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoDescription = styled.div`
  color: #fff;
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-medium);
  line-height: 1.6;
  text-align: center;
  width: 95%;
  margin: 0 auto;
  position: relative;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
`;

const QuoteIcon = styled.div`
  color: var(--color-primary);
  font-size: 24px;
  margin-right: var(--spacing-sm);
  opacity: 0.8;
`;

const DescriptionText = styled.p`
  margin: 0;
  font-style: italic;
  letter-spacing: 0.3px;
`;

const ViewAllButton = styled(Link)`
  display: inline-block;
  margin-top: var(--spacing-lg);
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    background: var(--color-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-xl);
`;

const Portfolio = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Channel ID for your YouTube channel
  const channelId = useMemo(() => "UC60mDOEFsULNbKPtifA3H6Q", []);

  useEffect(() => {
    const fetchLatestVideos = async () => {
      try {
        const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

        if (!API_KEY) {
          console.error("YouTube API key is missing. Please check your environment variables.");
          setError("API key missing");
          setLoading(false);
          return;
        }

        // First, get the uploads playlist ID from the channel
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${API_KEY}`
        );
        
        if (!channelResponse.ok) {
          const errorData = await channelResponse.json();
          console.error("Channel API error:", errorData);
          setError(`Channel API error: ${errorData?.error?.message || channelResponse.statusText}`);
          setLoading(false);
          return;
        }

        const channelData = await channelResponse.json();
        
        if (!channelData.items || channelData.items.length === 0) {
          console.error("Channel not found");
          setError("Channel not found");
          setLoading(false);
          return;
        }
        
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
        
        // Then, get the latest videos from the uploads playlist
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=${uploadsPlaylistId}&key=${API_KEY}`
        );
        
        if (!playlistResponse.ok) {
          const errorData = await playlistResponse.json();
          console.error("Playlist API error:", errorData);
          setError(`Playlist API error: ${errorData?.error?.message || playlistResponse.statusText}`);
          setLoading(false);
          return;
        }
        
        const playlistData = await playlistResponse.json();
        
        if (!playlistData.items || playlistData.items.length === 0) {
          console.error("No videos found");
          setError("No videos found");
          setLoading(false);
          return;
        }
        
        // Extract video IDs and details
        const videoIds = playlistData.items.map((item) => item.snippet.resourceId.videoId);
        console.log("Fetched video IDs:", videoIds);
        setVideos(videoIds);
        
        setVideoDetails(
          playlistData.items.map((item) => ({
            title: item.snippet.title,
            description: item.snippet.description
          }))
        );
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError(`Error fetching videos: ${error.message}`);
        setLoading(false);
      }
    };

    fetchLatestVideos();
  }, [channelId]);

  // Add fallback videos in case the API fails
  const fallbackVideos = useMemo(() => [
    "5Y5Q3mtucsU",
    "Bw_jBZ-Ah04",
    "wt1d16nCrMw",
    "noPTyfGWToM"
  ], []);

  // Use fallback videos if API fetch fails
  useEffect(() => {
    if (error && videos.length === 0) {
      console.log("Using fallback videos due to API error");
      setVideos(fallbackVideos);
      setVideoDetails(fallbackVideos.map((_, i) => ({
        title: `Portfolio Video ${i + 1}`,
        description: "Video description not available."
      })));
      setLoading(false);
    }
  }, [error, videos, fallbackVideos]);

  return (
    <PortfolioSection id="portfolio">
      <SectionContainer>
        <Title>Últimos proyectos</Title>
        <Description>
          En <strong>OnSight</strong>, convertimos tus ideas en experiencias visuales únicas,
          llevando tu visión a la pantalla con creatividad y calidad.
        </Description>
        {loading ? (
          <div style={{ color: '#fff', textAlign: 'center', padding: '50px 0' }}>
            Cargando videos...
          </div>
        ) : error && videos.length === 0 ? (
          <div style={{ color: '#fff', textAlign: 'center', padding: '50px 0' }}>
            {error}
          </div>
        ) : (
          <>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              keyBoardControl={true}
              customTransition="transform 500ms ease-in-out"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {videos.map((videoId, index) => (
                <VideoContainer key={index}>
                  <VideoWrapper>
                    <VideoFrame
                      src={`https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`}
                      title={videoDetails[index]?.title || `Portfolio Video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </VideoWrapper>
                  <VideoDescription>
                    <QuoteIcon>
                      <FaQuoteLeft />
                    </QuoteIcon>
                    <DescriptionText>
                      {loading
                        ? "Loading description..."
                        : videoDetails[index]?.description
                        ? videoDetails[index].description.substring(0, 150) +
                          (videoDetails[index].description.length > 150 ? "..." : "")
                        : "No description available"}
                    </DescriptionText>
                  </VideoDescription>
                </VideoContainer>
              ))}
            </Carousel>
            <ButtonContainer>
              <ViewAllButton to="/projects">
                Ver todos los proyectos
              </ViewAllButton>
            </ButtonContainer>
          </>
          )}
      </SectionContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
