import {useState} from 'react'
import { Udemylogo, searchicon , carticon , worldicon} from '../assets';

 const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  return (
    <div >
       <div className='bg-white w-full h-[70px] flex items-center shadow-lg'>
        <img src={Udemylogo} alt="logo" className='h-[34px] ml-6'/>
        <span className=' ml-5 text-sm cursor-pointer'>Categories</span>
        <span  className='w-[740px] h-[50px] ml-6 border-[1px] border-black rounded-3xl flex items-center'>
         <img src={searchicon} alt="search" className='h-[15px] ml-4 cursor-not-allowed' />
         <input type="text" placeholder='Search for anything' className='ml-5  w-[90%] border-none text-[13px] placeholder-zinc-600 placeholder:text-[14px] 
         focus:border-none' />
        </span>
        <ul className='flex items-center ml-5 space-x-6 text-sm'>
            <li className={`cursor-pointer hover:text-violet-500 ` } onMouseEnter = {()=>setToggle(true)} onMouseLeave = {()=>setToggle(false)}>Udemy Business</li>
            <li className='cursor-pointer hover:text-violet-500'>Teach on Udemy</li>
        </ul>
        <img src={carticon} alt="search" className='h-[20px] ml-6 cursor-pointer '/>
        <button className='border-black border-[1px] ml-6 font-bold h-[40px] w-[80px] text-sm hover:bg-gray-100'>Log in</button>
        <button className='bg-black ml-2 font-bold h-[40px] w-[80px] text-sm text-white'>Sign up</button>
        <button className='border-black border-[1px] ml-2 font-bold h-[40px] w-[40px] text-sm hover:bg-gray-100'>
        <img src={worldicon} alt="connections" className='h-[15px] ml-[12px]'/>
        </button>
       </div>
       <div className={`h-[150px] w-[280px] bg-white mt-1 ml-[800px] ${toggle? 'flex-col': 'hidden'}`}>
       <h1 className='font-bold text-center text-[18px]'>Get your team access to over<br></br> 19,000 top Udemy courses,<br></br> anytime, anywhere.</h1>
       <button className='bg-black h-[50px] w-[250px] text-white ml-[15px] mt-2'>Try Udemy Business</button>
       </div>
    </div>
  )
}
export default Navbar;

