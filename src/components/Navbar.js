import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import onsightLogo from "../images/onsight_comunicacion.svg";
import "../styles/variables.css";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

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

// Update MobileMenu component
const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: calc(50vh - 150px);
    left: 0;
    right: 0;
    padding: var(--spacing-md);
    transition: all 0.3s ease;
    z-index: 999;
  }
`;

const MobileLink = styled(Link)`
  color: #fff;
  display: block;
  padding: var(--spacing-sm);
  font-size: var(--font-size-large);
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  width: 100%;

  &:hover {
    color: var(--color-primary);
  }
`;

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

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin-right: var(--spacing-md);
    cursor: pointer;
    color: var(--color-primary);
    transition: all 0.3s ease;

    &:hover {
      color: var(--color-primary-hover);
    }
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
        <MobileIcon onClick={toggleMenu}>{isOpen ? <HiOutlineX /> : <HiOutlineMenu />}</MobileIcon>
        <NavMenu scrollNav={scrollNav}>
          <NavLink to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Home
          </NavLink>
          <NavLink to="services" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Servicios
          </NavLink>
          <NavLink to="portfolio" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Últimos proyectos
          </NavLink>
          <NavLink to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Contacto
          </NavLink>
        </NavMenu>
        <MobileMenu isOpen={isOpen}>
          <MobileLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleMenu}
          >
            Home
          </MobileLink>
          <MobileLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleMenu}
          >
            Servicios
          </MobileLink>
          <MobileLink
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleMenu}
          >
            Últimos proyectos
          </MobileLink>
          <MobileLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleMenu}
          >
            Contacto
          </MobileLink>
        </MobileMenu>
      </Nav>
    </>
  );
};

export default Navbar;
