import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroSection = styled.section`
  position: relative;
  height: 100dvh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  id: inicio;
`

export const VideoBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 177.78vh;
    height: 56.25vw;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.3) 0%,
    rgba(10, 10, 10, 0.5) 40%,
    rgba(10, 10, 10, 0.85) 100%
  );
  z-index: 1;
`

export const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  max-width: 900px;
`

export const HeroLabel = styled(motion.span)`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryBright};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(2.5rem, 8vw, ${({ theme }) => theme.fontSize['4xl']});
  font-weight: ${({ theme }) => theme.fontWeight.black};
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
`

export const TitleWord = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
`

export const HeroTagline = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, ${({ theme }) => theme.fontSize.md});
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const HeroCTA = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 1rem 2.5rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  corner-shape: squircle;
  text-decoration: none;
  transition: all ${({ theme }) => theme.transition.normal};
  cursor: pointer;

  svg {
    transition: transform ${({ theme }) => theme.transition.normal};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryBright};
    border-color: ${({ theme }) => theme.colors.primaryBright};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 30px rgba(219, 45, 45, 0.4);

    svg {
      transform: translateX(4px);
    }
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  span {
    font-size: ${({ theme }) => theme.fontSize.xs};
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textDim};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(10px); }
  }
`
