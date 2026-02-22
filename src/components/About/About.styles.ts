import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.bg} 0%,
    rgba(20, 15, 5, 0.95) 100%
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl}
      ${({ theme }) => theme.spacing.md};
  }
`;

export const AboutContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ImageStack = styled(motion.div)`
  position: relative;
  height: 550px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 350px;
  }
`;

export const MainImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 85%;
  border-radius: ${({ theme }) => theme.radius.lg};
  corner-shape: squircle;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SecondaryImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60%;
  height: 55%;
  border-radius: ${({ theme }) => theme.radius.lg};
  corner-shape: squircle;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: ${({ theme }) => theme.shadow.primary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SectionLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const AboutTitle = styled.h2`
  font-size: clamp(2rem, 4vw, ${({ theme }) => theme.fontSize["3xl"]});
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.2;
`;

export const AboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
`;

export const ValuePills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Pill = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid currentColor;
  padding: 0.4rem 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
  letter-spacing: 0.05em;
`;
