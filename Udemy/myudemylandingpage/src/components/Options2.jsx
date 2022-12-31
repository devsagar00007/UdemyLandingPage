import React from 'react'
import { codingbootcamp,starsprite } from '../assets';
 const Options2 = () => {
    return (
        <div className=' w-[240px] h-[260px]'>
            <div className=' w-[240px] h-[130px]'>
                <img src={codingbootcamp} alt="" />
            </div>
            <div className=' w-[240px] h-[130px] '>
                <h1 className='font-bold text-[16px] '>The Complete 2023 Web Development Bootcamp</h1>
                <p className='text-sm text-gray-400'>Dr. Angela Yu</p>
                <div className=' w-full h-[30px] flex items-center space-x-1'>
                    <p className='font-bold text-orange-800'>5.0</p>
                    <img src={starsprite} alt="" className='h-[12px]'/>
                    <img src={starsprite} alt="" className='h-[12px]'/>
                    <img src={starsprite} alt="" className='h-[12px]'/>
                    <img src={starsprite} alt="" className='h-[12px]'/>
                    <img src={starsprite} alt="" className='h-[12px]'/>
                    <p className='text-sm text-gray-400'>(248,430)</p>
    
                </div>
                <div className=' w-full h-[30px] flex items-center space-x-2'>
                    <p className='font-bold '>₹389</p>
                    <p className='text-sm text-gray-600'><s>₹3,499</s></p>
    
                </div>
                <div className='bg-amber-200 h-[30px] w-[70px] text-xs font-bold flex justify-center items-center mt-2'>Bestseller</div>
            </div>
        </div>
      )
}
export default Options2;
