import React from 'react'
import { useState } from 'react';
import { arrow , udemybg1, udemybg2 } from '../assets';
 const Hero = () => {
    const [index,setIndex] = useState(0);
  return (
    <div className='w-full  h-[500px] flex justify-center'>
        <div className=' h-[398px] w-[86.8%] flex  items-center z-10 absolute'>
           <button className='bg-black h-10 w-10 rounded-full text-white ml-4 flex justify-center items-center' onClick={()=>{setIndex(prev=> prev==0?1:0)}} >
            <img src={arrow} alt="" className='h-5'/>
           </button>
           <button className='bg-black h-10 w-10 rounded-full text-white ml-[1200px] flex justify-center items-center ' onClick={()=>setIndex(prev=> prev==0?1:0)} >
            <img src={arrow} alt="" className='h-5 rotate-180'/>
           </button>
        </div>
        <div className='h-[398px] w-[86.8%] absolute z-0 '>
        <div className={`h-[398px] w-[100%] absolute z-0`}>
           <img src={udemybg1} alt="" className='h-[100%] w-[100%] object-contain absolute z-0'  />
           <div className='bg-white h-[180px] w-[430px] absolute z-10 mt-[65px] ml-[70px] flex justify-center items-center'>
           <div className=' h-[120px] w-[390px]'>
           <h1 className=' font-bold text-3xl'>Unlock the power of your people</h1>
            <p className='mt-2'>Udemy Business is trusted by 12.5K+ companies around the world. <u className='text-blue-700'>Find out what we can do for yours.</u></p>
           </div>
           </div>
           <button className=' bg-purple-600 absolute z-0 text-white mt-[65px] ml-[70px] h-[45px] w-[145px] font-bold'>Request a demo</button>
        </div>
        {/* <div className={`h-[398px] w-[100%]  absolute z-10`}>
           <img src={udemybg2} alt="" className='h-[100%] w-[100%] object-contain absolute z-0' />
           <div className='bg-white h-[180px] w-[430px] absolute z-10 mt-[65px] ml-[70px] flex justify-center items-center'>
           <div className=' h-[120px] w-[390px]'>
           <h1 className=' font-bold text-3xl'>Unlock the power of your people</h1>
            <p className='mt-2'>Udemy Business is trusted by 12.5K+ companies around the world. <u className='text-blue-700'>Find out what we can do for yours.</u></p>
           </div>
           </div>
        </div> */}
        </div>
    </div>
  )
}
export default Hero;
// onClick={setIndex((prev)=>{prev==0?1:0})}