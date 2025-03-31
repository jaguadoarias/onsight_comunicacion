import React from "react";
import styled from "styled-components";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: var(--color-bg-darker);
  padding: var(--spacing-xl) 0;
`;

const FooterWrapper = styled.div`
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
`;

const Logo = styled.h6`
  font-size: var(--font-size-large);
  color: var(--color-primary);
  font-weight: bold;
`;

const Copyright = styled.p`
  color: #fff;
  text-align: center;
  font-size: var(--font-size-small);
`;

const SocialNav = styled.nav`
  display: flex;
  gap: var(--spacing-md);
  margin: var(--spacing-md) 0;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: all 0.3s ease;

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
        <Logo>Onsight Comunicación</Logo>
        <SocialNav>
          <SocialLink
            href="https://youtube.com/@onsightcomunicacion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </SocialLink>
          <SocialLink
            href="https://instagram.com/onsight_comunicacion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/company/onsight-comunicacion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </SocialLink>
        </SocialNav>
        <Copyright>© {currentYear} Onsight Comunicación.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
