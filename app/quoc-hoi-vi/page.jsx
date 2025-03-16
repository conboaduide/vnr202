import Image from 'next/image';
import React from 'react';

const QuocHoiKhoaVI = () => {
  return (
    <div>
      <Image
        className='!fixed blur-sm -z-10 brightness-50 object-cover'
        src='/quochoikhoavi.png'
        alt='quochoikhoavi'
        fill
      />
    </div>
  );
};

export default QuocHoiKhoaVI;
