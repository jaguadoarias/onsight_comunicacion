import styled from "styled-components";
import { motion } from "framer-motion";

export const ServicesSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xl};
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl}
      ${({ theme }) => theme.spacing.md};
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, ${({ theme }) => theme.fontSize["3xl"]});
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const SectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textMuted};
  text-wrap: pretty;
  max-width: 800px;
  margin: 0 auto;
`;

export const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const CardTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid currentColor;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  corner-shape: squircle;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  transition: color ${({ theme }) => theme.transition.normal};
`;

export const ServiceCard = styled(motion.div)<{ $featured?: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};
  corner-shape: squircle;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(20px);
  cursor: pointer;
  min-height: ${({ $featured }) => ($featured ? "420px" : "320px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition:
    border-color ${({ theme }) => theme.transition.normal},
    box-shadow ${({ theme }) => theme.transition.normal};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(10, 10, 10, 0.65);
    z-index: 1;
  }

  ${({ $featured }) =>
    $featured &&
    `
    grid-column: span 2;
    @media (max-width: 1024px) { grid-column: span 1; }
  `}

  &:hover {
    border-color: rgba(201, 168, 76, 0.45);
    box-shadow: 0 0 30px rgba(201, 168, 76, 0.15);

    .service-bg {
      transform: scale(1.05);
    }

    ${CardTag} {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const CardBg = styled.div<{ $image: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  transition: transform ${({ theme }) => theme.transition.slow};
  z-index: 0;
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.2) 0%,
    rgba(10, 10, 10, 0.95) 100%
  );
  z-index: 1;
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;


