import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Links from './Links';

const NavBar = () => {
  return (
    <div className='px-8 py-10 flex space-x-10 items-center'>
      <Image
        className='opacity-90'
        src='/bualiem.png'
        alt='daithangmuaxuan'
        width={60}
        height={60}
      />
      <Links />
    </div>
  );
};

export default NavBar;
