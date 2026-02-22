import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ClientsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: rgba(20, 15, 5, 0.95);
  overflow: hidden;
`

export const ClientsContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

export const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, ${({ theme }) => theme.fontSize['3xl']});
  color: ${({ theme }) => theme.colors.white};
`

export const MarqueeWrapper = styled.div`
  overflow: hidden;
  position: relative;
  padding: ${({ theme }) => theme.spacing.md} 0;

  &:hover .marquee-track {
    animation-play-state: paused;
  }
`

export const MarqueeTrack = styled.div<{ $reverse?: boolean }>`
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: ${({ $reverse }) => ($reverse ? 'marqueeReverse' : 'marquee')} 35s linear infinite;

  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  @keyframes marqueeReverse {
    from { transform: translateX(-50%); }
    to   { transform: translateX(0); }
  }
`

export const ClientLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.md};
  corner-shape: squircle;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.glass};
  flex-shrink: 0;
  transition:
    border-color ${({ theme }) => theme.transition.normal},
    background ${({ theme }) => theme.transition.normal};

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(1) opacity(0.5) brightness(1.5);
    transition: filter ${({ theme }) => theme.transition.normal};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.glassPrimary};
    img {
      filter: grayscale(0) opacity(1) brightness(1);
    }
  }
`;

export const ClientName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textDim};
  letter-spacing: 0.05em;
  text-align: center;
  transition: color ${({ theme }) => theme.transition.normal};

  ${ClientLogo}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`
