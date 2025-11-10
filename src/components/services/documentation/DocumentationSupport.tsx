import Services from '@/components/shared/Services'
import React from 'react'

const DocumentationSupport = () => {
  return (
    <div>
      <Services
        tittle="Documentation & Application Support"
        dis1="We provide professional guidance for individuals who need assistance with preparing, organizing, and submitting documents for visas, study programs, or immigration applications. Our experts ensure that all requirements are clearly understood and that every document is accurate and compliant."
        dis2="From document verification to application submission, we offer complete end-to-end support for a smooth process. Our team assists with form filling, credential checks, and submission tracking to help you avoid delays or rejections. With our tailored approach, your applications are handled efficiently and professionally."
        image="/images/international.png"
        icon="/service/visa.svg"
        button="More Info"
        imgchange
        btnlink='/services/documentationvisadetails'
      />
    </div>
  )
}

export default DocumentationSupport
