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

const QuocHoiKhoaVI = () => {
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
        src='/quochoikhoavi.png'
        alt='Quốc hội khóa VI'
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
                QUỐC HỘI KHÓA VI
              </span>
              <span className='block mt-4 text-3xl md:text-4xl text-yellow-300'>
                (1976 - 1981)
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
          <div className='mt-12'></div>
          <SectionHeading>Bối cảnh lịch sử (1975 - 1976)</SectionHeading>

          <div className='max-w-4xl mx-auto space-y-4'>
            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <p className='text-lg'>
                <strong className='text-yellow-200'>Ngày 30/4/1975</strong>,
                cuộc kháng chiến chống Mỹ cứu nước kết thúc thắng lợi, miền Nam
                được hoàn toàn giải phóng, đất nước thống nhất về mặt lãnh thổ.
              </p>
            </div>

            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200'>
                Tuy nhiên, sau chiến tranh, Việt Nam đối mặt với nhiều khó khăn:
              </h3>
              <ul>
                <ListItem delay={300}>
                  Hậu quả nặng nề do chiến tranh tàn phá: cơ sở hạ tầng, kinh tế
                  kiệt quệ, đời sống nhân dân khó khăn.
                </ListItem>
                <ListItem delay={500}>
                  Sự chia cắt kéo dài giữa hai miền dẫn đến hệ thống chính trị -
                  kinh tế - xã hội chưa đồng nhất.
                </ListItem>
                <ListItem delay={700}>
                  Tình hình quốc tế phức tạp: Việt Nam bị cấm vận, quan hệ với
                  các nước phương Tây không thuận lợi.
                </ListItem>
              </ul>
            </div>

            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn'
              style={{ animationDelay: '600ms' }}
            >
              <p className='text-lg font-medium text-yellow-200'>
                ⟹ Yêu cầu cấp bách đặt ra là phải nhanh chóng thống nhất về mặt
                nhà nước, chính trị, kinh tế và xã hội để đưa cả nước đi lên chủ
                nghĩa xã hội.
              </p>
            </div>
          </div>
        </Section>

        {/* General Election Section */}
        <Section id='tong-tuyen-cu'>
          <SectionHeading>
            Cuộc Tổng tuyển cử bầu Quốc hội chung cả nước (25/4/1976)
          </SectionHeading>

          <div className='max-w-4xl mx-auto space-y-8'>
            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-4'>
                Mục tiêu
              </h3>
              <p
                className='animate-slideRight'
                style={{ animationDelay: '300ms' }}
              >
                Thành lập Quốc hội chung, thống nhất hệ thống chính trị trên cả
                nước. Định hướng phát triển đất nước theo con đường xã hội chủ
                nghĩa.
              </p>
            </div>

            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-4'>
                Tổ chức và kết quả
              </h3>
              <p
                className='animate-slideRight'
                style={{ animationDelay: '500ms' }}
              >
                Ngày 25/4/1976, nhân dân cả nước tham gia Tổng tuyển cử bầu Quốc
                hội khóa VI. Hơn 23 triệu cử tri đi bầu, đạt tỷ lệ rất cao. Bầu
                ra 492 đại biểu, đại diện cho nhân dân trên toàn quốc.
              </p>
            </div>
          </div>
        </Section>

        {/* First Session Section */}
        <Section id='ky-hop-thu-nhat'>
          <SectionHeading>
            Kỳ họp thứ nhất (24/6 - 3/7/1976, Hà Nội)
          </SectionHeading>

          <div className='max-w-4xl mx-auto space-y-8'>
            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-4'>
                Những quyết định quan trọng:
              </h3>
              <ul className='space-y-3'>
                <ListItem delay={300}>
                  Đổi tên nước từ Việt Nam Dân chủ Cộng hòa thành Cộng hòa Xã
                  hội Chủ nghĩa Việt Nam.
                </ListItem>
                <ListItem delay={500}>
                  Đặt tên chính thức Sài Gòn - Gia Định là Thành phố Hồ Chí
                  Minh.
                </ListItem>
              </ul>
            </div>

            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-4'>
                Bầu các chức danh quan trọng của Nhà nước:
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div
                  className='animate-slideRight'
                  style={{ animationDelay: '300ms' }}
                >
                  <p className='mb-2'>
                    <strong className='text-yellow-200'>Chủ tịch nước:</strong>{' '}
                    Tôn Đức Thắng
                  </p>
                  <p className='mb-2'>
                    <strong className='text-yellow-200'>
                      Phó Chủ tịch nước:
                    </strong>{' '}
                    Nguyễn Lương Bằng, Nguyễn Hữu Thọ
                  </p>
                  <p className='mb-2'>
                    <strong className='text-yellow-200'>
                      Chủ tịch Quốc hội:
                    </strong>{' '}
                    Trường Chinh
                  </p>
                </div>
                <div
                  className='animate-slideLeft'
                  style={{ animationDelay: '500ms' }}
                >
                  <p className='mb-2'>
                    <strong className='text-yellow-200'>
                      Thủ tướng Chính phủ:
                    </strong>{' '}
                    Phạm Văn Đồng
                  </p>
                  <p className='mb-2'>
                    <strong className='text-yellow-200'>
                      Chánh án Tòa án nhân dân tối cao:
                    </strong>{' '}
                    Phạm Văn Bạch
                  </p>
                  <p className='mb-2'>
                    <strong className='text-yellow-200'>
                      Viện trưởng Viện kiểm sát nhân dân tối cao:
                    </strong>{' '}
                    Trần Hữu Dực
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Legislative Achievements Section */}
        <Section id='thanh-tuu-lap-phap'>
          <SectionHeading>Thành tựu lập pháp</SectionHeading>

          <div className='max-w-4xl mx-auto'>
            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn mb-8'
              style={{ animationDelay: '200ms' }}
            >
              <p className='text-lg'>
                Quốc hội khóa VI đã ban hành 1 Hiến pháp, 1 luật, 4 pháp lệnh,
                trong đó quan trọng nhất là:
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300'
                style={{ animationDelay: '300ms' }}
              >
                <div className='h-16 flex items-center'>
                  <div className='w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-black text-xl font-bold'>1</span>
                  </div>
                  <h3 className='text-xl font-medium text-yellow-200'>
                    Hiến pháp năm 1980
                  </h3>
                </div>
                <p className='mt-4 text-gray-300'>
                  Ban hành ngày 19/12/1980, định hình hệ thống chính trị và kinh
                  tế của nhà nước Xã hội Chủ nghĩa.
                </p>
              </div>

              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300'
                style={{ animationDelay: '500ms' }}
              >
                <div className='h-16 flex items-center'>
                  <div className='w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-black text-xl font-bold'>2</span>
                  </div>
                  <h3 className='text-xl font-medium text-yellow-200'>
                    Luật Bầu cử đại biểu Quốc hội
                  </h3>
                </div>
                <p className='mt-4 text-gray-300'>Ban hành ngày 20/12/1980.</p>
              </div>

              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300'
                style={{ animationDelay: '700ms' }}
              >
                <div className='h-16 flex items-center'>
                  <div className='w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-black text-xl font-bold'>3</span>
                  </div>
                  <h3 className='text-xl font-medium text-yellow-200'>
                    Pháp lệnh bảo vệ, chăm sóc và giáo dục trẻ em
                  </h3>
                </div>
                <p className='mt-4 text-gray-300'>Ban hành ngày 21/11/1979.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* International Treaties Section */}
        <Section id='hiep-uoc-quoc-te'>
          <SectionHeading>Các hiệp ước quốc tế quan trọng</SectionHeading>

          <div className='max-w-5xl mx-auto'>
            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn mb-8'
              style={{ animationDelay: '200ms' }}
            >
              <p className='text-lg'>
                Quốc hội phê chuẩn nhiều hiệp ước quan trọng với Liên Xô, Lào,
                Campuchia, Đông Đức, Tiệp Khắc, Ba Lan, Mông Cổ, bao gồm:
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300'
                style={{ animationDelay: '300ms' }}
              >
                <div className='h-16 flex items-center'>
                  <div className='w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-black text-xl font-bold'>1</span>
                  </div>
                  <h3 className='text-xl font-medium text-yellow-200'>
                    Hiệp ước hữu nghị Việt Nam - Liên Xô
                  </h3>
                </div>
                <p className='mt-4 text-gray-300'>Ngày 29/11/1978</p>
              </div>

              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300'
                style={{ animationDelay: '500ms' }}
              >
                <div className='h-16 flex items-center'>
                  <div className='w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-black text-xl font-bold'>2</span>
                  </div>
                  <h3 className='text-xl font-medium text-yellow-200'>
                    Hiệp ước hòa bình, hữu nghị Việt Nam - Campuchia
                  </h3>
                </div>
                <p className='mt-4 text-gray-300'>Ngày 23/2/1979</p>
              </div>

              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300'
                style={{ animationDelay: '700ms' }}
              >
                <div className='h-16 flex items-center'>
                  <div className='w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-black text-xl font-bold'>3</span>
                  </div>
                  <h3 className='text-xl font-medium text-yellow-200'>
                    Hiệp ước hoạch định biên giới Việt Nam - Lào
                  </h3>
                </div>
                <p className='mt-4 text-gray-300'>Ngày 15/9/1977</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Composition Section */}
        <Section id='thanh-phan'>
          <div className='mt-18'></div>
          <SectionHeading>Thành phần Quốc hội</SectionHeading>

          <div className='max-w-4xl mx-auto'>
            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn mb-4'
              style={{ animationDelay: '200ms' }}
            >
              <p className='text-lg text-center'>
                Tổng số đại biểu:{' '}
                <strong className='text-yellow-200 text-xl'>492</strong>
              </p>
            </div>

            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-6 text-center'>
                Thành phần đa dạng
              </h3>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                <div
                  className='flex flex-col items-center animate-fadeIn'
                  style={{ animationDelay: '500ms' }}
                >
                  <div className='w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-3'>
                    <span className='text-black text-xl font-bold'>80</span>
                  </div>
                  <p className='text-center font-medium'>Công nhân</p>
                </div>

                <div
                  className='flex flex-col items-center animate-fadeIn'
                  style={{ animationDelay: '600ms' }}
                >
                  <div className='w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-3'>
                    <span className='text-black text-xl font-bold'>100</span>
                  </div>
                  <p className='text-center font-medium'>Nông dân</p>
                </div>

                <div
                  className='flex flex-col items-center animate-fadeIn'
                  style={{ animationDelay: '700ms' }}
                >
                  <div className='w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-3'>
                    <span className='text-black text-xl font-bold'>54</span>
                  </div>
                  <p className='text-center font-medium'>Quân đội</p>
                </div>

                <div
                  className='flex flex-col items-center animate-fadeIn'
                  style={{ animationDelay: '800ms' }}
                >
                  <div className='w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-3'>
                    <span className='text-black text-xl font-bold'>141</span>
                  </div>
                  <p className='text-center font-medium'>Cán bộ chính trị</p>
                </div>

                <div
                  className='flex flex-col items-center animate-fadeIn'
                  style={{ animationDelay: '900ms' }}
                >
                  <div className='w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-3'>
                    <span className='text-black text-xl font-bold'>98</span>
                  </div>
                  <p className='text-center font-medium'>Trí thức, nhân sĩ</p>
                </div>

                <div
                  className='flex flex-col items-center animate-fadeIn'
                  style={{ animationDelay: '1000ms' }}
                >
                  <div className='w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-3'>
                    <span className='text-black text-xl font-bold'>132</span>
                  </div>
                  <p className='text-center font-medium'>Phụ nữ</p>
                </div>

                <div
                  className='flex flex-col items-center animate-fadeIn'
                  style={{ animationDelay: '1100ms' }}
                >
                  <div className='w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-3'>
                    <span className='text-black text-xl font-bold'>67</span>
                  </div>
                  <p className='text-center font-medium'>Dân tộc thiểu số</p>
                </div>
              </div>
            </div>
          </div>

          <div className='relative flex justify-center text-center mt-4'>
            <Link
              href='/dai-hoi-iv'
              className='group relative inline-block overflow-hidden rounded px-12 py-4 text-lg text-yellow-100 font-medium hover:cursor-pointer select-none z-10 bg-gradient-to-r from-yellow-900/60 to-yellow-700/60 hover:from-yellow-800/80 hover:to-yellow-600/80 transition-all duration-300'
            >
              Tiến tới Đại hội IV
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

export default QuocHoiKhoaVI;
