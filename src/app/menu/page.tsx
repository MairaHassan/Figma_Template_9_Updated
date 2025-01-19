import React from 'react'
import Common from '../components/Common'
import Menu1 from './menu1'
import Menu2 from './menu2'
import Menu3 from './menu3'
import Menu4 from './menu4'
import Menu5 from './menu5'
import Menu6 from './menu6'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Common title='Our Menu' subtitle='Menu'/>
      <Menu1 />
      <Menu2/>
      <Menu3 />
      <Menu4 />
      <Menu5 />
      <Menu6 />
      <Footer />
      </div>
  )
}

export default page
