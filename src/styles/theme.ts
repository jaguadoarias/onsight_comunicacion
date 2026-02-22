export const theme = {
  colors: {
    bg: "#0a0a0a",
    bgDark: "rgba(0, 0, 0, 0.85)",
    bgDarker: "rgba(0, 0, 0, 0.95)",
    bgCard: "rgba(255, 255, 255, 0.04)",
    bgCardHover: "rgba(255, 255, 255, 0.08)",
    primary: "#DB2D2D",
    primaryBright: "#FF3D3D",
    secondary: "#C9A227",
    secondaryBright: "#DAA520",
    red: "#bd1d00",
    redHover: "#e52200",
    white: "#FFFFFF",
    textMuted: "rgba(255, 255, 255, 0.65)",
    textDim: "rgba(255, 255, 255, 0.40)",
    glass: "rgba(255, 255, 255, 0.05)",
    glassBorder: "rgba(255, 255, 255, 0.10)",
    glassPrimary: "rgba(219, 45, 45, 0.12)",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "5rem",
  },
  font: {
    display: "Montserrat, sans-serif",
    body: "Nunito, sans-serif",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    md: "1.2rem",
    lg: "1.5rem",
    xl: "1.8rem",
    "2xl": "2.5rem",
    "3xl": "3.5rem",
    "4xl": "5rem",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  layout: {
    maxWidth: "1280px",
    headerHeight: "80px",
  },
  radius: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    full: "9999px",
  },
  shadow: {
    primary: "0 0 30px rgba(219, 45, 45, 0.25)",
    card: "0 8px 32px rgba(0, 0, 0, 0.5)",
    glow: "0 0 60px rgba(219, 45, 45, 0.15)",
  },
  transition: {
    fast: "0.2s ease",
    normal: "0.35s ease",
    slow: "0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1440px",
  },
} as const;

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
