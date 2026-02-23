import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </span>
        <LegalLinks>
          <Link to="/legal/aviso-legal">{t("footer.legalNotice")}</Link>
          <Link to="/legal/privacidad">{t("footer.privacy")}</Link>
          <Link to="/legal/cookies">{t("footer.cookies")}</Link>
        </LegalLinks>
      </FooterBottom>
    </FooterEl>
  );
}
