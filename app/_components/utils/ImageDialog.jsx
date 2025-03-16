'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const ImageDialog = ({ title, src, width = 800, height = 600 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className='hover:cursor-pointer underline font-bold'
        onClick={() => setIsOpen(true)}
      >
        {title}
      </div>
      {isOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50'
          onClick={() => setIsOpen(false)}
        >
          <div className='relative p-4 bg-white rounded-lg'>
            <button
              className='absolute top-2 right-3 text-lg font-bold text-gray-700 hover:text-red-500 hover:cursor-pointer'
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            <Image
              src={src}
              alt='image'
              width={width}
              height={height}
              className='max-w-full h-auto'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDialog;
