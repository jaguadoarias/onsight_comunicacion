import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const VideoBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0c0c0c;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const VideoIframe = styled.iframe`
  width: 100vw;
  height: 56.25vw; /* 16:9 aspect ratio */
  min-height: 100vh;
  min-width: 177.77vh; /* 16:9 aspect ratio */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const HeroH1 = styled(motion.h1)`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-bottom: var(--spacing-md);

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroP = styled(motion.p)`
  margin-bottom: var(--spacing---spacing-sm);
  color: #fff;
  font-size: 24px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const HeroCTA = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 32px;
  padding: 16px 48px;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: var(--font-size-medium);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <VideoBg>
        <VideoIframe
          src="https://www.youtube.com/embed/Ku7dAXrmxsA&t=4s?autoplay=1&mute=1&controls=0&loop=1&playlist=Ku7dAXrmxsA&t=4s&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer&vq=small"
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoBg>
      <HeroContent>
        <HeroH1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tu visión, nuestra producción
        </HeroH1>
        <HeroP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <strong>Branded Content, Videomarketing, Corporativos & Streaming</strong>
        </HeroP>
        <HeroP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></HeroP>

        <HeroCTA
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
        >
          <FaRocket /> Cuéntanos tu visión
        </HeroCTA>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
