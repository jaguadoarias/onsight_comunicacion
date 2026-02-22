import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Nav = styled.header<{ $scrolled: boolean; $menuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.layout.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  background: ${({ $scrolled, $menuOpen }) =>
    $scrolled && !$menuOpen ? "rgba(10, 10, 10, 0.92)" : "transparent"};
  /* backdrop-filter: ${({ $scrolled, $menuOpen }) =>
    $scrolled && !$menuOpen ? "blur(12px)" : "none"}; */
  border-bottom: ${({ $scrolled, $menuOpen, theme }) =>
    $scrolled && !$menuOpen ? `1px solid ${theme.colors.glassBorder}` : "none"};
  transition: all ${({ theme }) => theme.transition.slow};
  z-index: 1060;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const ProgressLine = styled.div<{ $progress: number; $menuOpen: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: ${({ $progress }) => $progress}%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.primaryBright}
  );
  transition: width 0.1s linear, opacity 0.3s ease;
  opacity: ${({ $menuOpen }) => ($menuOpen ? 0 : 1)};
`

export const Logo = styled(motion.a)<{ $menuOpen?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.3s ease;
  opacity: ${({ $menuOpen }) => ($menuOpen ? 0 : 1)};
  pointer-events: ${({ $menuOpen }) => ($menuOpen ? 'none' : 'auto')};

  img {
    height: 40px;
    width: auto;
  }
`

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

export const NavLink = styled.a`
  font-family: ${({ theme }) => theme.font.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color ${({ theme }) => theme.transition.fast};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transition.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &::after { width: 100%; }
  }
`

export const ContactBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.md};
  corner-shape: squircle;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all ${({ theme }) => theme.transition.normal};

  svg {
    transition: transform ${({ theme }) => theme.transition.normal};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryBright};
    border-color: ${({ theme }) => theme.colors.primaryBright};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 20px rgba(219, 45, 45, 0.4);

    svg {
      transform: translateX(3px) translateY(-2px);
    }
  }
`;

export const HamburgerBtn = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 1100;
  padding: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`

export const HamburgerLine = styled.span<{ $open: boolean; $index: number }>`
  display: block;
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  transition: all ${({ theme }) => theme.transition.normal};

  ${({ $open, $index }) =>
    $open && $index === 0 &&
    'transform: translateY(7px) rotate(45deg);'}
  ${({ $open, $index }) =>
    $open && $index === 1 &&
    'opacity: 0; transform: scaleX(0);'}
  ${({ $open, $index }) =>
    $open && $index === 2 &&
    'transform: translateY(-7px) rotate(-45deg);'}
`

export const MobileMenu = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  z-index: 1050;
`

export const MobileNavLink = styled(motion.a)`
  font-family: ${({ theme }) => theme.font.display};
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
