import React from 'react'
import Common from '../components/Common';
import Leftside from './leftside';
import Rightside from './rightside';
import Footer from '../components/Footer';

const page = () => {
  return (

         <div className="md:mx-w-[1920px]">
         <Common title='Blog List' subtitle='Blog' />
         <div className='md:max-w-[1320px] gap-4 flex flex-col md:flex-row'>
         <Leftside />
         <Rightside />
         </div>
         <Footer />
      </div>
      );
      
};

export default page;
