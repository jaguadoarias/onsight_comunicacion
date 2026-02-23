import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPaperPlane, FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import type { Service } from "../data/services";

const PageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.div<{ $image: string }>`
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: flex-end;
  padding: 0 ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.xxl};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 60vh;
    padding: ${({ theme }) =>
      `${theme.spacing.xxl} ${theme.spacing.md} ${theme.spacing.xl}`};
  }
`;

const HeroBg = styled.div<{ $image: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.3) 0%,
    rgba(10, 10, 10, 0.95) 100%
  );
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const TagLine = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.textMuted};
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, ${({ theme }) => theme.fontSize["4xl"]});
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const HeroDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 640px;
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CtaButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-decoration: none;
  padding: 0.85rem 1.8rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  corner-shape: squircle;
  transition: background ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.redHover};
  }
`;

const ContentSection = styled.section`
  flex: 1;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl}
      ${({ theme }) => theme.spacing.md};
  }
`;

const ContentBlock = styled(motion.div)``;

const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SectionText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;

  &::before {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    margin-top: 0.55rem;
    flex-shrink: 0;
  }
`;

const CtaBanner = styled.div`
  background: ${({ theme }) => theme.colors.glass};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  width: calc(100% - ${({ theme }) => theme.spacing.xl} * 2);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - ${({ theme }) => theme.spacing.md} * 2);
    margin: 0 auto ${({ theme }) => theme.spacing.xl};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize["2xl"]};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const CtaBannerBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-decoration: none;
  padding: 0.85rem 2rem;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: background ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.redHover};
  }
`;

const OtherServices = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const OtherServicesTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const OtherServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const OtherServiceLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.full};
  transition: all ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

interface ServicioPageProps {
  service: Service;
  allServices: Service[];
}

export default function ServicioPage({
  service,
  allServices,
}: ServicioPageProps) {
  const Icon = service.icon;
  const others = allServices.filter((s) => s.id !== service.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.id]);

  return (
    <PageWrapper>
      <Navbar />

      <Hero $image={service.image}>
        <HeroBg $image={service.image} />
        <HeroOverlay />
        <HeroContent>
          <BackLink to="/#servicios">← Todos los servicios</BackLink>
          <div>
            <TagLine
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}>
              <Icon size={12} />
              {service.tagline}
            </TagLine>
          </div>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            {service.title}
          </HeroTitle>
          <HeroDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            {service.description}
          </HeroDescription>
          <CtaButton
            href="/#contacto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <FaPaperPlane size={13} />
            Solicitar presupuesto
          </CtaButton>
        </HeroContent>
      </Hero>

      <ContentSection>
        <ContentBlock
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}>
          <SectionLabel>Descripción</SectionLabel>
          <SectionTitle>¿En qué consiste?</SectionTitle>
          <SectionText>{service.fullDescription}</SectionText>
        </ContentBlock>

        <ContentBlock
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}>
          <SectionLabel>Incluye</SectionLabel>
          <SectionTitle>Qué obtienes</SectionTitle>
          <FeaturesList>
            {service.features.map((feature, i) => (
              <FeatureItem
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}>
                {feature}
              </FeatureItem>
            ))}
          </FeaturesList>
        </ContentBlock>
      </ContentSection>

      <CtaBanner>
        <h2>¿Listo para empezar?</h2>
        <p>
          Cuéntanos tu proyecto y te preparamos una propuesta personalizada sin
          compromiso.
        </p>
        <CtaBannerBtn href="/#contacto">
          <FaPaperPlane size={13} />
          Hablemos de tu proyecto
        </CtaBannerBtn>
      </CtaBanner>

      <OtherServices>
        <OtherServicesTitle>Otros servicios</OtherServicesTitle>
        <OtherServicesGrid>
          {others.map((s) => (
            <OtherServiceLink key={s.id} to={`/servicios/${s.slug}`}>
              {s.title}
              <FaArrowRight size={11} />
            </OtherServiceLink>
          ))}
        </OtherServicesGrid>
      </OtherServices>

      <Footer />
    </PageWrapper>
  );
}
