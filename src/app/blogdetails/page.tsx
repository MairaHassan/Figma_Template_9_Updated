import React from 'react'
import Rightside from './rightside'
import Link from 'next/link'
import Blog from '../blog/rightside'
import Header from '../components/Header'
import Footer from '../components/Footer'
const BlogDetailPage = () => {
  return (
    <div >
        <Header />
        <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg_cover.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Blog Details</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-500">Home</Link> › Blog details
          </p>
        </div>
      </section>
      <div className='md:max-w-[1920px] justify-center items-center object-cover'>
        <div className='md:max-w-[1320px] mt-16 flex flex-col lg:flex-row'>
          <div className='md:max-w-2/4'>
            <Rightside />
          </div>
          <div className='md:max-w-1/4 mb-8'>
           <Blog/>
            </div>
          </div>
      </div>
     <Footer />
    </div>
  )
}

export default BlogDetailPage;