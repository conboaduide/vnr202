'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

// Utility function to conditionally join class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Section component for consistent styling
const Section = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={cn(
        'min-h-screen flex flex-col justify-center items-center text-white px-6 snap-start relative',
        className
      )}
    >
      {children}
    </section>
  );
};

// Heading component for consistent styling
const SectionHeading = ({ children, className = '' }) => {
  return (
    <h2
      className={cn(
        'text-3xl md:text-4xl font-semibold mb-6 text-yellow-300 animate-fadeIn',
        className
      )}
    >
      {children}
    </h2>
  );
};

// Enhanced list item component
const ListItem = ({ children, delay = 0 }) => {
  return (
    <li
      className='flex items-start animate-slideRight'
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className='inline-block w-4 h-4 mt-1.5 mr-3 bg-yellow-400 rounded-full flex-shrink-0'></span>
      <span>{children}</span>
    </li>
  );
};

const DaiHoiIV = () => {
  const scrollRef = useRef(null);

  // Add scroll indicator animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollIndicator = document.getElementById('scroll-indicator');
      if (scrollIndicator) {
        if (window.scrollY > 100) {
          scrollIndicator.classList.add('opacity-0');
        } else {
          scrollIndicator.classList.remove('opacity-0');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={scrollRef} className='relative'>
      {/* Fixed background with overlay */}
      <Image
        className='!fixed inset-0 blur-sm -z-10 brightness-[0.3] object-cover'
        src='/daihoiiv.png'
        alt='Đại hội IV'
        fill
        priority
      />
      <div className='fixed inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 -z-10' />

      {/* Scroll container with snap points */}
      <div className='h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide'>
        {/* Title Section */}
        <Section id='header'>
          <div className='max-w-4xl mx-auto text-center animate-fadeIn'>
            <h1 className='text-5xl md:text-6xl font-semibold leading-tight mb-6'>
              <span className='bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text'>
                ĐẠI HỘI ĐẠI BIỂU TOÀN QUỐC LẦN THỨ IV
              </span>
              <span className='block mt-4 text-3xl md:text-4xl text-yellow-300'>
                (1976)
              </span>
            </h1>
          </div>

          {/* Scroll indicator */}
          <div
            id='scroll-indicator'
            className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500'
          >
            <p className='text-yellow-200 mb-2 animate-pulse'>Cuộn xuống</p>
            <ChevronDown className='animate-bounce text-yellow-300' size={24} />
          </div>
        </Section>

        {/* Historical Context Section */}
        <Section id='boi-canh'>
          <SectionHeading>Bối cảnh lịch sử</SectionHeading>

          <div className='max-w-4xl mx-auto space-y-8'>
            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <p className='text-lg'>
                Sau chiến thắng năm 1975, cả nước thống nhất, tiến lên chủ nghĩa
                xã hội.
              </p>
            </div>

            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <ul className='space-y-3'>
                <ListItem delay={300}>
                  Quốc hội thông qua quyết định về quốc hiệu, quốc kỳ, quốc ca,
                  bầu các lãnh đạo cấp cao của nhà nước.
                </ListItem>
                <ListItem delay={500}>
                  Tình hình quốc tế vẫn còn phức tạp, đặc biệt là sự đối đầu
                  giữa chủ nghĩa xã hội và chủ nghĩa tư bản.
                </ListItem>
              </ul>
            </div>
          </div>
        </Section>

        {/* Victory Evaluation Section */}
        <Section id='danh-gia-thang-loi'>
          <div className='mt-8'></div>
          <SectionHeading>
            Đánh giá thắng lợi của cuộc kháng chiến chống Mỹ
          </SectionHeading>

          <div className='max-w-4xl mx-auto space-y-4'>
            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <ul>
                <ListItem delay={300}>
                  Đánh dấu sự thất bại lớn nhất trong lịch sử nước Mỹ, khẳng
                  định sự sụp đổ của chủ nghĩa thực dân mới.
                </ListItem>
                <ListItem delay={500}>
                  Thắng lợi nhờ vào sự lãnh đạo đúng đắn của Đảng, tinh thần
                  chiến đấu của nhân dân, liên minh đoàn kết với Lào - Campuchia
                  và sự ủng hộ của các nước xã hội chủ nghĩa như Liên Xô, Trung
                  Quốc.
                </ListItem>
              </ul>
            </div>

            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-2'>
                4 bài học kinh nghiệm lớn trong chiến tranh:
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <div
                    className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-4 rounded-lg border border-yellow-600/30 animate-fadeIn mb-2'
                    style={{ animationDelay: '500ms' }}
                  >
                    <div className='flex items-center'>
                      <div className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                        1
                      </div>
                      <p>Kết hợp độc lập dân tộc với chủ nghĩa xã hội.</p>
                    </div>
                  </div>

                  <div
                    className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                    style={{ animationDelay: '600ms' }}
                  >
                    <div className='flex items-center'>
                      <div className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                        2
                      </div>
                      <p>Vận dụng chiến lược tấn công hợp lý.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-4 rounded-lg border border-yellow-600/30 animate-fadeIn mb-2'
                    style={{ animationDelay: '700ms' }}
                  >
                    <div className='flex items-center'>
                      <div className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                        3
                      </div>
                      <p>Xây dựng lực lượng cách mạng ở miền Nam.</p>
                    </div>
                  </div>

                  <div
                    className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                    style={{ animationDelay: '800ms' }}
                  >
                    <div className='flex items-center'>
                      <div className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                        4
                      </div>
                      <p>
                        Kết hợp quân sự, chính trị, ngoại giao để tạo thời cơ
                        quyết định.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Socialism Building Section */}
        <Section id='dinh-huong'>
          <div className='mt-10'></div>
          <SectionHeading>Định hướng xây dựng chủ nghĩa xã hội</SectionHeading>

          <div className='max-w-4xl mx-auto space-y-4'>
            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-4'>
                Đặc điểm đất nước sau thống nhất:
              </h3>
              <ul className='space-y-1'>
                <ListItem delay={300}>
                  Miền Bắc đã có cơ sở ban đầu của nền kinh tế xã hội chủ nghĩa.
                </ListItem>
                <ListItem delay={500}>
                  Miền Nam vừa thoát khỏi chủ nghĩa thực dân kiểu mới, nền kinh
                  tế vẫn là sản xuất nhỏ.
                </ListItem>
                <ListItem delay={700}>
                  Nước ta phải đi lên chủ nghĩa xã hội, bỏ qua giai đoạn tư bản
                  chủ nghĩa.
                </ListItem>
              </ul>
            </div>

            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-2'>
                Mục tiêu chiến lược:
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div
                  className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                  style={{ animationDelay: '500ms' }}
                >
                  <div className='h-12 flex items-center'>
                    <div className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                      1
                    </div>
                    <p>Đẩy mạnh công nghiệp hóa xã hội chủ nghĩa.</p>
                  </div>
                </div>

                <div
                  className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                  style={{ animationDelay: '600ms' }}
                >
                  <div className='h-12 flex items-center'>
                    <div className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                      2
                    </div>
                    <p>Kết hợp phát triển công nghiệp - nông nghiệp.</p>
                  </div>
                </div>

                <div
                  className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                  style={{ animationDelay: '700ms' }}
                >
                  <div className='h-12 flex items-center'>
                    <div className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                      3
                    </div>
                    <p>Phát triển khoa học - kỹ thuật, nâng cao đời sống.</p>
                  </div>
                </div>

                <div
                  className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                  style={{ animationDelay: '800ms' }}
                >
                  <div className='h-12 flex items-center'>
                    <div className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                      4
                    </div>
                    <p>
                      Xây dựng chính trị vững mạnh, đảm bảo an ninh, quốc phòng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Economic and Foreign Policy Section */}
        <Section id='chinh-sach'>
          <SectionHeading>Chính sách kinh tế - đối ngoại</SectionHeading>

          <div className='max-w-4xl mx-auto space-y-8'>
            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-2'>
                Kinh tế:
              </h3>
              <ul className='space-y-3'>
                <ListItem delay={300}>
                  Phát triển nông nghiệp, công nghiệp nặng, giao thông, khoa học
                  kỹ thuật.
                </ListItem>
                <ListItem delay={500}>
                  Cải tạo xã hội chủ nghĩa ở miền Nam, nâng cao hiệu quả quản lý
                  kinh tế.
                </ListItem>
              </ul>
            </div>

            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-2'>
                Đối ngoại:
              </h3>
              <ul className='space-y-3'>
                <ListItem delay={300}>
                  Củng cố quan hệ với Liên Xô, Trung Quốc, các nước xã hội chủ
                  nghĩa và phong trào đấu tranh trên thế giới.
                </ListItem>
                <ListItem delay={500}>
                  Bảo vệ quan hệ đặc biệt với Lào, Campuchia.
                </ListItem>
                <ListItem delay={700}>
                  Thiết lập quan hệ bình thường với các nước khác trên nguyên
                  tắc bình đẳng, tôn trọng chủ quyền.
                </ListItem>
              </ul>
            </div>
          </div>
        </Section>

        {/* Party Building Section */}
        <Section id='xay-dung-dang'>
          <SectionHeading>Công tác xây dựng Đảng</SectionHeading>

          <div className='max-w-4xl mx-auto space-y-8'>
            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <ul className='space-y-3'>
                <ListItem delay={300}>
                  Tổng kết kinh nghiệm xây dựng Đảng trong thời gian chiến tranh
                  và hòa bình.
                </ListItem>
                <ListItem delay={500}>
                  Đổi tên từ Đảng Lao động Việt Nam thành Đảng Cộng sản Việt
                  Nam.
                </ListItem>
                <ListItem delay={700}>
                  Sửa đổi Điều lệ Đảng, đặt lại chức danh Tổng Bí thư thay cho
                  Bí thư thứ nhất.
                </ListItem>
              </ul>
            </div>

            <div
              className='flex justify-center animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <div className='relative'>
                <div className='absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-lg blur opacity-25'></div>
                <div className='relative bg-black/30 backdrop-blur-sm p-6 rounded-lg border-2 border-yellow-500/50 text-center'>
                  <p className='text-xl font-medium text-yellow-200 mb-2'>
                    Đồng chí <span className='text-2xl'>Lê Duẩn</span>
                  </p>
                  <p>được bầu làm Tổng Bí thư</p>
                </div>
              </div>
            </div>
          </div>

          <div className='relative flex justify-center text-center mt-10'>
            <Link
              href='/dai-hoi-v'
              className='group relative inline-block overflow-hidden rounded px-12 py-4 text-lg text-yellow-100 font-medium hover:cursor-pointer select-none z-10 bg-gradient-to-r from-yellow-900/60 to-yellow-700/60 hover:from-yellow-800/80 hover:to-yellow-600/80 transition-all duration-300'
            >
              Xem Đại hội V
              <span className='absolute left-0 top-0 w-0 border-t-2 border-yellow-400 animate-top'></span>
              <span className='absolute right-0 top-0 h-0 border-r-2 border-yellow-400 animate-right'></span>
              <span className='absolute bottom-0 right-0 w-0 border-b-2 border-yellow-400 animate-bottom'></span>
              <span className='absolute bottom-0 left-0 h-0 border-l-2 border-yellow-400 animate-left'></span>
            </Link>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default DaiHoiIV;
