import Image from 'next/image';
import React from 'react';

const DaiHoiV = () => {
  return (
    <div>
      <Image
        className='!fixed blur-sm -z-10 brightness-50 object-cover'
        src='/daihoiv.png'
        alt='daihoiv'
        fill
      />
      <div className='h-screen overflow-y-scroll snap-y snap-mandatory scrollbar'>
        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h1 className='text-4xl font-bold text-center'>
            Đại hội V - Đổi Mới và Định Hướng Kinh Tế (1982 - 1986)
          </h1>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>1. Bối cảnh trước Đại hội</h2>
          <p className='text-center max-w-2xl mt-4'>
            Trước Đại hội V (1982), Việt Nam đối mặt với nhiều thách thức kinh
            tế nghiêm trọng...
          </p>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>2. Đại hội V (1982)</h2>
          <p className='text-center max-w-2xl mt-4'>
            Đại hội lần thứ V của Đảng Cộng sản Việt Nam diễn ra vào năm 1982...
          </p>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>
            3. Các bước đột phá tiếp tục đổi mới kinh tế
          </h2>
          <p className='text-center max-w-2xl mt-4'>
            Trong giai đoạn 1982-1986, Việt Nam bắt đầu thực hiện một số cải
            cách...
          </p>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>
            4. Tổng kết tư duy đổi mới kinh tế giai đoạn 1982 - 1986
          </h2>
          <p className='text-center max-w-2xl mt-4'>
            Đến năm 1986, thực tế kinh tế cho thấy Việt Nam không thể tiếp tục
            mô hình cũ...
          </p>
        </section>
      </div>
    </div>
  );
};

export default DaiHoiV;
