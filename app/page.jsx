'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden'>
      {/* Fixed background with overlay */}
      <Image
        className='!fixed inset-0 blur-sm -z-10 brightness-[0.3] object-cover'
        src='/dcsvn.png'
        alt='Đảng Cộng sản Việt Nam'
        fill
        priority
      />
      <div className='fixed inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 -z-10' />

      {/* Main content */}
      <div
        className={`transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className='text-center px-6 max-w-4xl mx-auto'>
          <h2
            className='text-xl md:text-3xl italic text-yellow-200 mb-6 animate-fadeIn mt-8'
            style={{ animationDelay: '200ms' }}
          >
            LỊCH SỬ ĐẢNG CỘNG SẢN VIỆT NAM
          </h2>

          <h1 className='text-3xl md:text-6xl font-semibold leading-tight mb-10'>
            <div
              className='bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              CHƯƠNG 3: ĐẢNG LÃNH ĐẠO CẢ NƯỚC QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI VÀ
              TIẾN HÀNH CÔNG CUỘC ĐỔI MỚI
            </div>
          </h1>

          <div
            className='relative flex justify-center text-center mt-12 animate-fadeIn'
            style={{ animationDelay: '1000ms' }}
          >
            <Link
              href='/quoc-hoi-vi'
              className='group relative inline-block overflow-hidden rounded px-12 py-4 text-lg text-yellow-100 font-medium hover:cursor-pointer select-none z-10 bg-gradient-to-r from-yellow-900/60 to-yellow-700/60 hover:from-yellow-800/80 hover:to-yellow-600/80 transition-all duration-300'
            >
              Tìm hiểu
              <span className='absolute left-0 top-0 w-0 border-t-2 border-yellow-400 animate-top'></span>
              <span className='absolute right-0 top-0 h-0 border-r-2 border-yellow-400 animate-right'></span>
              <span className='absolute bottom-0 right-0 w-0 border-b-2 border-yellow-400 animate-bottom'></span>
              <span className='absolute bottom-0 left-0 h-0 border-l-2 border-yellow-400 animate-left'></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        <div
          className='absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-yellow-500/30 animate-fadeIn'
          style={{ animationDelay: '1200ms' }}
        ></div>
        <div
          className='absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-yellow-500/30 animate-fadeIn'
          style={{ animationDelay: '1400ms' }}
        ></div>
      </div>
    </div>
  );
}
