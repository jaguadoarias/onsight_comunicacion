import { services } from '../../data/services'
import ServicioPage from '../ServicioPage'

const service = services.find((s) => s.slug === 'corporativos')!

export default function VideosCorporativos() {
  return <ServicioPage service={service} allServices={services} />
}
