import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AccessNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
   <nav className="flex  lg:bg-transparent md:bg-white-50 item-center m-auto lg:justify-around md:justify-between sm:justify-between justify-between md:p-5 gap-10 py-3" style={{maxWidth:'90%'}}>
    {/* menu for large screen */}
    <div className='flex items-center justify-center lg:gap-10 md:gap-10'>
        <h2 className='font-bold text-3xl'><span className='text-orange-500'>Upto</span><span className='text-blue-600'>skill</span></h2>
        <ul className='gap-2 lg:gap-5 hidden text-lg md:hidden sm:hidden lg:flex'>
            <li><a href="">Product</a></li>
            <li><a href="">Solutions</a></li>
            <li><a href="">Rsources</a></li>
            <li><a href="">Pricing</a></li>
        </ul>
    </div>

    {/* for other screens */}
    <div className={`lg:hidden border-b bg-white  ${ mobileMenuOpen ?  'md:block sm:block block' : 'md:hidden sm:hidden hidden' } bg-white-50 absolute left-0 top-16 w-full`}>
      <ul className='p-5'>
        <li className='py-3 font-bold'>
          <a href="">Products</a>  
        </li>
        <li className='py-3 font-bold'><a href="">Solution</a></li>
        <li className='py-3 font-bold'><a href="">Resources</a></li>
        <li className='py-3 font-bold'><a href="">Pricing</a></li>
        <li className='py-3 font-bold'><a href="">For Candidaes</a></li>
        <li className='py-3 font-bold'><a href="">contact Us</a></li>
      </ul>
    </div>
    <div className='hidden md:hidden sm:hidden lg:block gap-5'>
      <button className='py-1 px-5 border-r border-black mr-2'>For Developers </button>
      <button className='py-2 px-5 bg-gray-300 rounded capitalize text-black mr-2 font-bold text-sm'>Request Demo</button>
      <button className='py-2 px-5 bg-green-800 rounded capitalize text-white  font-bold text-sm'>sing Up</button>
    </div>
    
    <FontAwesomeIcon icon={!mobileMenuOpen? faBars : faTimes} className='lg:hidden md:block mt-2 text-lg' onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}/>
   </nav>
  );
};

export default AccessNavbar;
