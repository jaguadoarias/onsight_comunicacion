import { useNavigate } from "react-router-dom";
import {
  staggerContainerVariants,
  cardVariants,
  fadeUpVariants,
} from "../../styles/animations";
import {
  ServicesSection,
  SectionHeader,
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCard,
  CardBg,
  CardOverlay,
  CardContent,
  CardTitle,
  CardDescription,
  CardTag,
} from "./Services.styles";
import { services } from "../../data/services";

export default function Services() {
  const navigate = useNavigate();

  return (
    <ServicesSection id="servicios">
      <SectionHeader>
        <SectionLabel>Lo que hacemos</SectionLabel>
        <SectionTitle
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          Nuestros Servicios
        </SectionTitle>
        <SectionSubtitle
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          Producción audiovisual integral adaptada a las necesidades de tu marca
        </SectionSubtitle>
      </SectionHeader>

      <ServicesGrid
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}>
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <ServiceCard
              key={service.id}
              variants={cardVariants}
              $featured={service.featured}
              onClick={() => navigate(`/servicios/${service.slug}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  navigate(`/servicios/${service.slug}`);
              }}>
              <CardBg $image={service.image} className="service-bg" />
              <CardOverlay />
              <CardContent>
                <CardTag>
                  <Icon />
                  {service.tagline}
                </CardTag>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </ServiceCard>
          );
        })}
      </ServicesGrid>
    </ServicesSection>
  );
}
