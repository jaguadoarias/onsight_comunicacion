import {
  FaFilm,
  FaPlay,
  FaBuilding,
  FaBroadcastTower,
  FaRocket,
  FaVideo,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  features: string[];
  image: string;
  icon: IconType;
  featured: boolean;
}

export const services: Service[] = [
  {
    id: "branded",
    slug: "branded-content",
    title: "Branded Content",
    tagline: "Storytelling",
    description:
      "Creamos narrativas originales que vinculan emociones con tu marca. Historias que conectan, convencen y permanecen en la memoria de tu audiencia.",
    fullDescription:
      "El Branded Content es la forma más poderosa de conectar con tu audiencia porque no interrumpe, seduce. Creamos piezas audiovisuales que cuentan la historia de tu marca de forma auténtica, emocional y memorable. Desde cortometrajes de marca hasta series de contenido para redes sociales, desarrollamos conceptos creativos que reflejan tus valores y resuenan con tu público objetivo.",
    features: [
      "Desarrollo de concepto creativo y guión",
      "Producción audiovisual de alta calidad",
      "Postproducción y etalonaje cinematográfico",
      "Adaptación multiplataforma (YouTube, Instagram, LinkedIn)",
      "Estrategia de distribución y contenido",
      "Métricas de impacto y análisis de resultados",
    ],
    image: "/images/onsight_branded.jpg",
    icon: FaFilm,
    featured: false,
  },
  {
    id: "streaming",
    slug: "streaming",
    title: "Eventos & Streaming",
    tagline: "Eventos en Directo",
    description:
      "Producimos y retransmitimos tus eventos en tiempo real con la más alta calidad técnica. Desde la organización hasta la emisión global, llevamos tu evento más allá del aforo.",
    fullDescription:
      "Un evento bien producido trasciende su espacio físico. Nos encargamos de la producción integral de tus eventos presenciales y de su retransmisión en directo: desde la planificación técnica y logística hasta la emisión simultánea en múltiples plataformas. Congresos, conferencias, presentaciones de producto, galas corporativas, lanzamientos y webinars con la calidad de imagen y sonido que tu marca merece. El streaming amplifica el impacto de cada evento, llegando a audiencias ilimitadas en cualquier parte del mundo.",
    features: [
      "Producción integral de eventos presenciales e híbridos",
      "Retransmisión multicámara en directo con realizador",
      "Emisión simultánea a YouTube, LinkedIn y plataformas propias",
      "Diseño y gestión de grafismo y rótulos en tiempo real",
      "Coordinación técnica y logística del evento",
      "Grabación y edición del evento para distribución posterior",
    ],
    image: "/images/onsight_streaming.jpg",
    icon: FaBroadcastTower,
    featured: false,
  },
  {
    id: "corporativos",
    slug: "corporativos",
    title: "Vídeos Corporativos",
    tagline: "Imagen de Marca",
    description:
      "Reflejamos los valores y la identidad de tu empresa con producciones audiovisuales de máxima calidad. Tu mejor carta de presentación.",
    fullDescription:
      "El vídeo corporativo es la herramienta más efectiva para transmitir la cultura, los valores y el propósito de tu empresa. Producimos piezas institucionales que generan confianza en clientes, socios e inversores: desde vídeos de empresa hasta presentaciones de producto, entrevistas a directivos y reportajes sobre procesos internos. Calidad cinematográfica al servicio de tu imagen corporativa.",
    features: [
      "Vídeos institucionales y de empresa",
      "Presentaciones de producto y servicio",
      "Entrevistas corporativas y testimoniales",
      "Reportajes de eventos y convenciones",
      "Vídeos de onboarding y formación interna",
      "Piezas para inversores y pitch decks audiovisuales",
    ],
    image: "/images/onsight_corporativos.jpg",
    icon: FaBuilding,
    featured: false,
  },
  {
    id: "videomarketing",
    slug: "videomarketing",
    title: "Funnels & Videomarketing",
    tagline: "Vídeo que Vende",
    description:
      "Producimos los vídeos que necesita cada etapa de tu funnel: desde el anuncio que capta la atención hasta el VSL que cierra la venta. Vídeo estratégico al servicio de tu embudo de conversión.",
    fullDescription:
      "El vídeo es el activo más poderoso dentro de un funnel de ventas web. Producimos piezas específicas para cada fase del embudo: anuncios de captación que generan tráfico cualificado, vídeos de presentación de oferta para landings, VSL (Video Sales Letters) que argumentan y convierten, y testimoniales que eliminan objeciones. Cada pieza está diseñada con un objetivo claro dentro de tu proceso de venta digital, lista para integrarse en tu landing page o funnel.",
    features: [
      "VSL (Video Sales Letter) para páginas de venta",
      "Vídeos de presentación de oferta para landings",
      "Anuncios de captación (Meta Ads, Google Ads, TikTok Ads)",
      "Vídeos de testimoniales y casos de éxito",
      "Piezas de seguimiento para secuencias de email",
      "A/B testing de creatividades para optimizar conversión",
    ],
    image: "/images/onsight_making-of.jpg",
    icon: FaPlay,
    featured: false,
  },
  {
    id: "webs",
    slug: "webs-funnels",
    title: "Webs & Hosting",
    tagline: "Conversión Digital",
    description:
      "Diseñamos y desarrollamos webs, landings de venta y embudos de conversión que transforman visitas en clientes. Cada elemento está pensado para guiar al usuario hacia la acción y maximizar tus resultados.",
    fullDescription:
      "Una web bonita que no convierte es dinero mal invertido. Diseñamos y desarrollamos sitios web y embudos de conversión orientados a resultados: páginas de captación, landings de venta, tiendas online y webs corporativas. Combinamos diseño UX/UI centrado en el usuario con estrategia de conversión para que cada visita cuente. Desarrollo en tecnologías modernas con rendimiento óptimo y posicionamiento SEO.",
    features: [
      "Diseño UX/UI orientado a conversión",
      "Desarrollo web en React, Next.js o WordPress",
      "Landings de venta y páginas de captación",
      "Funnels de email marketing integrados",
      "Integración con CRM y herramientas de automatización",
      "Optimización SEO y rendimiento (Core Web Vitals)",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
    icon: FaRocket,
    featured: false,
  },
  {
    id: "creadores-hub",
    slug: "creadores-hub",
    title: "Creadores Hub",
    tagline: "Tu Estudio Creator",
    description:
      "El estudio profesional y el equipo que necesitas para elevar tu contenido al siguiente nivel. Grabación, edición y estrategia para creadores que quieren diferenciarse.",
    fullDescription:
      "Sabemos lo que necesita un creador de contenido para destacar: equipo profesional, espacio adecuado y un equipo que entiende tu estilo y tu audiencia. En Creadores Hub ponemos a tu disposición nuestro estudio equipado, cámaras de alta gama, iluminación cinematográfica y todo el soporte de producción y postproducción para que tú solo te preocupes de crear. Tanto si eres youtuber, instagramer, podcaster o tiktoker, transformamos tus ideas en piezas que enganchen, crezcan y moneticen. Desde vídeos largos para YouTube hasta packs de contenido semanal para Instagram y TikTok, producimos contigo y para ti.",
    features: [
      "Alquiler de estudio con equipo técnico incluido",
      "Grabación multicámara para YouTube y podcasts",
      "Producción de Reels, TikToks y contenido vertical",
      "Edición y montaje con grafismo personalizado",
      "Diseño de miniaturas (thumbnails) y portadas",
      "Packs de contenido mensual para redes sociales",
    ],
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1920&q=80",
    icon: FaVideo,
    featured: false,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
