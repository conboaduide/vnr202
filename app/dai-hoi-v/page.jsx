'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

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
        'text-3xl md:text-4xl font-semibold mb-2 text-yellow-300 animate-fadeIn',
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

// Card with animation
const AnimatedCard = ({ src, title, description, delay = 0 }) => {
  return (
    <div
      className='bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
      style={{ animationDelay: `${delay}ms` }}
    >
      <Image
        src={src || '/placeholder.svg'}
        alt={title}
        width={300}
        height={200}
        className='w-full h-48 object-cover rounded-md mb-3'
      />
      <h4 className='text-center font-medium text-yellow-200'>{title}</h4>
      {description && <p className='text-sm text-center mt-2'>{description}</p>}
    </div>
  );
};

const DaiHoiV = () => {
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
        src='/daihoiv.png'
        alt='daihoiv'
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
                ĐẠI HỘI ĐẠI BIỂU TOÀN QUỐC LẦN THỨ V
              </span>
              <span className='block mt-4 text-3xl md:text-4xl text-yellow-300'>
                (27 - 31/3/1982)
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
        <Section id='noi-dung-I'>
          <div className='mt-12'></div>
          <SectionHeading>I. Bối cảnh lịch sử</SectionHeading>

          <div className='max-w-4xl mx-auto space-y-4'>
            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-3'>
                Tình hình quốc tế:
              </h3>
              <ul className='space-y-3'>
                <ListItem delay={300}>
                  Liên Xô và các nước XHCN Đông Âu gặp nhiều khó khăn, từng bước
                  lâm vào khủng hoảng.
                </ListItem>
                <ListItem delay={500}>
                  Đường lối cải cách kinh tế - xã hội ở Trung Quốc (từ năm 1978)
                  bước đầu đạt được kết quả tích cực.
                </ListItem>
                <ListItem delay={700}>
                  Ở Đông Nam Á, các thế lực phản động quốc tế gia tăng can
                  thiệp, đặc biệt là các hoạt động chống phá cách mạng Việt Nam.
                </ListItem>
              </ul>
            </div>

            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-3'>
                Tình hình Việt Nam:
              </h3>
              <ul className='space-y-3'>
                <ListItem delay={300}>
                  Việt Nam trong tình thế vừa có hòa bình, vừa phải đối phó với
                  kiểu chiến tranh phá hoại nhiều mặt, đồng thời phải sẵn sàng
                  đối phó với nguy cơ chiến tranh xâm lược quy mô lớn.
                </ListItem>
                <ListItem delay={500}>
                  Mỹ tiếp tục thực hiện chính sách bao vây, cấm vận nghiêm ngặt
                  Việt Nam.
                </ListItem>
                <ListItem delay={700}>
                  Kinh tế - xã hội trong nước gặp nhiều khó khăn, đời sống nhân
                  dân thiếu thốn.
                </ListItem>
              </ul>
            </div>
          </div>
        </Section>

        {/* Congress Overview Section */}
        <Section id='noi-dung-II-1'>
          <div className='max-w-4xl mx-auto'>
            <SectionHeading className='mb-4'>
              II. Đại hội V của Đảng (1982)
            </SectionHeading>
            <h3
              className='text-2xl font-semibold text-yellow-200 mb-4 text-center animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              2.1 Thời gian, địa điểm và thành phần tham dự
            </h3>

            <div className='space-y-4'>
              <div className='grid md:grid-cols-2 gap-6'>
                {/* Point 1 */}
                <div
                  className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                  style={{ animationDelay: '300ms' }}
                >
                  <h4 className='text-lg font-medium text-yellow-200 mb-2 flex items-center'>
                    <span className='w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black font-bold'>
                      1
                    </span>
                    Thời gian và địa điểm
                  </h4>
                  <p className='text-sm'>
                    Đại hội diễn ra từ ngày 27 đến 31/3/1982 tại Hà Nội.
                  </p>
                </div>

                {/* Point 2 */}
                <div
                  className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                  style={{ animationDelay: '400ms' }}
                >
                  <h4 className='text-lg font-medium text-yellow-200 mb-2 flex items-center'>
                    <span className='w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black font-bold'>
                      2
                    </span>
                    Số lượng đại biểu
                  </h4>
                  <p className='text-sm'>
                    Tham dự: 1.033 đại biểu, đại diện cho hơn 1.72 triệu đảng
                    viên, trong 35.146 đảng bộ cơ sở.
                  </p>
                </div>
              </div>

              {/* Point 3 with bullet points */}
              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                style={{ animationDelay: '500ms' }}
              >
                <h4 className='text-lg font-medium text-yellow-200 mb-2 flex items-center'>
                  <span className='w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black font-bold'>
                    3
                  </span>
                  Thành phần đại biểu
                </h4>

                <ul className='space-y-1 text-sm pl-1'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-yellow-400 rounded-full mt-1.5 mr-2 flex-shrink-0'></span>
                    <span>
                      14 đại biểu đã từng tham gia các tổ chức tiền thân của
                      Đảng
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-yellow-400 rounded-full mt-1.5 mr-2 flex-shrink-0'></span>
                    <span>40% hoạt động trong lĩnh vực kinh tế</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-yellow-400 rounded-full mt-1.5 mr-2 flex-shrink-0'></span>
                    <span>102 đại biểu từ ngành công nghiệp</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-yellow-400 rounded-full mt-1.5 mr-2 flex-shrink-0'></span>
                    <span>118 đại biểu từ 27 tộc người thiểu số</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-yellow-400 rounded-full mt-1.5 mr-2 flex-shrink-0'></span>
                    <span>
                      79 đại biểu là anh hùng lao động, anh hùng lực lượng vũ
                      trang, chiến sĩ thi đua
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-yellow-400 rounded-full mt-1.5 mr-2 flex-shrink-0'></span>
                    <span>1/3 đại biểu có trình độ đại học trở lên</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-yellow-400 rounded-full mt-1.5 mr-2 flex-shrink-0'></span>
                    <span>47 đoàn đại biểu quốc tế tham dự</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Congress Documents Section */}
        <Section id='noi-dung-II-2'>
          <div className='max-w-4xl mx-auto text-center'>
            <h3 className='text-2xl font-semibold text-yellow-300 mb-8 animate-fadeIn'>
              Các văn kiện quan trọng được thảo luận và thông qua tại Đại hội
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* Document 1 */}
              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 flex flex-col items-center min-h-[200px] animate-fadeIn'
                style={{ animationDelay: '200ms' }}
              >
                {/* Number container with fixed height to ensure alignment */}
                <div className='h-24 flex items-center justify-center'>
                  <div className='w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center'>
                    <span className='text-black text-2xl font-bold'>1</span>
                  </div>
                </div>
                {/* Text content */}
                <div className='flex-grow flex items-start justify-center'>
                  <p className='text-xl text-center font-medium text-yellow-200'>
                    Báo cáo chính trị
                  </p>
                </div>
              </div>

              {/* Document 2 */}
              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 flex flex-col items-center min-h-[200px] animate-fadeIn'
                style={{ animationDelay: '400ms' }}
              >
                {/* Number container with fixed height to ensure alignment */}
                <div className='h-24 flex items-center justify-center'>
                  <div className='w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center'>
                    <span className='text-black text-2xl font-bold'>2</span>
                  </div>
                </div>
                {/* Text content */}
                <div className='flex-grow flex items-start justify-center'>
                  <p className='text-xl text-center font-medium text-yellow-200'>
                    Phương hướng, nhiệm vụ và mục tiêu kinh tế - xã hội trong 5
                    năm (1981 - 1985) và những năm 80
                  </p>
                </div>
              </div>

              {/* Document 3 */}
              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 flex flex-col items-center min-h-[200px] animate-fadeIn'
                style={{ animationDelay: '600ms' }}
              >
                {/* Number container with fixed height to ensure alignment */}
                <div className='h-24 flex items-center justify-center'>
                  <div className='w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center'>
                    <span className='text-black text-2xl font-bold'>3</span>
                  </div>
                </div>
                {/* Text content */}
                <div className='flex-grow flex items-start justify-center'>
                  <p className='text-xl text-center font-medium text-yellow-200'>
                    Báo cáo về xây dựng Đảng và Điều lệ Đảng (bổ sung, sửa đổi)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Achievements Before Congress Section */}
        <Section id='noi-dung-II-3'>
          <div className='max-w-4xl mx-auto mt-8'>
            <h3 className='text-2xl font-semibold text-yellow-300 mb-8 text-center animate-fadeIn'>
              Những thành tựu quan trọng trước Đại hội V
            </h3>

            <p className='text-lg mb-6 text-center'>
              3 thắng lợi trong 5 năm thực hiện Nghị quyết Đại hội IV:
            </p>

            <div className='space-y-6'>
              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-slideRight'
                style={{ animationDelay: '200ms' }}
              >
                <p className='text-lg'>
                  Thống nhất đất nước về mặt Nhà nước, thực hiện một bước quyền
                  làm chủ tập thể của nhân dân lao động.
                </p>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-slideRight'
                style={{ animationDelay: '400ms' }}
              >
                <p className='text-lg'>
                  Thắng lợi trong chiến tranh bảo vệ Tổ quốc ở hai đầu biên
                  giới, bảo vệ thành công độc lập, chủ quyền và toàn vẹn lãnh
                  thổ, giúp Campuchia thoát khỏi họa diệt chủng.
                </p>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-slideRight'
                style={{ animationDelay: '600ms' }}
              >
                <p className='text-lg'>
                  Đạt thành tựu đáng kể trong kinh tế, bước đầu khắc phục hậu
                  quả chiến tranh và thiên tai liên tiếp xảy ra.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Strategic Tasks Section */}
        <Section id='noi-dung-II-4'>
          <div className='max-w-4xl mx-auto mt-8'>
            <h3 className='text-2xl font-semibold text-yellow-300 mb-8 text-center animate-fadeIn'>
              Hai nhiệm vụ chiến lược
            </h3>

            <p className='text-lg mb-6 text-center'>
              Xuất phát từ thực tiễn, Đại hội đã nêu lên hai nhiệm vụ chiến lược
              của cách mạng nước ta trong giai đoạn mới:
            </p>

            <div className='grid md:grid-cols-2 gap-8'>
              {/* Task 1 */}
              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-8 rounded-lg border border-yellow-600/30 flex flex-col items-center animate-fadeIn hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300'
                style={{ animationDelay: '300ms' }}
              >
                {/* Number container with fixed height to ensure alignment */}
                <div className='h-24 flex items-center justify-center'>
                  <div className='w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center'>
                    <span className='text-black text-2xl font-bold'>1</span>
                  </div>
                </div>
                {/* Text content */}
                <div className='flex-grow flex items-start justify-center'>
                  <p className='text-xl text-center font-medium text-yellow-200'>
                    Xây dựng thành công chủ nghĩa xã hội
                  </p>
                </div>
              </div>

              {/* Task 2 */}
              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-8 rounded-lg border border-yellow-600/30 flex flex-col items-center animate-fadeIn hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300'
                style={{ animationDelay: '600ms' }}
              >
                {/* Number container with fixed height to ensure alignment */}
                <div className='h-24 flex items-center justify-center'>
                  <div className='w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center'>
                    <span className='text-black text-2xl font-bold'>2</span>
                  </div>
                </div>
                {/* Text content */}
                <div className='flex-grow flex items-start justify-center'>
                  <p className='text-xl text-center font-medium text-yellow-200'>
                    Sẵn sàng chiến đấu, bảo vệ vững chắc Tổ quốc Việt Nam xã hội
                    chủ nghĩa
                  </p>
                </div>
              </div>
            </div>

            <div
              className='mt-10 text-center animate-fadeIn'
              style={{ animationDelay: '900ms' }}
            >
              <p className='text-lg font-semibold text-yellow-300 border-t border-b border-yellow-500/30 py-4 inline-block'>
                Hai nhiệm vụ chiến lược đó có quan hệ mật thiết với nhau
              </p>
            </div>
          </div>
        </Section>

        {/* Economic Development Section */}
        <Section id='noi-dung-II-5'>
          <div className='max-w-4xl mx-auto'>
            <h3 className='text-2xl font-semibold text-yellow-300 mb-4 text-center animate-fadeIn'>
              Định hướng phát triển kinh tế - xã hội
            </h3>

            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg mb-4 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <p className='text-lg'>
                Giai đoạn 1981 - 1990 được xác định là thời kỳ có tầm quan trọng
                đặc biệt, nhiệm vụ trước mắt là ổn định kinh tế - xã hội.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
                style={{ animationDelay: '400ms' }}
              >
                <h4 className='text-xl font-medium text-yellow-200 mb-4 flex items-center'>
                  <span className='w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                    1
                  </span>
                  Ưu tiên phát triển nông nghiệp
                </h4>
                <p>
                  Ưu tiên phát triển nông nghiệp làm mặt trận hàng đầu, đẩy mạnh
                  sản xuất hàng tiêu dùng.
                </p>
              </div>

              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
                style={{ animationDelay: '600ms' }}
              >
                <h4 className='text-xl font-medium text-yellow-200 mb-4 flex items-center'>
                  <span className='w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                    2
                  </span>
                  Phát triển công nghiệp nặng
                </h4>
                <p>
                  Phát triển một số ngành công nghiệp nặng quan trọng: luyện
                  kim, cơ khí, hóa chất, điện lực, khai thác khoáng sản.
                </p>
              </div>
            </div>

            <div
              className='mt-8 bg-gradient-to-r from-yellow-900/40 to-transparent p-4 border-l-4 border-yellow-500 rounded animate-fadeIn'
              style={{ animationDelay: '800ms' }}
            >
              <p className='font-medium text-yellow-200'>
                Kết hợp phát triển nông nghiệp, công nghiệp hàng tiêu dùng và
                công nghiệp nặng theo cơ cấu hợp lý.
              </p>
            </div>
          </div>
        </Section>

        {/* Heavy Industry Section */}
        <Section id='noi-dung-II-5-cong-nghiep-nang'>
          <div className='max-w-5xl mx-auto'>
            <h3 className='text-2xl font-semibold text-yellow-300 mb-8 text-center animate-fadeIn'>
              Các ngành công nghiệp nặng
            </h3>

            <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
              <div
                className='bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                style={{ animationDelay: '200ms' }}
              >
                <div className='relative overflow-hidden rounded-lg group aspect-square'>
                  <Image
                    src='/luyenkim.png'
                    alt='Luyện kim'
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>
                <h4 className='mt-3 text-center font-medium text-yellow-200'>
                  Luyện kim
                </h4>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                style={{ animationDelay: '300ms' }}
              >
                <div className='relative overflow-hidden rounded-lg group aspect-square'>
                  <Image
                    src='/cokhichetao.png'
                    alt='Cơ khí chế tạo'
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>
                <h4 className='mt-3 text-center font-medium text-yellow-200'>
                  Cơ khí chế tạo
                </h4>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                style={{ animationDelay: '400ms' }}
              >
                <div className='relative overflow-hidden rounded-lg group aspect-square'>
                  <Image
                    src='/hoachat.png'
                    alt='Hóa chất'
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>
                <h4 className='mt-3 text-center font-medium text-yellow-200'>
                  Hóa chất
                </h4>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                style={{ animationDelay: '500ms' }}
              >
                <div className='relative overflow-hidden rounded-lg group aspect-square'>
                  <Image
                    src='/dienluc.png'
                    alt='Điện lực'
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>
                <h4 className='mt-3 text-center font-medium text-yellow-200'>
                  Điện lực
                </h4>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-yellow-600/30 animate-fadeIn'
                style={{ animationDelay: '600ms' }}
              >
                <div className='relative overflow-hidden rounded-lg group aspect-square'>
                  <Image
                    src='/khaithackhoangsan.png'
                    alt='Khai thác khoáng sản'
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>
                <h4 className='mt-3 text-center font-medium text-yellow-200'>
                  Khai thác khoáng sản
                </h4>
              </div>
            </div>
          </div>
        </Section>

        {/* Economic Targets Section */}
        <Section id='noi-dung-II-6'>
          <div className='max-w-4xl mx-auto'>
            <h3 className='text-2xl font-semibold text-yellow-300 mb-8 text-center animate-fadeIn'>
              Các chỉ tiêu phát triển kinh tế - xã hội (1981 - 1985)
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300'
                style={{ animationDelay: '200ms' }}
              >
                <div className='flex items-center mb-4'>
                  {/* Increased circle size from w-12 h-12 to w-18 h-18 */}
                  <div className='w-18 h-18 bg-yellow-500 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-black text-xl font-bold'>6-7%</span>
                  </div>
                  <h3 className='text-xl font-medium text-yellow-200'>
                    Sản xuất nông nghiệp
                  </h3>
                </div>
                <p className='text-gray-300'>Tăng trưởng trung bình hàng năm</p>
              </div>

              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300'
                style={{ animationDelay: '400ms' }}
              >
                <div className='flex items-center mb-4'>
                  {/* Increased circle size from w-12 h-12 to w-18 h-18 */}
                  <div className='w-18 h-18 bg-yellow-500 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-black text-xl font-bold'>4-5%</span>
                  </div>
                  <h3 className='text-xl font-medium text-yellow-200'>
                    Sản xuất công nghiệp
                  </h3>
                </div>
                <p className='text-gray-300'>Tăng trưởng trung bình hàng năm</p>
              </div>

              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300'
                style={{ animationDelay: '600ms' }}
              >
                <div className='flex items-center mb-4'>
                  {/* Increased circle size from w-12 h-12 to w-18 h-18 */}
                  <div className='w-18 h-18 bg-yellow-500 rounded-full flex items-center justify-center mr-4'>
                    {/* Slightly reduced font size for longer text */}
                    <span className='text-black text-lg font-bold'>4.5-5%</span>
                  </div>
                  <h3 className='text-xl font-medium text-yellow-200'>
                    Thu nhập quốc dân
                  </h3>
                </div>
                <p className='text-gray-300'>Tăng trưởng trung bình hàng năm</p>
              </div>

              <div
                className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300'
                style={{ animationDelay: '800ms' }}
              >
                <div className='flex items-center mb-4'>
                  {/* Increased circle size from w-12 h-12 to w-18 h-18 */}
                  <div className='w-18 h-18 bg-yellow-500 rounded-full flex items-center justify-center mr-4'>
                    <span className='text-black text-xl font-bold'>32%</span>
                  </div>
                  <h3 className='text-xl font-medium text-yellow-200'>
                    Sản lượng lương thực
                  </h3>
                </div>
                <p className='text-gray-300'>
                  Tổng mức tăng trong giai đoạn 5 năm
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Foreign Relations Section */}
        <Section id='noi-dung-II-7'>
          <div className='max-w-4xl mx-auto'>
            <h3 className='text-2xl font-semibold text-yellow-300 mb-8 text-center animate-fadeIn'>
              Đối ngoại
            </h3>

            <div className='space-y-2'>
              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-slideRight'
                style={{ animationDelay: '200ms' }}
              >
                <p className='text-lg'>
                  Đoàn kết với các lực lượng cách mạng và tiến bộ thế giới.
                </p>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-slideRight'
                style={{ animationDelay: '400ms' }}
              >
                <p className='text-lg'>
                  Ủng hộ mạnh mẽ cuộc đấu tranh của nhân dân các nước chống
                  chính sách hiếu chiến và xâm lược của chủ nghĩa đế quốc, đứng
                  đầu là đế quốc Mỹ.
                </p>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-slideRight'
                style={{ animationDelay: '600ms' }}
              >
                <p className='text-lg'>
                  Đoàn kết và hợp tác toàn diện với Liên Xô; Quan hệ đặc biệt
                  với Lào.
                </p>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-slideRight'
                style={{ animationDelay: '800ms' }}
              >
                <p className='text-lg'>
                  Thiết lập và mở rộng quan hệ bình thường về mặt Nhà nước, về
                  kinh tế, văn hoá và khoa học, kỹ thuật với tất cả các nước,
                  không phân biệt chế độ chính trị, xã hội, trên cơ sở tôn trọng
                  độc lập, chủ quyền, bình đẳng và cùng có lợi.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Party Building Section */}
        <Section id='noi-dung-II-8'>
          <div className='max-w-4xl mx-auto'>
            <h3 className='text-2xl font-semibold text-yellow-300 mb-8 text-center animate-fadeIn'>
              Xây dựng Đảng
            </h3>

            <div className='grid md:grid-cols-2 gap-8'>
              <div
                className='space-y-4 animate-slideLeft'
                style={{ animationDelay: '200ms' }}
              >
                <div className='bg-black/30 backdrop-blur-sm p-6 rounded-lg'>
                  <p className='mb-4'>
                    • Xây dựng Đảng vững mạnh về chính trị, tư tưởng và tổ chức,
                    giữ vững bản chất cách mạng, trong sạch, có sức chiến đấu
                    cao.
                  </p>
                  <p className='mb-4'>
                    • Đại hội bầu Ban Chấp hành Trung ương khóa V gồm 116 ủy
                    viên chính thức, 36 ủy viên dự khuyết.
                  </p>
                  <p className='font-medium'>
                    • Hội nghị lần thứ nhất Ban Chấp hành Trung ương khóa V bầu:
                  </p>
                  <ul className='pl-6 mt-2 space-y-2'>
                    <li className='list-disc'>
                      Bộ Chính trị: 13 ủy viên chính thức, 2 ủy viên dự khuyết.
                    </li>
                    <li className='list-disc'>Ban Bí thư: 10 đồng chí.</li>
                    <li className='list-disc'>
                      Tổng Bí thư: Đồng chí Lê Duẩn.
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className='flex justify-center items-center animate-fadeIn'
                style={{ animationDelay: '400ms' }}
              >
                <div className='relative'>
                  <div className='absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-lg blur opacity-25'></div>
                  <div className='relative'>
                    <Image
                      src='/leduan.png'
                      alt='Tổng bí thư Lê Duẩn'
                      width={220}
                      height={300}
                      className='rounded-lg object-cover border-2 border-yellow-500'
                    />
                    <div className='mt-3 text-center text-yellow-200 font-medium'>
                      Tổng bí thư Lê Duẩn
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Achievements Section */}
        <Section id='noi-dung-II-9'>
          <div className='max-w-4xl mx-auto mt-10'>
            <h3 className='text-2xl font-semibold text-yellow-300 mb-4 text-center animate-fadeIn'>
              Thành tựu nổi bật
            </h3>

            <div
              className='bg-black/30 backdrop-blur-sm p-6 rounded-lg mb-4 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <p className='text-lg text-center'>
                <strong>Kế hoạch 5 năm 1981-1985</strong> do Đại hội đề ra đã
                đạt được nhiều thành tựu nhưng chủ yếu là trong{' '}
                <strong>nông nghiệp</strong>.
              </p>
              <p className='text-lg text-center mt-4 text-yellow-200 font-medium'>
                Khoa học kỹ thuật được triển khai mạnh mẽ:
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <AnimatedCard
                src='/mobachho.png'
                title='Mỏ Bạch Hổ'
                description='Bắt đầu khai thác dầu mỏ với sự hợp tác của Liên Xô'
                delay={300}
              />

              <AnimatedCard
                src='/thuydienhoabinh.png'
                title='Thủy điện Hòa Bình'
                description='Xây dựng công trình thủy điện quan trọng'
                delay={500}
              />

              <AnimatedCard
                src='/thuydientrian.png'
                title='Thủy điện Trị An'
                description='Công trình thủy điện quan trọng tại miền Nam'
                delay={700}
              />
            </div>
          </div>
        </Section>

        {/* Limitations Section */}
        <Section id='noi-dung-II-10'>
          <div className='max-w-4xl mx-auto mt-12'>
            <h3 className='text-2xl font-semibold text-yellow-300 mb-4 text-center animate-fadeIn'>
              Một số hạn chế
            </h3>

            <div className='space-y-2'>
              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg animate-fadeIn'
                style={{ animationDelay: '200ms' }}
              >
                <h4 className='text-xl font-medium text-yellow-200 mb-3 flex items-center'>
                  <span className='w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                    1
                  </span>
                  Kinh tế mất cân đối lớn
                </h4>
                <ul className='space-y-2 pl-6'>
                  <li className='list-disc'>
                    Kinh tế quốc doanh và tập thể thua lỗ nặng, không phát huy
                    tác dụng.
                  </li>
                  <li className='list-disc'>
                    Kinh tế tư nhân và cá thể vẫn bị ngăn cấm triệt để.
                  </li>
                  <li className='list-disc'>
                    Sản xuất chậm phát triển, thu nhập quốc dân và năng suất lao
                    động thấp.
                  </li>
                  <li className='list-disc'>
                    Đời sống nhân dân khó khăn, xã hội phát sinh nhiều hiện
                    tượng tiêu cực.
                  </li>
                </ul>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg animate-fadeIn'
                style={{ animationDelay: '400ms' }}
              >
                <h4 className='text-xl font-medium text-yellow-200 mb-3 flex items-center'>
                  <span className='w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                    2
                  </span>
                  Chính sách nông nghiệp chưa đủ mạnh
                </h4>
                <p>
                  Chưa có những chính sách, giải pháp cụ thể để giải phóng lực
                  lượng sản xuất trong nông nghiệp.
                </p>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg animate-fadeIn'
                style={{ animationDelay: '600ms' }}
              >
                <h4 className='text-xl font-medium text-yellow-200 mb-3 flex items-center'>
                  <span className='w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-black font-bold'>
                    3
                  </span>
                  Chính sách đối ngoại chưa hiệu quả
                </h4>
                <p>
                  Chưa đưa ra được giải pháp hữu hiệu để giúp đất nước thoát
                  khỏi thế bị bao vây, cô lập.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Significance Section */}
        <Section id='noi-dung-II-11'>
          <div className='max-w-4xl mx-auto mt-8'>
            <h3 className='text-2xl font-semibold text-yellow-300 mb-4 text-center animate-fadeIn'>
              Ý nghĩa của Đại hội V
            </h3>

            <div className='space-y-6'>
              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-slideRight'
                style={{ animationDelay: '200ms' }}
              >
                <p className='text-lg'>
                  Phản ánh <strong>tư duy đổi mới từng bước</strong> của Đảng
                  trong việc tìm tòi, tổng kết thực tiễn, đề ra hướng đi phù hợp
                  với điều kiện thực tế.
                </p>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-slideRight'
                style={{ animationDelay: '400ms' }}
              >
                <p className='text-lg'>
                  Xây dựng cơ cấu kinh tế và cơ chế quản lý phù hợp với giai
                  đoạn đầu của thời kỳ quá độ lên chủ nghĩa xã hội.
                </p>
              </div>

              <div
                className='bg-black/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-slideRight'
                style={{ animationDelay: '600ms' }}
              >
                <p className='text-lg'>
                  Nội dung của chặng đường đầu tiên là chuẩn bị những tiền đề
                  cần thiết về kinh tế, kỹ thuật để đẩy mạnh công nghiệp hóa xã
                  hội chủ nghĩa, khắc phục khủng hoảng kinh tế - xã hội, chăm lo
                  đời sống của nhân dân.
                </p>
              </div>
            </div>

            <div className='relative flex justify-center text-center mt-5'>
              <Link
                href='/dot-pha'
                className='group relative inline-block overflow-hidden rounded px-12 py-4 text-lg text-yellow-100 font-medium hover:cursor-pointer select-none z-10 bg-gradient-to-r from-yellow-900/60 to-yellow-700/60 hover:from-yellow-800/80 hover:to-yellow-600/80 transition-all duration-300'
              >
                Đọc tiếp...
                <span className='absolute left-0 top-0 w-0 border-t-2 border-yellow-400 animate-top'></span>
                <span className='absolute right-0 top-0 h-0 border-r-2 border-yellow-400 animate-right'></span>
                <span className='absolute bottom-0 right-0 w-0 border-b-2 border-yellow-400 animate-bottom'></span>
                <span className='absolute bottom-0 left-0 h-0 border-l-2 border-yellow-400 animate-left'></span>
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default DaiHoiV;
