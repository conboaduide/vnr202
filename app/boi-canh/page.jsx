import Image from 'next/image';
import React from 'react';

const BoiCanh = () => {
  return (
    <div>
      <Image
        className='blur-sm -z-10 brightness-50'
        src='/daithangmuaxuan.png'
        alt='daithangmuaxuan'
        layout='fill'
        objectFit='cover'
      />
      <div className='md:pl-30 md:py-10'>
        <Image
          className='opacity-90 brightness-90'
          src='/bando-1976.png'
          alt='bando-1976'
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default BoiCanh;
