import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import Logo from '../assets/images/logo.svg';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className='section flex justify-between items-center p-[2rem] lg:py-[4.5rem] lg:px-[15rem]'>
      <img
        src={Logo}
        alt='Logo'
        draggable='false'
        className='w-[12rem] lg:w-[15rem] relative z-50'
      />

      {/* Navigation */}
      <div className='relative'>
        <div
          className={`${
            openDrawer ? 'right-0 opacity-100' : 'right-[-100%] opacity-0'
          } h-screen fixed top-0 pb-[3rem] w-full bg-other-white flex flex-col justify-between ease-in-out duration-500 md:opacity-100 md:static md:flex-row md:h-full md:p-0`}
        >
          <AiOutlineClose
            onClick={() => setOpenDrawer(false)}
            className='text-[2.4rem] text-primary-red absolute top-[2rem] right-[2rem] md:hidden'
          />
          <ul className='flex flex-col justify-center items-center flex-1 md:flex-row'>
            <li className='cursor-pointer md:hover:text-primary-red ease-out duration-300 text-lg mb-[2rem] md:mb-0 md:text-md md:mr-[4rem]'>
              About
            </li>
            <li className='cursor-pointer md:hover:text-primary-red ease-out duration-300 text-lg mb-[2rem] md:mb-0 md:text-md md:mr-[4rem]'>
              Features
            </li>
            <li className='cursor-pointer md:hover:text-primary-red ease-out duration-300 text-lg mb-[2rem] md:mb-0 md:text-md md:mr-[4rem]'>
              Pricing
            </li>
            <li className='cursor-pointer md:hover:text-primary-red ease-out duration-300 text-lg mb-[2rem] md:mb-0 md:text-md md:mr-[4rem]'>
              Testimonies
            </li>
            <li className='cursor-pointer md:hover:text-primary-red ease-out duration-300 text-lg md:mb-0 md:text-md'>
              Help
            </li>
          </ul>
          <div className='flex flex-col items-center md:hidden'>
            <p className='font-medium text-md cursor-pointer text-primary-red ease-out duration-300 mb-[2.4rem]'>
              Sign In
            </p>
            <button className='btn w-[90vw] sm:w-[38rem]'>Sign Up</button>
          </div>
        </div>
      </div>
      {/* Registration */}

      <div className='hidden md:flex md:items-center'>
        <p className='font-medium text-md mr-[3rem] cursor-pointer hover:text-primary-red ease-out duration-300'>
          Sign In
        </p>
        <button className='btn-outline w-[15rem]'>Sign Up</button>
      </div>

      <div className='md:hidden' onClick={() => setOpenDrawer(true)}>
        <AiOutlineMenu className='text-primary-red text-[2.4rem]' />
      </div>
    </div>
  );
};

export default Header;
