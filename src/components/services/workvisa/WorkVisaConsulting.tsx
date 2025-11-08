import Services from '@/components/shared/Services'
import React from 'react'

const WorkVisaConsulting = () => {
  return (
    <div>
      <Services
        tittle="Working Visa Consulting"
        dis1="We provide expert guidance for individuals who want to build their
        careers abroad by securing a legal work visa. Our consultants help you
        choose the right country, job market, and pathway based on your
        skills, experience, and goals. We ensure you have a clear
        understanding of the requirements, eligibility, and process so you can
        move forward with confidence."
        dis2="From preparing documents to submitting applications, we offer complete
        end-to-end support for a smooth visa process. Our team assists with
        job profiling, resume optimization, application submissions, and
        interview preparation to increase your chances of approval. With our
        tailored approach, we help you successfully unlock global work
        opportunities and start your professional journey overseas."
        image="/images/services.jpg"
        icon="/service/visa.svg"
        button="More Info"
        imgchange
        btnlink="/services/workvisadetails"
      />
    </div>
  )
}

export default WorkVisaConsulting
