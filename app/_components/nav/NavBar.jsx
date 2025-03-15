import Image from 'next/image';
import React from 'react';
import Links from './Links';
import MobileMenu from './MobileMenu';

const NavBar = () => {
  return (
    <div className='px-4 md:px-8 py-6 flex items-center justify-between w-full'>
      <Image
        className='opacity-90 w-12 h-12 md:w-16 md:h-16'
        src='/bualiem.png'
        alt='daithangmuaxuan'
        width={60}
        height={60}
      />
      <div className='hidden md:flex space-x-6'>
        <Links />
      </div>
      <MobileMenu />
    </div>
  );
};

export default NavBar;
