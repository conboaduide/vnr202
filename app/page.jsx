import Image from 'next/image';

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
    </div>
  );
}
