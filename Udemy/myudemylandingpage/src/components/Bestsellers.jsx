import React from 'react';
import Options2 from './Options2';
import { arrow } from '../assets';
 const Bestsellers = () => {
  return (
    <div className=' h-[360px] w-full mt-[200px] flex justify-center '>
        <div className=' h-[100%] w-[84%] '>
            <h1 className='font-bold text-2xl'>Students are viewing</h1>
            <div className='mt-4 w-[84%] h-[86.5%] '>
            <div className=' h-[300px] w-[1274px] flex space-x-5 absolute z-0 overflow-hidden'>
            <Options2 />
            <Options2 />
            <Options2 />
            <Options2 />
            <Options2 />
            <Options2 />
            <Options2 />
            <Options2 />
            </div>
           
            <div className='flex  justify-end items-center h-[20%] w-[85%] absolute z-10'>
            <button className='bg-black h-10 w-10 rounded-full text-white ml-4 flex justify-center items-center' >
            <img src={arrow} alt="" className='h-5 rotate-180'/>
           </button>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Bestsellers;
