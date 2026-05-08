import React from 'react'

import Footertext from './Footertext'
import Footerbutton from './Footerbutton'
import Footinfo from './Footinfo';

const Footer = () => {
  return (
    <div className='h-screen pt-5 px-5 bg-white'>
        <div className='bg-black shadow-xl rounded-t-[20px] h-full'>

            <div className='h-2/3 lg:h-3/4 z-10 w-full relative border-b-[1px] border-[#808181]/70'>

               
            <div className='lg:full absolute right-0 top-0 bg-black h-full bg-[url(/footerearth.png)] rounded-t-[20px] opacity-100 bg-cover inset-0'></div>
              <div className="absolute inset-0 bg-black/10 lg:hidden"></div>

            <div className='lg:w-1/2 w-full h-full'>
               <Footertext/>
               
               <Footerbutton/>
            </div>




            </div>

            <Footinfo/>

        </div>
    </div>
  )
}

export default Footer