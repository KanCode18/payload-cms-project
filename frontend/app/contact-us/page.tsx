import ContactPage from '@/sections/contact-page'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Created by Kanishk Chhabra",
};
const ContactUs = () => {
  return (
  <ContactPage/>
  )
}

export default ContactUs