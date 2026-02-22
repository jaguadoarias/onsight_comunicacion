import { services } from '../../data/services'
import ServicioPage from '../ServicioPage'

const service = services.find((s) => s.slug === 'videomarketing')!

export default function Videomarketing() {
  return <ServicioPage service={service} allServices={services} />
}
