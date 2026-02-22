import { services } from '../../data/services'
import ServicioPage from '../ServicioPage'

const service = services.find((s) => s.slug === 'branded-content')!

export default function BrandedContent() {
  return <ServicioPage service={service} allServices={services} />
}
