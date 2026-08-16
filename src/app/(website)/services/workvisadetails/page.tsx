import BookingToConsultation from '@/components/about/BookingToConsultation'
import WorkLegal from '@/components/services/legaldisclamer/WorkLegal'
import WorkVisadetailsBenifit from '@/components/services/workvisa/details/WorkVisadetailsBenifit'
import WorkVisadetailsHero from '@/components/services/workvisa/details/WorkVisadetailsHero'
import WorkVisadetailsIncluded from '@/components/services/workvisa/details/WorkVisadetailsIncluded'
import WorkvisadetailsSucces from '@/components/services/workvisa/details/WorkvisadetailsSucces'
import React from 'react'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Work Visa Consulting Services',
  description: 'Understand the work visa support and application guidance available through Destiny Abroad.',
  path: '/services/workvisadetails',
})

const page = () => {
  return (
    <div>
        <WorkVisadetailsHero />
        <WorkVisadetailsIncluded />
        <WorkVisadetailsBenifit />
        <WorkvisadetailsSucces />
        <BookingToConsultation />
        <WorkLegal />
    </div>
  )
}

export default page
