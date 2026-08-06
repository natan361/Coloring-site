import { useParams, Navigate } from 'react-router-dom'
import ServiceDetail from '../components/ServiceDetail.jsx'
import { residentialServices } from '../data/residentialServices.js'
import { commercialServices } from '../data/commercialServices.js'
import Seo from '../components/Seo.jsx'
import business from '../data/business.js'

export default function ServiceDetailPage({ section }) {
  const { slug } = useParams()
  const list = section === 'commercial' ? commercialServices : residentialServices
  const service = list.find((s) => s.slug === slug)

  if (!service) {
    return <Navigate to={section === 'commercial' ? '/commercial' : '/residential'} replace />
  }

  return (
    <>
      <Seo
        title={service.title}
        description={`${service.subtitle} שירות ב${business.serviceArea}, עם הצעת מחיר חינם וללא התחייבות.`}
      />
      <ServiceDetail service={service} />
    </>
  )
}
