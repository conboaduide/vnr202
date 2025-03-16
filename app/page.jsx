import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Image
        className='!fixed blur-sm -z-10 brightness-50 object-cover'
        src='/dcsvn.png'
        alt='dcsvn'
        fill
      />
      <div className='flex flex-col space-y-4 text-xl md:text-5xl text-center select-none pt-72 md:pt-60'>
        <div className='md:text-3xl italic text-orange-100'>
          LỊCH SỬ ĐẢNG CỘNG SẢN VIỆT NAM
        </div>
        <div>CHƯƠNG 3: ĐẢNG LÃNH ĐẠO CẢ NƯỚC</div>
        <div>QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI</div>
        <div>VÀ TIẾN HÀNH CÔNG CUỘC ĐỔI MỚI</div>
      </div>
      <div className='relative flex justify-center text-center mt-4'>
        <Link
          href='/boi-canh'
          className='group relative inline-block overflow-hidden rounded px-12 py-3 text-sm text-orange-100 font-medium hover:cursor-pointer select-none z-10'
        >
          Tìm hiểu
          <span className='absolute left-0 top-0 w-0 border-t-2 border-red-100 animate-top'></span>
          <span className='absolute right-0 top-0 h-0 border-r-2 border-red-100 animate-right'></span>
          <span className='absolute bottom-0 right-0 w-0 border-b-2 border-red-100 animate-bottom'></span>
          <span className='absolute bottom-0 left-0 h-0 border-l-2 border-red-100 animate-left'></span>
        </Link>
      </div>
    </div>
  );
}
