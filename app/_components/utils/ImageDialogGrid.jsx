'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const ImageDialogGrid = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <div>
      <div
        className='hover:cursor-pointer underline font-bold'
        onClick={() => setIsOpen(true)}
      >
        Xem ảnh
      </div>
      {isOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center bg-black/70 z-50'
          onClick={() => setIsOpen(false)}
        >
          <div className='flex md:flex-col space-y-2'>
            <div className='md:flex space-x-2'>
              <Image src='/5hao-1985.png' alt='5hao' width={150} height={150} />
              <Image
                src='/1dong-1985.png'
                alt='5hao'
                width={150}
                height={150}
              />
              <Image
                src='/2dong-1985.png'
                alt='5hao'
                width={150}
                height={150}
              />
              <Image
                src='/5dong-1985.png'
                alt='5hao'
                width={150}
                height={150}
              />
              <Image
                src='/10dong-1985.png'
                alt='5hao'
                width={150}
                height={150}
              />
              <Image
                src='/20dong-1985.png'
                alt='5hao'
                width={150}
                height={150}
              />
            </div>
            <div className='md:flex space-x-2'>
              <Image
                src='/30dong-1985.png'
                alt='5hao'
                width={150}
                height={150}
              />
              <Image
                src='/50dong-1985.png'
                alt='5hao'
                width={150}
                height={150}
              />
              <Image
                src='/50dong-1985-2.png'
                alt='5hao'
                width={150}
                height={150}
              />
              <Image
                src='/100dong-1985.png'
                alt='5hao'
                width={150}
                height={150}
              />
              <Image
                src='/500dong-1985.png'
                alt='5hao'
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDialogGrid;
