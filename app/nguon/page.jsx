import Image from 'next/image';
import React from 'react';

const sources = [
  {
    title: 'Giáo trình Lịch sử Đảng Cộng Sản Việt Nam',
    description: 'Dành Cho Bậc Đại Học Hệ Không Chuyên Lý Luận Chính Trị.',
    link: 'https://www.fahasa.com/giao-trinh-lich-su-dang-cong-san-viet-nam-danh-cho-bac-dai-hoc-he-khong-chuyen-ly-luan-chinh-tri-393914.html',
  },
];

const Nguon = () => {
  return (
    <div className='relative min-h-screen text-white'>
      <Image
        className='!fixed blur-md -z-10 brightness-50 object-cover'
        src='/codang.png'
        alt='codang'
        fill
      />
      <div className='max-w-3xl mx-auto py-12 px-6 pt-50 md:pt-62'>
        <h1 className='text-4xl font-bold text-center mb-8'>Nguồn Tài Liệu</h1>

        <div className='space-y-6'>
          {sources.map((source, index) => (
            <div
              key={index}
              className='p-4 bg-black/65 rounded-lg shadow-md hover:shadow-lg transition'
            >
              <h2 className='text-xl font-semibold mb-2'>{source.title}</h2>
              <p className='text-gray-400'>{source.description}</p>
              <a
                href={source.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-300 inline-block mt-2'
              >
                Mua ngay →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nguon;
