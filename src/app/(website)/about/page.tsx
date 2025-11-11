import AboutLegalDisclamer from '@/components/about/AboutLegalDisclamer'
import BookingToConsultation from '@/components/about/BookingToConsultation'
import SuccessStory from '@/components/about/SuccessStory'
import MyAchievement from '@/components/home/MyAchievement'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <SuccessStory />
       <MyAchievement />
       <WhyChooseUs />
       {/* <MeetOurTeams /> */}
       <BookingToConsultation />
       <AboutLegalDisclamer />
    </div>
  )
}

export default page