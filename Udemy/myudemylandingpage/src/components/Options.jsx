import React from 'react'
import { pythonthumbnail,starsprite } from '../assets';
 const Options = () => {
  return (
    <div className=' w-[230px] h-[100%]'>
        <div className=' w-full h-[50%]'>
            <img src={pythonthumbnail} alt="" />
        </div>
        <div className=' w-full h-[50%] '>
            <h1 className='font-bold text-[16px] '>Learn Python:The Complete Python Programming Course</h1>
            <p className='text-sm text-gray-400'>Avinesh Jain, The Codex</p>
            <div className=' w-full h-[30px] flex items-center space-x-1'>
                <p className='font-bold text-orange-800'>4.3</p>
                <img src={starsprite} alt="" className='h-[12px]'/>
                <img src={starsprite} alt="" className='h-[12px]'/>
                <img src={starsprite} alt="" className='h-[12px]'/>
                <img src={starsprite} alt="" className='h-[12px]'/>
                <img src={starsprite} alt="" className='h-[12px]'/>
                <p className='text-sm text-gray-400'>(4,274)</p>

            </div>
            <div className=' w-full h-[30px] flex items-center space-x-2'>
                <p className='font-bold '>₹389</p>
                <p className='text-sm text-gray-600'><s>₹3,399</s></p>

            </div>
            <div className='bg-amber-200 h-[30px] w-[70px] text-xs font-bold flex justify-center items-center mt-2'>Bestseller</div>
        </div>
    </div>
  )
}
export default Options;
