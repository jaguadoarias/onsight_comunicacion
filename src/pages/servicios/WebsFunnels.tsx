import { services } from '../../data/services'
import ServicioPage from '../ServicioPage'

const service = services.find((s) => s.slug === 'webs-funnels')!

export default function WebsFunnels() {
  return <ServicioPage service={service} allServices={services} />
}
