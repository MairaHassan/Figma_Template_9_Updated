"use client"
import React from 'react'
import TeamMember from './team'
import Testimonial1 from './testimonial'
import CommentSection from './comments'
import Foodmenu from './foodmenu'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Aboutus from './aboutus'

const page = () => {
  return (
    <div>
      <Header />
   <div>
  <Aboutus />
  <TeamMember/>
  <Testimonial1/>
  <Foodmenu />
      <CommentSection/>
    </div>
    <Footer />
    </div>
  )
}

export default page