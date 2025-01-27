import React from "react";
import styled from "styled-components";

const ServicesSection = styled.section`
  padding: var(--spacing-xl) 0;
  background: var(--color-bg-dark);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      var(--color-primary) 0%,
      transparent 25%,
      var(--color-bg-dark) 50%,
      transparent 75%,
      var(--color-primary-hover) 100%
    );
    opacity: 0.1;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, var(--color-primary-hover) 0%, transparent 50%);
    opacity: 0.05;
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: var(--spacing-xl);
  font-size: calc(var(--font-size-xlarge) + 2px);
`;

const Description = styled.p`
  color: #fff;
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  font-size: var(--font-size-medium);
  opacity: 0.9;
  line-height: 1.6;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  padding: var(--spacing-md);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  height: 450px;
  border-radius: 15px;
  overflow: hidden;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
  border: 1px solid #000;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9));
    transition: all 0.3s ease;
    z-index: 10;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: var(--color-primary-hover);

    &::before {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.95));
    }
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-lg);
  color: white;
  z-index: 15;
`;

const CardTitle = styled.h3`
  font-size: var(--font-size-large);
  margin-bottom: var(--spacing-sm);
`;

const CardText = styled.p`
  font-size: var(--font-size-regular);
  margin-bottom: var(--spacing-md);
  opacity: 0.9;
`;

// const CTA = styled.a`
//   display: inline-block;
//   padding: var(--spacing-sm) var(--spacing-md);
//   background: var(--color-primary);
//   color: white;
//   text-decoration: none;
//   border-radius: 4px;
//   transition: background 0.3s ease;

//   &:hover {
//     background: var(--color-primary-hover);
//   }
// `;

const Services = () => {
  const services = [
    {
      title: "Branded Content",
      description:
        "Creamos un storytelling original, vinculamos emociones con tu marca y le damos un look atractivo",
      image: "/images/onsight_branded.jpg",
      cta: "Learn More"
    },
    {
      title: "Vídeos corporativos",
      description:
        "Cuidamos todos los detalles desde la creación de la idea al resultado final para que la imagen de tu empresa sea más visible.",
      image: "/images/onsight_corporativos.jpg",
      cta: "View Portfolio"
    },
    {
      title: "Streaming",
      description:
        "¿Sigues haciendo tus eventos solo en forma presencial? Multiplica por 10 el impacto de tu evento con streaming.",
      image: "/images/onsight_streaming.jpg",
      cta: "Explore Services"
    },
    {
      title: "Making of & Behind the scenes",
      description:
        "Deja constancia de todas tus actividades, sus protagonistas y utilízalo en redes para una mejor promoción de tus futuros eventos y acciones.",
      image: "/images/onsight_making-of.jpg",
      cta: "Get Started"
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <Title>Servicios</Title>
        <Description>
          Transformamos ideas en experiencias visuales memorables. Nuestro equipo de expertos
          combina creatividad y tecnología para dar vida a tu visión.
        </Description>
        <CardsGrid>
          {services.map((service, index) => (
            <ServiceCard key={index} bgImage={service.image}>
              <CardContent>
                <CardTitle>{service.title}</CardTitle>
                <CardText>{service.description}</CardText>
                {/* <CTA href="#">{service.cta}</CTA> */}
              </CardContent>
            </ServiceCard>
          ))}
        </CardsGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
