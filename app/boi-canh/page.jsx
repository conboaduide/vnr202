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
    </div>
  );
};

export default BoiCanh;
