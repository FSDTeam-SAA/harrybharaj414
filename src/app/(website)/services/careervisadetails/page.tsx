import BookingToConsultation from '@/components/about/BookingToConsultation'
import CareerVisadetailsBenifit from '@/components/services/career/details/CareerVisadetailsBenifit'
import CareerVisadetailsHero from '@/components/services/career/details/CareerVisadetailsHero'
import CareerVisadetailsIncluded from '@/components/services/career/details/CareerVisadetailsIncluded'
import CareervisadetailsSucces from '@/components/services/career/details/CareervisadetailsSucces'
import CareearLegal from '@/components/services/legaldisclamer/CareearLegal'
import React from 'react'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Career & CV Guidance Services',
  description: 'Build a stronger international career plan with CV, profile and opportunity guidance from Destiny Abroad.',
  path: '/services/careervisadetails',
})

const page = () => {
  return (
    <div>
        <CareerVisadetailsHero />
        <CareerVisadetailsIncluded />
        <CareerVisadetailsBenifit  />
        <CareervisadetailsSucces />
        <BookingToConsultation />
        <CareearLegal />
    </div>
  )
}

export default page
