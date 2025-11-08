import WorkVisadetailsBenifit from '@/components/services/workvisa/details/WorkVisadetailsBenifit'
import WorkVisadetailsHero from '@/components/services/workvisa/details/WorkVisadetailsHero'
import WorkVisadetailsIncluded from '@/components/services/workvisa/details/WorkVisadetailsIncluded'
import WorkvisadetailsSucces from '@/components/services/workvisa/details/WorkvisadetailsSucces'
import React from 'react'

const page = () => {
  return (
    <div>
        <WorkVisadetailsHero />
        <WorkVisadetailsIncluded />
        <WorkVisadetailsBenifit />
        <WorkvisadetailsSucces />
    </div>
  )
}

export default page