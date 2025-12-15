import React from "react";
import styled from "styled-components";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: var(--color-bg-darker);
  padding: var(--spacing-lg) 0;
`;

const FooterWrapper = styled.div`
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
`;

const Copyright = styled.h6`
  color: #fff;
  text-align: center;
  font-size: var(--font-size-small);
  font-size: var(--font-size-regular);
`;

const SocialNav = styled.nav`
  display: flex;
  margin: var(--spacing-xs) 0;
  padding: 8px 0; // Add vertical padding
`;

// Update SocialLink styles
const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: all 0.3s ease;
  display: inline-flex;
  padding: 12px; // Add padding to increase touch area
  position: relative;

  // Add pseudo-element to further increase clickable area
  &::after {
    content: "";
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
  }

  &:hover {
    color: var(--color-primary);
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialNav>
          <SocialLink
            href="https://youtube.com/@onsightcomunicacion"
            target="_blank"
            rel="noopener noreferrer">
            <FaYoutube />
          </SocialLink>
          <SocialLink
            href="https://instagram.com/onsight_comunicacion"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/company/onsight-comunicaci%C3%B3n/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
        </SocialNav>
        <Copyright>Onsight Comunicación © {currentYear}</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
