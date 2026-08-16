import AboutLegalDisclamer from '@/components/about/AboutLegalDisclamer'
import BookingToConsultation from '@/components/about/BookingToConsultation'
import SuccessStory from '@/components/about/SuccessStory'
import MyAchievement from '@/components/home/MyAchievement'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import React from 'react'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'About Destiny Abroad FZ-LLC',
  description: 'Learn about Destiny Abroad FZ-LLC and our approach to work visas, study visas, immigration and documentation support.',
  path: '/about',
})

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
