import React, { useState } from "react";
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
  margin: 0 auto;

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

const Portfolio = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
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

  const videos = [
    "5Y5Q3mtucsU",
    "Bw_jBZ-Ah04",
    "wt1d16nCrMw",
    "noPTyfGWToM"
    // Add more video IDs here
  ];
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
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          beforeChange={() => setPlayingVideo(null)}
        >
          {videos.map((videoId, index) => (
            <VideoWrapper key={index}>
              <VideoFrame
                src={`https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`}
                title={`Portfolio Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoWrapper>
          ))}
        </Carousel>
      </SectionContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
