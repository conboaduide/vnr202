import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BoiCanh = () => {
  return (
    <div>
      <Image
        className='!fixed blur-sm -z-10 brightness-50 object-cover'
        src='/daithangmuaxuan.png'
        alt='daithangmuaxuan'
        fill
      />
      <div className='flex flex-col md:flex-row w-full items-center'>
        <div className='md:w-2/5 md:pl-30 md:py-10'>
          <Image
            className='opacity-90 brightness-90'
            src='/bando-1976.png'
            alt='bando-1976'
            width={500}
            height={500}
          />
        </div>
        <div className='md:w-3/5 text-center py-7'>
          <div className='text-2xl font-bold text-white'>
            Bối cảnh lịch sử Việt Nam sau 30/4/1975
          </div>
          <div className='text-left px-10 py-4 space-y-2'>
            <div>
              • Sau Đại thắng mùa Xuân vào ngày 30/4/1975, lãnh thổ toàn miền
              Nam thuộc kiểm soát của Chính phủ Cách mạng lâm thời do Đảng Lao
              động Việt Nam lãnh đạo.
            </div>
            <div>
              <div>
                • Tuy đã hòa bình, nhưng Việt Nam ta chưa thống nhất về mặt đẩt
                nước:
              </div>
              <div>&nbsp;- Miền Bắc: Việt Nam Dân chủ Cộng hòa</div>
              <div>&nbsp;- Miền Nam: Chính phủ Lâm thời Miền Nam Việt Nam</div>
            </div>
            <div>
              • Hội nghị lần thứ 24 Ban Chấp hành Trung ương Đảng khóa III
              (8-1975) chủ trương: Hoàn thành thống nhất nước nhà, đưa cả nước
              tiến nhanh, tiến mạnh, tiến vững chắc lên chủ nghĩa xã hội; miền
              Bắc phải tiếp tục đẩy mạnh sự nghiệp xây dựng chủ nghĩa xã hội và
              hoàn thiện quan hệ sản xuất xã hội chủ nghĩa; miền Nam phải đồng
              thời tiến hành cải tạo xã hội chủ nghĩa và xây dựng chủ nghĩa xã
              hội. Thống nhất đất nước vừa là nguyện vọng thiết tha của nhân dân
              cả nước, vừa là quy luật khách quan của sự phát triển cách mạng
              Việt Nam, của lịch sử dân tộc Việt Nam.
            </div>
            <div>
              • Từ ngày 15 đến ngày 21-11-1975, Hội nghị Hiệp thương chính trị
              của hai đoàn đại biểu Bắc, Nam đã họp và khẳng định: Nước Việt
              Nam, dân tộc Việt Nam là một, nước nhà cần được sớm thống nhất về
              mặt nhà nước. Tổ chức tổng tuyển cử trên toàn lãnh thổ Việt Nam
              bầu ra Quốc hội chung cho cả nước vào nửa đầu năm 1976 theo nguyên
              tắc dân chủ, phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín.
            </div>
          </div>
          <div className='relative flex justify-center text-center'>
            <Link
              href='/quoc-hoi-vi'
              className='group relative inline-block overflow-hidden rounded py-2 px-4 text-sm text-orange-100 font-medium hover:cursor-pointer select-none z-10'
            >
              Đọc tiếp...
              <span className='absolute left-0 top-0 w-0 border-t-2 border-red-100 animate-top'></span>
              <span className='absolute right-0 top-0 h-0 border-r-2 border-red-100 animate-right'></span>
              <span className='absolute bottom-0 right-0 w-0 border-b-2 border-red-100 animate-bottom'></span>
              <span className='absolute bottom-0 left-0 h-0 border-l-2 border-red-100 animate-left'></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoiCanh;
