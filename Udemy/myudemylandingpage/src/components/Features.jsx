import React from 'react'
import { udemy2, promo1, promo2 } from '../assets';

 const Features = () => {
  return (
    <div className='h-[1000px] mt-[50px] '>
        <div className='h-[500px] w-[58%] ml-[320px] '>
            <div  className=' h-[500px] flex'>
                <div className=' w-[50%] h-[500px]'>
                   <img src={udemy2} alt="udemy2" className='h-[35px] mt-10'/>
                   <h1 className='font-bold text-3xl mt-4'>Upskill your team with<br></br> Udemy Business</h1>
                  <ul className='list-disc ml-6 text-xl space-y-4 mt-[17px]'>
                    <li >Unlimited access to 19,000+ top Udemy courses, anytime, anywhere</li>
                    <li>International course collection in 14<br></br> languages</li>
                    <li>Top certifications in tech and business</li>
                  </ul>
                  <div className='flex mt-[20px]'>
                    <button className='bg-black text-white font-bold py-[12px] px-2'>Get Udemy Business</button>
                    <button className=' border-black border-[1px] text-black font-bold py-[12px] px-2 ml-2'>Learn More</button>
                  </div>
                </div>
                <div className=' ml-[80px] w-[50%] h-[500px] mt-[30px]'>
                <img src={promo1} alt="" />
                </div>
            </div>
        </div>
        <div className='h-[500px] w-[58%] ml-[320px]  flex'>
        <div  className=' h-[500px] w-[430px] flex '>
            <img src={promo2} alt="promo2" className='h-[400px] object-contain' />
        </div>
        <div  className=' h-[500px] w-[410px] ml-[65px]'>
          <h1 className='font-bold text-3xl  mt-[100px]'>Become an instructor</h1>
          <p className='text-xl mt-[20px]'>Instructors from around the world teach<br></br> millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
          <button className='bg-black text-white px-3 py-3 font-bold mt-5'>Start teaching today</button>
        </div>
        </div>
    </div>
  )
}
export default Features;
