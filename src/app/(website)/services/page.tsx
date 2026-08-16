import BookingToConsultation from '@/components/about/BookingToConsultation'
import CareerGuidance from '@/components/services/career/CareerGuidance'
import DocumentationSupport from '@/components/services/documentation/DocumentationSupport'
import ImmigrationServices from '@/components/services/immigration/ImmigrationServices'
import LanguageTest from '@/components/services/language/LanguageTest'
import Servicstop from '@/components/services/Servicstop'
import StudyVisaConsulting from '@/components/services/studyvisa/StudyVisaConsulting'
import WorkVisaConsulting from '@/components/services/workvisa/WorkVisaConsulting'
import React from 'react'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Visa, Immigration & Documentation Services',
  description: 'Explore work visa, study visa, immigration, career, documentation and language guidance services from Destiny Abroad.',
  path: '/services',
})

const page = () => {
  return (
    <div>
            <Servicstop />
            <WorkVisaConsulting />
            <StudyVisaConsulting />
            <ImmigrationServices />
            <CareerGuidance />
            <DocumentationSupport />
            <LanguageTest />
            
            <BookingToConsultation />
    </div>
  )
}

export default page
