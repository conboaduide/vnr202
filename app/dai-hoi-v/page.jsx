import Image from 'next/image';
import React from 'react';

const DaiHoiV = () => {
  return (
    <div>
      <Image
        className='blur-sm -z-10 brightness-50'
        src='/daihoiv.png'
        alt='daihoiv'
        layout='fill'
        objectFit='cover'
      />
    </div>
  );
};

export default DaiHoiV;
