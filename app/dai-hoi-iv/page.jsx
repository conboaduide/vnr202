import Image from 'next/image';
import React from 'react';

const DaiHoiIV = () => {
  return (
    <div>
      <Image
        className='blur-sm -z-10 brightness-50'
        src='/daihoiiv.png'
        alt='daihoiiv'
        layout='fill'
        objectFit='cover'
      />
    </div>
  );
};

export default DaiHoiIV;
