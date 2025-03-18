'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
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

// Image Dialog Component
const ImageDialog = ({ src, title, width = 800, height = 600 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className='relative cursor-pointer overflow-hidden rounded-lg border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300 group'
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src || '/placeholder.svg'}
          alt={title}
          width={width / 2}
          height={height / 2}
          className='object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4'>
          <p className='text-white font-medium'>{title}</p>
        </div>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
          onClick={() => setIsOpen(false)}
        >
          <div
            className='relative max-w-5xl max-h-[90vh] overflow-auto bg-black/90 p-2 rounded-lg'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-yellow-500 text-black rounded-full'
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <Image
              src={src || '/placeholder.svg'}
              alt={title}
              width={width}
              height={height}
              className='object-contain'
            />
            {title && <p className='text-center text-white mt-2'>{title}</p>}
          </div>
        </div>
      )}
    </>
  );
};

// Image Dialog Grid Component
const ImageDialogGrid = () => {
  const images = [
    { src: '/5hao-1985.png', alt: 'Tiền 5 hào 1985' },
    { src: '/1dong-1985.png', alt: 'Tiền 1 đồng 1985' },
    { src: '/2dong-1985.png', alt: 'Tiền 2 đồng 1985' },
    { src: '/5dong-1985.png', alt: 'Tiền 5 đồng 1985' },
    { src: '/10dong-1985.png', alt: 'Tiền 10 đồng 1985' },
    { src: '/20dong-1985.png', alt: 'Tiền 20 đồng 1985' },
    { src: '/30dong-1985.png', alt: 'Tiền 30 đồng 1985' },
    { src: '/50dong-1985.png', alt: 'Tiền 50 đồng 1985' },
    { src: '/50dong-1985-2.png', alt: 'Tiền 50 đồng 1985 (mẫu 2)' },
    { src: '/100dong-1985.png', alt: 'Tiền 100 đồng 1985' },
    { src: '/500dong-1985.png', alt: 'Tiền 500 đồng 1985' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
        {images.map((image, index) => (
          <div
            key={index}
            className='relative cursor-pointer overflow-hidden rounded-lg border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300 group'
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              width={150}
              height={80}
              className='object-cover transition-transform duration-500 group-hover:scale-110'
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
          onClick={() => setSelectedImage(null)}
        >
          <div
            className='relative max-w-3xl max-h-[90vh] overflow-auto bg-black/90 p-2 rounded-lg'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-yellow-500 text-black rounded-full'
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image
              src={selectedImage.src || '/placeholder.svg'}
              alt={selectedImage.alt}
              width={600}
              height={300}
              className='object-contain'
            />
            <p className='text-center text-white mt-2'>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
};

const DotPha = () => {
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
        src='/vietnam-1980s.png'
        alt='Vietnam 1980s'
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
                CÁC BƯỚC ĐỘT PHÁ TIẾP TỤC ĐỔI MỚI KINH TẾ
              </span>
              <span className='block mt-4 text-3xl md:text-4xl text-yellow-300'>
                (1982 - 1986)
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
        <Section id='hoi-nghi-trung-uong-8'>
          <div className='mt-12'></div>
          <div className='mt-12 max-w-5xl text-center'>
            <SectionHeading>
              Hội nghị Trung ương 8 khóa V (6/1985)
            </SectionHeading>
            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn mb-6'
              style={{ animationDelay: '200ms' }}
            >
              <h2 className='text-2xl font-semibold text-yellow-200 mb-3'>
                Quy luật sản xuất hàng hoá
              </h2>
              <p>Xóa bỏ cơ chế bao cấp, thực hiện cơ chế một giá.</p>
              <p>
                Chuyển sang hạch toán kinh doanh XHCN, thừa nhận quy luật sản
                xuất hàng hóa.
              </p>
            </div>

            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn mb-6'
              style={{ animationDelay: '400ms' }}
            >
              <h2 className='text-2xl font-semibold text-yellow-200 mb-3'>
                Cải cách "Giá - Lương - Tiền"
              </h2>
              <p>
                <strong className='text-yellow-200'>Giá cả:</strong> Cơ chế một
                giá, tính đúng, tính đủ chi phí.
              </p>
              <p>
                <strong className='text-yellow-200'>Tiền lương:</strong> Bỏ
                lương hiện vật, đảm bảo tái tạo sức lao động.
              </p>
              <p>
                <strong className='text-yellow-200'>Tiền tệ:</strong> Đổi mới
                lưu thông tiền, thu hút tiền nhàn rỗi, hạch toán ngân hàng theo
                cơ chế kinh doanh.
              </p>
            </div>

            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn'
              style={{ animationDelay: '600ms' }}
            >
              <h2 className='text-2xl font-semibold text-yellow-200 mb-3'>
                Hệ quả
              </h2>
              <p>
                <strong className='text-yellow-200'>
                  Tổng điều chỉnh giá - lương - tiền (9/1985):
                </strong>{' '}
                Đổi tiền, bỏ tem phiếu.
              </p>
              <p>
                <strong className='text-yellow-200'>
                  Lạm phát phi mã (1986):
                </strong>{' '}
                Quay lại chính sách hai giá.
              </p>
            </div>
          </div>
        </Section>

        {/* Economic Thinking Section */}
        <Section id='nhin-lai'>
          <SectionHeading>Nhìn lại sự đột phá về tư duy kinh tế</SectionHeading>

          <div className='max-w-4xl mx-auto space-y-8'>
            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-4'>
                Trước đổi mới (Kế hoạch hóa tập trung, bao cấp)
              </h3>
              <ul className='space-y-3'>
                <ListItem delay={300}>
                  Không công nhận sản xuất hàng hóa & cơ chế thị trường.
                </ListItem>
                <ListItem delay={400}>
                  Không chấp nhận nền kinh tế nhiều thành phần.
                </ListItem>
                <ListItem delay={500}>
                  Kinh tế khép kín, khủng hoảng cuối 1970s.
                </ListItem>
              </ul>
            </div>

            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-4'>
                Nhận thức đổi mới
              </h3>
              <p
                className='animate-slideRight'
                style={{ animationDelay: '600ms' }}
              >
                Hội nghị Bộ Chính trị (8/1986) bước đột phá thứ ba: Xác định
                kinh tế nhiều thành phần.
              </p>
            </div>
          </div>
        </Section>

        {/* Currency Section */}
        <Section id='tien-giay'>
          <SectionHeading>Tiền giấy năm 1985</SectionHeading>

          <div className='max-w-5xl mx-auto'>
            <div
              className='md:hidden animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <ImageDialogGrid />
            </div>

            <div
              className='hidden md:block animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <div className='space-y-5'>
                <div className='grid grid-cols-5 gap-4 justify-center'>
                  <div className='relative group overflow-hidden rounded-lg border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300'>
                    <Image
                      src='/5hao-1985.png'
                      alt='5 hào'
                      width={200}
                      height={100}
                      className='transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2'>
                      <p className='text-white text-sm'>5 hào (1985)</p>
                    </div>
                  </div>
                  <div className='relative group overflow-hidden rounded-lg border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300'>
                    <Image
                      src='/1dong-1985.png'
                      alt='1 đồng'
                      width={200}
                      height={100}
                      className='transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2'>
                      <p className='text-white text-sm'>1 đồng (1985)</p>
                    </div>
                  </div>
                  <div className='relative group overflow-hidden rounded-lg border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300'>
                    <Image
                      src='/2dong-1985.png'
                      alt='2 đồng'
                      width={200}
                      height={100}
                      className='transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2'>
                      <p className='text-white text-sm'>2 đồng (1985)</p>
                    </div>
                  </div>
                  <div className='relative group overflow-hidden rounded-lg border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300'>
                    <Image
                      src='/5dong-1985.png'
                      alt='5 đồng'
                      width={200}
                      height={100}
                      className='transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2'>
                      <p className='text-white text-sm'>5 đồng (1985)</p>
                    </div>
                  </div>
                  <div className='relative group overflow-hidden rounded-lg border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300'>
                    <Image
                      src='/10dong-1985.png'
                      alt='10 đồng'
                      width={200}
                      height={100}
                      className='transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2'>
                      <p className='text-white text-sm'>10 đồng (1985)</p>
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-5 gap-4 justify-center'>
                  <div className='relative group overflow-hidden rounded-lg border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300'>
                    <Image
                      src='/20dong-1985.png'
                      alt='20 đồng'
                      width={200}
                      height={100}
                      className='transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2'>
                      <p className='text-white text-sm'>20 đồng (1985)</p>
                    </div>
                  </div>
                  <div className='relative group overflow-hidden rounded-lg border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300'>
                    <Image
                      src='/30dong-1985.png'
                      alt='30 đồng'
                      width={200}
                      height={100}
                      className='transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2'>
                      <p className='text-white text-sm'>30 đồng (1985)</p>
                    </div>
                  </div>
                  <div className='relative group overflow-hidden rounded-lg border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300'>
                    <Image
                      src='/50dong-1985.png'
                      alt='50 đồng'
                      width={200}
                      height={100}
                      className='transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2'>
                      <p className='text-white text-sm'>50 đồng (1985)</p>
                    </div>
                  </div>
                  <div className='relative group overflow-hidden rounded-lg border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300'>
                    <Image
                      src='/100dong-1985.png'
                      alt='100 đồng'
                      width={200}
                      height={100}
                      className='transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2'>
                      <p className='text-white text-sm'>100 đồng (1985)</p>
                    </div>
                  </div>
                  <div className='relative group overflow-hidden rounded-lg border-2 border-yellow-500/50 hover:border-yellow-500 transition-all duration-300'>
                    <Image
                      src='/500dong-1985.png'
                      alt='500 đồng'
                      width={200}
                      height={100}
                      className='transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2'>
                      <p className='text-white text-sm'>500 đồng (1985)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Consequences Section */}
        <Section id='hau-qua'>
          <SectionHeading>
            Hậu quả của sai lầm từ Hội nghị Trung ương 8
          </SectionHeading>

          <div className='max-w-4xl mx-auto space-y-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div
                className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn'
                style={{ animationDelay: '200ms' }}
              >
                <p className='text-lg'>
                  Trong quá trình tổ chức thực hiện mắc những sai lầm như vội
                  vàng đổi tiền và tổng điều chỉnh giá, lương trong tình hình
                  chưa chuẩn bị đủ mọi mặt. Cuộc điều chỉnh giá, tiền, lương đã
                  làm cho cuộc khủng hoảng kinh tế-xã hội trầm trọng sâu sắc
                  hơn.
                </p>
              </div>

              <div
                className='flex justify-center animate-fadeIn'
                style={{ animationDelay: '400ms' }}
              >
                <ImageDialog
                  src='/lamphat-1985.png'
                  title='Tỷ lệ lạm phát giai đoạn 1985-1986'
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Political Bureau Conference Section */}
        <Section id='hoi-nghi-bo-chinh-tri'>
          <SectionHeading>Hội nghị Bộ Chính trị (8/1986)</SectionHeading>

          <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-4'>
                Định hướng phát triển kinh tế
              </h3>
              <ul className='space-y-3'>
                <ListItem delay={300}>
                  Lấy nông nghiệp làm mặt trận hàng đầu.
                </ListItem>
                <ListItem delay={400}>
                  Phát triển công nghiệp nhẹ phục vụ sản xuất hàng tiêu dùng.
                </ListItem>
                <ListItem delay={500}>
                  Công nghiệp nặng phát triển có chọn lọc.
                </ListItem>
              </ul>
            </div>

            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '300ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-4'>
                Cải tạo xã hội chủ nghĩa
              </h3>
              <ul className='space-y-3'>
                <ListItem delay={300}>
                  Tuân theo quy luật phù hợp giữa quan hệ sản xuất và lực lượng
                  sản xuất.
                </ListItem>
                <ListItem delay={400}>
                  Cải tạo theo từng bước: từ nhỏ đến trung bình, rồi tiến lên
                  quy mô lớn.
                </ListItem>
                <ListItem delay={500}>
                  Áp dụng các hình thức kinh tế phù hợp với từng vùng, từng lĩnh
                  vực.
                </ListItem>
              </ul>
            </div>
          </div>
        </Section>

        <Section id='hoi-nghi-bo-chinh-tri-2'>
          <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-2'>
                Cơ cấu kinh tế nhiều thành phần
              </h3>
              <ul>
                <ListItem delay={300}>
                  Kinh tế quốc doanh & tập thể giữ vai trò chủ đạo.
                </ListItem>
                <ListItem delay={400}>
                  Kinh tế công tư hợp doanh, tư sản nhỏ thúc đẩy sản xuất.
                </ListItem>
                <ListItem delay={500}>
                  Kinh tế tự cung tự cấp vẫn tồn tại ở vùng dân tộc thiểu số.
                </ListItem>
              </ul>
            </div>

            <div
              className='bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '500ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-2'>
                Sử dụng và định hướng các thành phần kinh tế phi quốc doanh
              </h3>
              <ul>
                <ListItem delay={300}>
                  Thừa nhận kinh tế tư bản tư nhân, tiểu sản xuất hàng hóa trong
                  thời gian dài.
                </ListItem>
                <ListItem delay={400}>
                  Tận dụng tiềm năng kinh tế, tạo thêm việc làm cho người lao
                  động.
                </ListItem>
                <ListItem delay={500}>
                  Hướng các thành phần kinh tế này phát triển theo định hướng
                  XHCN.
                </ListItem>
              </ul>
            </div>

            <div
              className='col-span-1 md:col-span-2 bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '600ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-2'>
                Đổi mới cơ chế quản lý kinh tế
              </h3>
              <ul>
                <ListItem delay={300}>
                  Lấy kế hoạch làm trung tâm, kết hợp quan hệ hàng hóa - tiền
                  tệ.
                </ListItem>
                <ListItem delay={400}>
                  Xóa bỏ quan liêu, bao cấp, vận dụng quy luật giá trị để tiến
                  tới cơ chế một giá.
                </ListItem>
              </ul>
            </div>
          </div>
        </Section>

        {/* Summary Section */}
        <Section id='tong-ket'>
          <div className='mt-18'></div>
          <SectionHeading>
            Tổng kết tư duy đổi mới kinh tế giai đoạn 1982 - 1986
          </SectionHeading>

          <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border-l-4 border-yellow-500 animate-fadeIn'
              style={{ animationDelay: '200ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-2'>
                Tư duy đổi mới kinh tế (1982 - 1986)
              </h3>
              <ul className='space-y-3'>
                <ListItem delay={300}>
                  Chuyển từ kế hoạch hóa tập trung sang chấp nhận yếu tố thị
                  trường và nền kinh tế nhiều thành phần.
                </ListItem>
                <ListItem delay={400}>
                  Cải cách còn mang tính thử nghiệm, chưa đồng bộ, nhưng tạo
                  bước đệm quan trọng cho Đổi mới 1986.
                </ListItem>
              </ul>
            </div>

            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg animate-fadeIn'
              style={{ animationDelay: '400ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-2'>
                Bài học rút ra:
              </h3>
              <ul className='space-y-3'>
                <ListItem delay={300}>
                  Đổi mới phải có lộ trình phù hợp với thực tiễn.
                </ListItem>
                <ListItem delay={500}>
                  Cần chuẩn bị kỹ lưỡng về chính sách, thể chế trước khi cải
                  cách lớn.
                </ListItem>
                <ListItem delay={700}>
                  Đổi mới kinh tế gắn với cải cách quản lý nhà nước, nâng cao
                  hiệu quả điều hành.
                </ListItem>
              </ul>
            </div>
          </div>

          <div className='max-w-3xl mx-auto mt-4'>
            <div
              className='bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-yellow-600/30 animate-fadeIn'
              style={{ animationDelay: '600ms' }}
            >
              <h3 className='text-xl font-medium text-yellow-200 mb-2'>
                Ý nghĩa:
              </h3>
              <p className='text-lg'>
                Tiền đề cho công cuộc Đổi mới từ Đại hội VI (1986).
              </p>
            </div>
          </div>

          <div className='relative flex justify-center text-center mt-4'>
            <Link
              href='/dai-hoi-v'
              className='group relative inline-block overflow-hidden rounded px-12 py-4 text-lg text-yellow-100 font-medium hover:cursor-pointer select-none z-10 bg-gradient-to-r from-yellow-900/60 to-yellow-700/60 hover:from-yellow-800/80 hover:to-yellow-600/80 transition-all duration-300'
            >
              Quay lại Đại hội V
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

export default DotPha;
