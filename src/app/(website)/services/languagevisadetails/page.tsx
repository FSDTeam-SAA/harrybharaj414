import LanguageVisadetailsBenifit from '@/components/services/language/details/LanguageVisadetailsBenifit'
import LanguageVisadetailsHero from '@/components/services/language/details/LanguageVisadetailsHero'
import LanguageVisadetailsIncluded from '@/components/services/language/details/LanguageVisadetailsIncluded'
import LanguagevisadetailsSucces from '@/components/services/language/details/LanguagevisadetailsSucces'
import LanguageLegal from '@/components/services/legaldisclamer/LanguageLegal'
import React from 'react'

const page = () => {
  return (
    <div>
        <LanguageVisadetailsHero />
        <LanguageVisadetailsIncluded />
        <LanguageVisadetailsBenifit />
        <LanguagevisadetailsSucces />
        <LanguageLegal />
    </div>
  )
}

export default page