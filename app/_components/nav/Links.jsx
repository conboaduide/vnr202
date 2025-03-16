'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const paths = [
  { path: '/', title: 'TRANG CHỦ' },
  { path: '/boi-canh', title: 'BỐI CẢNH' },
  { path: '/quoc-hoi-vi', title: 'QUỐC HỘI KHÓA VI' },
  { path: '/dai-hoi-iv', title: 'ĐẠI HỘI IV' },
  { path: '/dai-hoi-v', title: 'ĐẠI HỘI V' },
  { path: '/dot-pha', title: 'CÁC BƯỚC ĐỘT PHÁ' },
  { path: '/nguon', title: 'NGUỒN' },
];

const Links = () => {
  const pathname = usePathname();

  return (
    <div className='flex space-x-10'>
      {paths.map((p, index) => {
        return (
          <Link
            key={index}
            href={p.path}
            className={`font-semibold opacity-90 hover:text-slate-300 hover: cursor-pointer select-none ${
              p.path === pathname ? 'text-yellow-100 hover:text-yellow-100' : ''
            }`}
          >
            {p.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
