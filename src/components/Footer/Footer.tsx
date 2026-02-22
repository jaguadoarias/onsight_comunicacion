import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FooterEl,
  FooterTop,
  FooterLogo,
  FooterSocials,
  FooterSocial,
  FooterBottom,
  LegalLinks,
} from "./Footer.styles";

export default function Footer() {

  return (
    <FooterEl>
      <FooterTop>
        <FooterLogo>
          <img src="/images/logo.svg" alt="OnSight Comunicación" />
        </FooterLogo>

        <FooterSocials>
          <FooterSocial
            href="https://www.youtube.com/@onsightcomunicacion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube">
            <FaYoutube />
          </FooterSocial>
          <FooterSocial
            href="https://www.instagram.com/onsight_comunicacion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
            <FaInstagram />
          </FooterSocial>
          <FooterSocial
            href="https://www.linkedin.com/company/onsight-comunicación/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin />
          </FooterSocial>
        </FooterSocials>
      </FooterTop>

      <FooterBottom>
        <span>
          © {new Date().getFullYear()} OnSight Comunicación · Madrid, España
        </span>
        <LegalLinks>
          <Link to="/legal/aviso-legal">Aviso Legal</Link>
          <Link to="/legal/privacidad">Política de Privacidad</Link>
          <Link to="/legal/cookies">Cookies</Link>
        </LegalLinks>
      </FooterBottom>
    </FooterEl>
  );
}
