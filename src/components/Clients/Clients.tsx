import { useTranslation } from "react-i18next";
import { fadeUpVariants } from "../../styles/animations";
import {
  ClientsSection,
  ClientsContainer,
  SectionLabel,
  SectionTitle,
  MarqueeWrapper,
  MarqueeTrack,
  ClientLogo,
  ClientName,
} from "./Clients.styles";

const clients = [
  { name: "CASER SEGUROS", logo: "/images/clientes/caser.png" },
  { name: "PRENSA IBÉRICA", logo: "/images/clientes/prensa_iberica.png" },
  { name: "ECOCLIMB", logo: "/images/clientes/ecoclimb.png" },
  { name: "ADMIRAL", logo: "/images/clientes/admiral.png" },
  { name: "A3MEDIA", logo: "/images/clientes/a3media.png" },
  { name: "Cadena SER", logo: "/images/clientes/cadena_ser.png" },
  { name: "Telemadrid", logo: "/images/clientes/telemadrid.png" },
  { name: "The Line", logo: "/images/clientes/the_line.png" },
];

export default function Clients() {
  const { t } = useTranslation();
  const doubled = [...clients, ...clients];

  return (
    <ClientsSection id="clientes">
      <ClientsContainer>
        <SectionLabel>{t("clients.label")}</SectionLabel>
        <SectionTitle
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          {t("clients.title")}
        </SectionTitle>
      </ClientsContainer>

      <MarqueeWrapper>
        <MarqueeTrack className="marquee-track">
          {doubled.map((client, i) => (
            <ClientLogo key={i}>
              {client.logo ? (
                <img src={client.logo} alt={client.name} />
              ) : (
                <ClientName>{client.name}</ClientName>
              )}
            </ClientLogo>
          ))}
        </MarqueeTrack>
      </MarqueeWrapper>

      <MarqueeWrapper style={{ marginTop: "1rem" }}>
        <MarqueeTrack className="marquee-track" $reverse>
          {doubled.map((client, i) => (
            <ClientLogo key={i}>
              {client.logo ? (
                <img src={client.logo} alt={client.name} />
              ) : (
                <ClientName>{client.name}</ClientName>
              )}
            </ClientLogo>
          ))}
        </MarqueeTrack>
      </MarqueeWrapper>
    </ClientsSection>
  );
}
