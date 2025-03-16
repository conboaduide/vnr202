import Image from 'next/image';
import React from 'react';

const DaiHoiIV = () => {
  return (
    <div>
      <Image
        className='!fixed blur-sm -z-10 brightness-50 object-cover'
        src='/daihoiiv.png'
        alt='daihoiiv'
        fill
      />
    </div>
  );
};

export default DaiHoiIV;
