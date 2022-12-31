import React from 'react'
import { arrow } from '../assets';
import Options from './Options';

 const Course = () => {
  return (
    <div className=' h-[350px] w-full flex justify-center'>
        <div className=' h-[100%] w-[84%]'> 
        <h1 className='font-bold text-[34px]'>Learn in-demand professional skills</h1>
        <p className='text-lg mt-[14px]'>Choose from courses in English and many other languages</p>
        <ul className='flex space-x-6 mt-[8px]'>
            <li className='font-bold'>Python</li>
            <li className='font-bold text-gray-500 hover:text-black'>Web Development</li>
            <li className='font-bold text-gray-500 hover:text-black'>Excel</li>
            <li className='font-bold text-gray-500 hover:text-black'>AWS Certified Solutions Architect-Associate</li>
            <li className='font-bold text-gray-500 hover:text-black'>JavaScript</li>
            <li className='font-bold text-gray-500 hover:text-black'>React JS</li>
            <li className='font-bold text-gray-500 hover:text-black'>Amazon AWS</li>
        </ul>
        <div className='border-gray-400 h-[100%] w-[100%] border-[1px] mt-[8px] '>
           <div className=' h-[40%] w-[80%] flex  space-x-4 absolute z-0 mt-[30px] ml-[30px] overflow-hidden'>
              <Options />
              <Options />
              <Options />
               <Options />
               <Options />
               <Options />
               <Options />
           </div>
            <div className='flex  justify-end items-center h-[100%] mr-3  z-10'>
            <button className='bg-black h-10 w-10 rounded-full text-white ml-4 flex justify-center items-center' >
            <img src={arrow} alt="" className='h-5 rotate-180'/>
           </button>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Course;
