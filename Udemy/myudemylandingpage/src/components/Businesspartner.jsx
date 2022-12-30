import React from 'react'
import { logo1,logo2,logo3,logo4,logo5,logo6 } from '../assets';

 const Businesspartner = () => {
  return (
    <div className=' h-[190px]  mt-[80px]'>
        <div className=' h-[100px]'>
            <h1 className='font-bold text-2xl text-center'>Trusted by over 13,400 great teams</h1>
            <p className='text-[17px] text-center mt-3'>Leading companies use the same courses to help employees keep their skills fresh.</p>
        </div>
        <div className=' h-[100px] flex justify-center space-x-28'>
            <img src={logo1} alt="logo1" className='h-12' />
            <img src={logo2} alt="logo2" className='h-12' />
            <img src={logo3} alt="logo3" className='h-12' />
            <img src={logo4} alt="logo4" className='h-12' />
            <img src={logo5} alt="logo5" className='h-12' />
            <img src={logo6} alt="logo6" className='h-12' />
        </div>
    </div>
  )
}
export default Businesspartner;
