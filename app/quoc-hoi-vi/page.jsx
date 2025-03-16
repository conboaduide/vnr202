import Image from 'next/image';
import React from 'react';

const QuocHoiKhoaVI = () => {
  return (
    <div>
      <Image
        className='blur-sm -z-10 brightness-50'
        src='/quochoikhoavi.png'
        alt='quochoikhoavi'
        layout='fill'
        objectFit='cover'
      />
    </div>
  );
};

export default QuocHoiKhoaVI;
