import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Image
        className='blur-sm -z-10 brightness-50'
        src='/daithangmuaxuan.png'
        alt='daithangmuaxuan'
        layout='fill'
        objectFit='cover'
      />
      <div className='flex flex-col space-y-4 text-xl md:text-5xl text-center select-none pt-52 md:pt-20'>
        <div className='md:text-3xl italic text-orange-100'>
          LỊCH SỬ ĐẢNG CỘNG SẢN VIỆT NAM
        </div>
        <div>CHƯƠNG 3: ĐẢNG LÃNH ĐẠO CẢ NƯỚC</div>
        <div>QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI</div>
        <div>VÀ TIẾN HÀNH CÔNG CUỘC ĐỔI MỚI</div>
      </div>
      <div className='flex justify-center text-center mt-4'>
        <Link
          href='/boi-canh'
          className='-z-10 group relative inline-block overflow-hidden rounded px-12 py-3 text-sm text-orange-100 font-medium'
        >
          Tìm hiểu
          <span className='absolute left-0 top-0 w-full border-t-2 border-red-100 animate-top'></span>
          <span className='absolute right-0 top-0 h-full border-r-2 border-red-100 animate-right'></span>
          <span className='absolute bottom-0 right-0 w-full border-b-2 border-red-100 animate-bottom'></span>
          <span className='absolute bottom-0 left-0 h-full border-l-2 border-red-100 animate-left'></span>
        </Link>
      </div>
    </div>
  );
}
