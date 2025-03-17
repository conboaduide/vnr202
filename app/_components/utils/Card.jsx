import Image from 'next/image';
import React from 'react';

const Card = ({ src, title }) => {
  return (
    <div className='rounded-2xl bg-black/50 w-50'>
      <Image
        className='object-cover rounded-t-2xl h-32'
        src={src}
        alt='card'
        width={200}
        height={200}
      />
      <div className='py-2 px-2 text-center'>{title}</div>
    </div>
  );
};

export default Card;
