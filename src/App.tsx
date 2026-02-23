import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'

import Home from './pages/Home'
import Trabajos from './pages/Trabajos'
import AvisoLegal from './pages/legal/AvisoLegal'
import PoliticaPrivacidad from './pages/legal/PoliticaPrivacidad'
import PoliticaCookies from './pages/legal/Cookies'
import BrandedContent from './pages/servicios/BrandedContent'
import Videomarketing from './pages/servicios/Videomarketing'
import VideosCorporativos from './pages/servicios/VideosCorporativos'
import Streaming from './pages/servicios/Streaming'
import WebsFunnels from './pages/servicios/WebsFunnels'
import CreadoresHub from './pages/servicios/CreadoresHub'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/servicios/branded-content" element={<BrandedContent />} />
          <Route path="/servicios/videomarketing" element={<Videomarketing />} />
          <Route path="/servicios/corporativos" element={<VideosCorporativos />} />
          <Route path="/servicios/streaming" element={<Streaming />} />
          <Route path="/servicios/webs-funnels" element={<WebsFunnels />} />
          <Route path="/servicios/creadores-hub" element={<CreadoresHub />} />
          <Route path="/legal/aviso-legal" element={<AvisoLegal />} />
          <Route path="/legal/privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/legal/cookies" element={<PoliticaCookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
