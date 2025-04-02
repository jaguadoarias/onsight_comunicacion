import React, { useState, useEffect } from "react";
import styled from "styled-components";
import onsightLogo from "../images/onsight_comunicacion.svg";
import "../styles/variables.css";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - var(--layout-max-width)) / 2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ scrollNav }) => (scrollNav ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)")};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all 0.4s ease;
  z-index: 999;
  box-sizing: border-box;
`;

// Update MobileMenu to match the new header style
// Add new Overlay component after Nav styled component
const Overlay = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 998;
  }
`;

// Update MobileMenu component with animation styles
const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '100%')};
    right: 0;
    bottom: 0;
    padding: var(--spacing-md);
    padding-top: calc(var(--header-height) + var(--spacing-md));
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  }
`;

// Update MobileLink with animation
// Update the MobileLink styled component to properly receive props
const MobileLink = styled(Link).attrs(({ isOpen, index }) => ({
  style: {
    transitionDelay: isOpen ? `${index * 0.1}s` : '0s'
  }
}))`
  color: #fff;
  display: block;
  padding: var(--spacing-md);
  margin: var(--spacing-sm) 0;
  font-size: var(--font-size-large);
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  width: 100%;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(20px)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-primary);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }
`;

// Update NavLink component
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: var(--font-size-medium);

  &:hover {
    color: var(--color-primary);
  }

  &.active {
    color: var(--color-primary);
  }
`;


const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const Logo = styled(Link)`
  font-size: var(--font-size-large);
  font-weight: bold;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  color: var(--color-primary);
  cursor: pointer;
  text-decoration: none;
`;

// Update MobileIcon styled component to ensure it stays above the menu
const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin-right: var(--spacing-md);
    cursor: pointer;
    color: var(--color-primary-hover);
    transition: all 0.3s ease;
    z-index: 1000; // Add this line to ensure it stays above everything
    position: relative; // Add this to establish a stacking context
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const ProgressLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  background: var(--color-primary);
  width: ${({ progress }) => `${progress}%`};
  transition: width 0.1s ease;
`;

// Add a styled component for the logo container with opacity transition
const LogoContainer = styled.div`
  opacity: ${({ scrollNav }) => (scrollNav ? 1 : 0)};
  transform: translateY(${({ scrollNav }) => (scrollNav ? '0' : '-10px')});
  transition: opacity 0.4s ease, transform 0.4s ease;
`;

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }

    // Calculate scroll progress
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';

    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggleMenu} />
      <Nav scrollNav={scrollNav}>
        <LogoContainer scrollNav={scrollNav}>
          <Logo to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            <LogoImage src={onsightLogo} alt="Logotipo Onsight Comunicación" />
          </Logo>
        </LogoContainer>
        <ProgressLine progress={scrollProgress} />
        <MobileIcon onClick={toggleMenu}>{isOpen ? <HiOutlineX size={36} /> : <HiOutlineMenu size={36} />}</MobileIcon>
        <NavMenu scrollNav={scrollNav}>
          <NavLink to="/#home">Home</NavLink>
          <NavLink to="/#services">Servicios</NavLink>
          <NavLink to="/#portfolio">Últimos proyectos</NavLink>
          <NavLink to="/#contact">Contacto</NavLink>
        </NavMenu>
        <MobileMenu isOpen={isOpen}>
          <MobileLink to="/#home" onClick={toggleMenu} isOpen={isOpen} index={0}>Home</MobileLink>
          <MobileLink to="/#services" onClick={toggleMenu} isOpen={isOpen} index={1}>Servicios</MobileLink>
          <MobileLink to="/#portfolio" onClick={toggleMenu} isOpen={isOpen} index={2}>Últimos proyectos</MobileLink>
          <MobileLink to="/#contact" onClick={toggleMenu} isOpen={isOpen} index={3}>Contacto</MobileLink>
        </MobileMenu>
      </Nav>
    </>
  );
};
export default Navbar;
