import { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const[slide,setSlide]=useState(false)
    const handleSlide=()=>{
      setSlide(!(slide))
    }
    return ( 
     <div className='absolute w-full flex justify-between px-1 py-1 z-10 text-white'>
        <div>    
        <h1 className=' text-cyan-400'>Defi</h1>
        </div> 
        <ul className='hidden md:flex' >
            <li><a href="/">Platform</a></li>
            <li><a href="/">Developer</a></li>
            <li><a href="/">Community</a></li>
            <li><a href="/" className='bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] p-2 rounded-xl'>Use Defi</a></li>
        </ul> 
        <div  className=' md:hidden z-10' onClick={handleSlide}>
          { (slide) ?  <AiOutlineClose size={20}/>:<AiOutlineMenu size={20} />}
        </div>                       
        <ul className={`${(slide)?" w-full h-screen absolute top-0 left-0   flex flex-col items-center  bg-black text-white md:hidden " :"absolute left-[-100%]"}`} >
            <li><a href="/">Platform</a></li>
            <li><a href="/">Developer</a></li>
            <li><a href="/">Community</a></li>
            <li><a href="/" className='bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] p-2 rounded-xl'>Use Defi</a></li>
        </ul> 
      </div>
     );
}
 
export default Navbar;