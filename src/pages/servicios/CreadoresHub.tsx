import { services } from '../../data/services'
import ServicioPage from '../ServicioPage'

const service = services.find((s) => s.slug === 'creadores-hub')!

export default function CreadoresHub() {
  return <ServicioPage service={service} allServices={services} />
}
