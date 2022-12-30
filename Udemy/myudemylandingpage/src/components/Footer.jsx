import React from 'react'
import { worldicon2 , Udemylogo , udemylogo2 } from '../assets';

 const Footer = () => {
  return (
    <div className='bg-zinc-900 h-[300px]'>
        <div className=' h-[200px] w-full pt-6 flex'>
            <div className=' w-[50%] h-[150px] flex space-x-40'>
            <ul className='text-white ml-[43px] space-y-1 text-[15px]'>
                <li>Udemy Business</li>
                <li>Teach on Udemy</li>
                <li>Get the app</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
            <ul className='text-white ml-[43px] space-y-1 text-[15px]'>
                <li>Career</li>
                <li>Blog</li>
                <li>Help and Support</li>
                <li>Affiliate</li>
                <li>Investors</li>
            </ul>
            <ul className='text-white ml-[43px] space-y-1 text-[15px]'>
                <li>Terms</li>
                <li>Privacy policy</li>
                <li>Cookie settings</li>
                <li>Sitemap</li>
                <li>Accessibility statement</li>
            </ul>
            </div>
            <div className=' w-[50%] h-[150px] flex space-x-40 mr-[30px] justify-end'>
              <button className='border-2 border-white h-[48px] w-[140px] text-white flex items-center'>
                <img src={worldicon2} alt="worldicon" className='h-[22px] ml-2 ' />
                <p className='text-white text-lg ml-1'>English</p>
              </button>
            </div>
           
        </div>
        <div className=' h-[100px] flex'>
            <div className=' w-[50%] h-[100px]'>
            <img src={udemylogo2} alt="logo" className='h-[55px] ml-10 mt-[20px]'/>
            </div>
            <div className=' w-[50%] flex justify-end items-center '>
                <p className='text-white text-sm mr-10'>&copy; 2022 Udemy, Inc.</p>
            </div>
        </div>
    </div>
  )
}
export default Footer;
