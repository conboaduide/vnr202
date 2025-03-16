'use client';
import { useState } from 'react';
import { paths } from './Links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className='md:hidden'>
      <button
        className='text-white text-3xl focus:outline-none'
        onClick={() => setIsOpen(true)}
      >
        &#9776;
      </button>

      {isOpen && (
        <div
          className='fixed inset-0 transition-opacity duration-300'
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-red-900/80 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        <button
          className='absolute top-8 right-4 text-3xl text-white'
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        <div className='flex flex-col items-start mt-16 space-y-6 px-6 text-lg'>
          {paths.map((p, index) => {
            return (
              <Link
                key={index}
                href={p.path}
                onClick={() => setIsOpen(false)}
                className={`font-semibold opacity-90 hover:text-slate-300 hover: cursor-pointer select-none ${
                  p.path === pathname
                    ? 'text-yellow-200 hover:text-yellow-200'
                    : ''
                }`}
              >
                {p.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
