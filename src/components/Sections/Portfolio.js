import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  height: 600px;
  position: relative;
  cursor: pointer;
  max-width: 1066px; /* 16:9 aspect ratio based on height */

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
  font-size: var(--font-size-small);
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
  padding: var(--spacing-md) 0;
  font-size: var(--font-size-medium);
  line-height: 1.5;
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
`;

const Portfolio = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // Wrap videos array in useMemo to prevent recreating on each render
  const videos = useMemo(() => [
    "5Y5Q3mtucsU",
    "Bw_jBZ-Ah04",
    "wt1d16nCrMw",
    "noPTyfGWToM"
    // Add more video IDs here
  ], []);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        // Use environment variable instead of hardcoded API key
        const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
        const videoIds = videos.join(",");

        if (!API_KEY) {
          console.error("YouTube API key is missing. Please check your environment variables.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds}&key=${API_KEY}`
        );

        const data = await response.json();

        if (data.items) {
          setVideoDetails(
            data.items.map((item) => ({
              title: item.snippet.title,
              description: item.snippet.description
            }))
          );
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching video details:", error);
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, [videos]); // Now videos won't change between renders

  return (
    <PortfolioSection id="portfolio">
      <SectionContainer>
        <Title>Our Work</Title>
        <Description>
          En <strong>OnSight</strong>, convertimos tus ideas en experiencias visuales únicas,
          llevando tu visión a la pantalla con creatividad y calidad.
        </Description>
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
                {loading
                  ? "Loading description..."
                  : videoDetails[index]?.description
                  ? videoDetails[index].description.substring(0, 150) +
                    (videoDetails[index].description.length > 150 ? "..." : "")
                  : "No description available"}
              </VideoDescription>
            </VideoContainer>
          ))}
        </Carousel>
      </SectionContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
