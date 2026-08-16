import BookingToConsultation from '@/components/about/BookingToConsultation'
import LanguageVisadetailsBenifit from '@/components/services/language/details/LanguageVisadetailsBenifit'
import LanguageVisadetailsHero from '@/components/services/language/details/LanguageVisadetailsHero'
import LanguageVisadetailsIncluded from '@/components/services/language/details/LanguageVisadetailsIncluded'
import LanguagevisadetailsSucces from '@/components/services/language/details/LanguagevisadetailsSucces'
import LanguageLegal from '@/components/services/legaldisclamer/LanguageLegal'
import React from 'react'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Language Test Preparation Guidance',
  description: 'Prepare for language tests with guidance that supports your study, work or immigration plans.',
  path: '/services/languagevisadetails',
})

const page = () => {
  return (
    <div>
        <LanguageVisadetailsHero />
        <LanguageVisadetailsIncluded />
        <LanguageVisadetailsBenifit />
        <LanguagevisadetailsSucces />
        <BookingToConsultation />
        <LanguageLegal />
    </div>
  )
}

export default page
