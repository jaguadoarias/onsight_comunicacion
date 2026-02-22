import { services } from '../../data/services'
import ServicioPage from '../ServicioPage'

const service = services.find((s) => s.slug === 'streaming')!

export default function Streaming() {
  return <ServicioPage service={service} allServices={services} />
}
