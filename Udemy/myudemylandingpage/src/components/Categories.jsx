import React from 'react'
import { img1,img2,img3,img4,img5,img6,img7,img8 } from '../assets';
 const Categories = () => {
  return (
    <div className=' h-[840px] w-full mt-[90px] flex justify-center'>
        <div className=' h-full w-[84%]'>
            <h1 className='font-bold text-2xl'>Top Categories</h1>
            <div className=' h-[790px] w-full mt-[19px]'>
               
                <div className='bg-white h-[395px] w-full  flex space-x-6'>
                <div className='h-[395px] w-[300px]'>
                    <div className=' h-[300px] w-[300px]  hover:overflow-hidden'>
                        <img src={img1} className = "hover:scale-105" />
                    </div>
                    <h1 className='font-bold text-xl mt-[6px]'>Desgin</h1>
                    </div>
                    <div className='h-[395px] w-[300px]'>
                    <div className=' h-[300px] w-[300px]  hover:overflow-hidden'>
                        <img src={img2} className = "hover:scale-105" />
                    </div>
                    <h1 className='font-bold text-xl mt-[6px]'>Developement</h1>
                    </div>
                    <div className='h-[395px] w-[300px]'>
                    <div className=' h-[300px] w-[300px]  hover:overflow-hidden'>
                        <img src={img3} className = "hover:scale-105" />
                    </div>
                    <h1 className='font-bold text-xl mt-[6px]'>Marketing</h1>
                    </div>
                    <div className='h-[395px] w-[300px]'>
                    <div className=' h-[300px] w-[300px]  hover:overflow-hidden'>
                        <img src={img4} className = "hover:scale-105" />
                    </div>
                    <h1 className='font-bold text-xl mt-[6px]'>IT and Software</h1>
                    </div>
                </div>
                <div className='bg-white h-[395px] w-full  flex space-x-6'>
                <div className='h-[395px] w-[300px]'>
                    <div className=' h-[300px] w-[300px]  hover:overflow-hidden'>
                        <img src={img5} className = "hover:scale-105" />
                    </div>
                    <h1 className='font-bold text-xl mt-[6px]'>Personal Developement</h1>
                    </div>
                    <div className='h-[395px] w-[300px]'>
                    <div className=' h-[300px] w-[300px]  hover:overflow-hidden'>
                        <img src={img6} className = "hover:scale-105" />
                    </div>
                    <h1 className='font-bold text-xl mt-[6px]'>Business</h1>
                    </div>
                    <div className='h-[395px] w-[300px]'>
                    <div className=' h-[300px] w-[300px]  hover:overflow-hidden'>
                        <img src={img7} className = "hover:scale-105" />
                    </div>
                    <h1 className='font-bold text-xl mt-[6px]'>Photography</h1>
                    </div>
                    <div className='h-[395px] w-[300px]'>
                    <div className=' h-[300px] w-[300px]  hover:overflow-hidden'>
                        <img src={img8} className = "hover:scale-105" />
                    </div>
                    <h1 className='font-bold text-xl mt-[6px]'>Music</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Categories;