import React from 'react'

 const Featuredtopics = () => {
  return (
    <div className='bg-gray-50 h-[460px] flex justify-center'>
        <div className='w-[84%]  h-[full]'>
            <h1 className='font-bold text-2xl mt-[50px]'>Featured topics by category</h1>
            <div className=' h-[240px] mt-4 flex space-x-44'>
                <ul className='space-y-5'>
                    <li className='font-bold text-xl'>Devlopement</li>
                    <li><p className='font-bold underline text-indigo-600 hover:text-indigo-800 cursor-pointer'>Python</p>
                    <p className='text-gray-600'>36,354,994 students</p></li>
                    <li><p className='font-bold underline text-indigo-600 hover:text-indigo-800 cursor-pointer'>Web Development</p>
                    <p className='text-gray-600'>11,415,615 students</p></li>
                    <li><p className='font-bold underline text-indigo-600 hover:text-indigo-800 cursor-pointer'>Machine Learning</p>
                    <p className='text-gray-600'>7,070,015 students</p></li>
                    
                </ul>
                <ul className='space-y-5'>
                    <li className='font-bold text-xl'>Business</li>
                    <li><p className='font-bold underline text-indigo-600 hover:text-indigo-800 cursor-pointer'>Financial Analysis</p>
                    <p className='text-gray-600'>1,195,282 students</p></li>
                    <li><p className='font-bold underline text-indigo-600 hover:text-indigo-800 cursor-pointer'>Web SQL</p>
                    <p className='text-gray-600'>5,977,561 students</p></li>
                    <li><p className='font-bold underline text-indigo-600 hover:text-indigo-800 cursor-pointer'>PMP</p>
                    <p className='text-gray-600'>1,733,398 students</p></li>
                    
                </ul>
                <ul className='space-y-5'>
                    <li className='font-bold text-xl'>IT and Software</li>
                    <li><p className='font-bold underline text-indigo-600 hover:text-indigo-800 cursor-pointer'>AWS Certification</p>
                    <p className='text-gray-600'>6,078,244 student</p></li>
                    <li><p className='font-bold underline text-indigo-600 hover:text-indigo-800 cursor-pointer'>Ethical Hacking</p>
                    <p className='text-gray-600'>10,931,066 students</p></li>
                    <li><p className='font-bold underline text-indigo-600 hover:text-indigo-800 cursor-pointer'>Cyber Security</p>
                    <p className='text-gray-600'>3,998,037 students</p></li>
                    
                </ul>
                <ul className='space-y-5'>
                    <li className='font-bold text-xl'>Design</li>
                    <li><p className='font-bold underline text-indigo-600 hover:text-indigo-800 cursor-pointer'>Photoshop</p>
                    <p className='text-gray-600'>10,909,736 students</p></li>
                    <li><p className='font-bold underline text-indigo-600 hover:text-indigo-800 cursor-pointer'>Graphic Design</p>
                    <p className='text-gray-600'>3,381,052 students</p></li>
                    <li><p className='font-bold underline text-indigo-600 hover:text-indigo-800 cursor-pointer'>Drawing</p>
                    <p className='text-gray-600'>3,381,052 students</p></li>
                    
                </ul>
            </div>
            <button className='bg-gray-50 border-[1px] border-black hover:bg-gray-100 font-bold p-2 mt-6'>Explore more topics</button>
        </div>
    </div>
  )
}
export default Featuredtopics;50