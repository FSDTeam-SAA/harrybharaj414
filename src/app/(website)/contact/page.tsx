
import ContactMessage from '@/components/contact/ContactMessage'
import GetToTuch from '@/components/contact/GetToTuch'
import React from 'react'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Contact Visa & Immigration Consultants',
  description: 'Contact Destiny Abroad FZ-LLC in Ras Al Khaimah for visa, immigration, study and documentation guidance.',
  path: '/contact',
})

const page = () => {
  return (
    <div>
      <GetToTuch />
       <ContactMessage />
       {/* <ContactMap /> */}
    </div>
  )
}

export default page
