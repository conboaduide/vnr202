import Image from 'next/image';
import React from 'react';

const DaiHoiV = () => {
  return (
    <div>
      <Image
        className='!fixed blur-sm -z-10 brightness-50 object-cover'
        src='/daihoiv.png'
        alt='daihoiv'
        fill
      />
    </div>
  );
};

export default DaiHoiV;
