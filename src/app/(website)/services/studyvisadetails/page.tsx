import BookingToConsultation from '@/components/about/BookingToConsultation'
import StudyLegal from '@/components/services/legaldisclamer/StudyLegal'
import StudyVisadetailsBenifit from '@/components/services/studyvisa/details/StudyVisadetailsBenifit'
import StudyVisadetailsHero from '@/components/services/studyvisa/details/StudyVisadetailsHero'
import StudyVisadetailsIncluded from '@/components/services/studyvisa/details/StudyVisadetailsIncluded'
import StudyvisadetailsSucces from '@/components/services/studyvisa/details/StudyvisadetailsSucces'

import React from 'react'

const page = () => {
  return (
    <div>
        <StudyVisadetailsHero />
        <StudyVisadetailsIncluded />
        <StudyVisadetailsBenifit />
        <StudyvisadetailsSucces />
        <BookingToConsultation />
        <StudyLegal />
    </div>
  )
}

export default page