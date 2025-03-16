import Image from 'next/image';
import React from 'react';
import ImageDialog from '../_components/utils/ImageDialog';
import Link from 'next/link';

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
          <h1 className='text-5xl font-semibold text-center leading-18'>
            ĐẠI HỘI ĐẠI BIỂU TOÀN QUỐC LẦN THỨ V<br />
            (27 - 31/3/1982)
          </h1>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>1. Bối cảnh lịch sử</h2>
          <p className='text-center max-w-5xl mt-4 mb-2'>
            Bối cảnh tình hình và thế giới trong nước có một số mặt thuận lợi,
            nhưng nhiều khó khăn, thách thức mới:
          </p>
          <div className='text-left max-w-5xl'>
            <p>
              - Hoa Kỳ tiếp tục thực hiện chính sách bao vây cấm vận và “kế
              hoạch hậu chiến”.
            </p>
            <p>
              - Chủ nghĩa đế quốc và các thế lực phản động quốc tế ra sức tuyên
              truyền xuyên tạc việc quân tình nguyện Việt Nam làm nghĩa vụ quốc
              tế ở Campuchia, gây sức ép với Việt Nam, chia rẽ ba nước Đông
              Dương.
            </p>
            <p>
              - Trong nước, tình trạng khủng hoảng kinh tế-xã hội ở nước ta ngày
              càng trầm trọng.
            </p>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start md:pt-16'>
          <h2 className='text-3xl font-semibold'>
            2. Đại hội đại biểu toàn quốc lần thứ V
          </h2>
          <p className='text-center max-w-5xl mt-4 mb-3'>
            Đại hội V của Đảng và quá trình thực hiện Nghị quyết Đại hội Đại hội
            Đảng lần thứ V họp từ 27-31/3/1982.
          </p>
          <div className='md:flex'>
            <div>
              <div className='text-left md:min-w-2xl mb-3'>
                <p className='mb-2'>• Dự Đại hội có:</p>
                <p>
                  - 1.033 đại biểu thay mặt cho hơn 1,7 triệu đảng viên cả nước.
                </p>
                <p>- 47 đoàn đại biểu của các đảng và tổ chức quốc tế.</p>
              </div>
              <div className='text-left md:max-w-2xl'>
                <p className='mb-2'>
                  • Đại hội đã thông qua các văn kiện quan trọng, bầu ra:
                </p>
                <p>
                  - Ban Chấp hành Trung ương gồm 116 ủy viên chính thức, 36 ủy
                  viên dự khuyết.
                </p>
                <p>
                  - Bộ Chính trị gồm 13 ủy viên chính thức, 2 ủy viên dự khuyết.
                </p>
                <p>- Ban bí thư gồm 10 đồng chí.</p>
                <p>- Đồng chí Lê Duẩn được bầu lại làm Tổng Bí thư của Đảng.</p>
              </div>
            </div>
            <div>
              <Image
                className='border-red-500 border-2 m-auto'
                src='/leduan.png'
                alt='leduan'
                width={200}
                height={500}
              />
              <div className='text-center mt-2'>Tổng bí thư Lê Duẩn</div>
            </div>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <p className='text-center font-semibold max-w-5xl mt-4 mb-2 text-2xl'>
            Đại hội V đã bổ sung đường lối chung do Đại hội IV đề ra những quan
            điểm mới:
          </p>
          <div className='text-left max-w-4xl space-y-1'>
            <p>
              • Khẳng định nước ta đang ở chặng đường đầu tiên của thời kỳ quá
              độ lên chủ nghĩa xã hội với với những khó khăn về kinh tế, chính
              trị, văn hoá, xã hội. Đó là thời kỳ khó khăn, phức tạp, lâu dài,
              phải trải qua nhiều chặng đường.
            </p>
            <p>
              • Hiện nay nước ta đang ở chặng đường đầu tiên với nội dung kinh
              tế, chính trị, văn hoá, xã hội rất nặng nề. Chặng đường trước mắt
              bao gồm thời kỳ 5 năm 1981-1985 và kéo dài đến những năm 1990 là
              khoảng thời gian có tầm quan trọng đặc biệt.
            </p>
            <p>
              • Nhiệm vụ của chặng đường trước mắt là ổn định tiến lên cải thiện
              một bước đời sống vật chất và văn hóa của nhân dân. Tiếp tục xây
              dựng cơ sở vật chất-kỹ thuật của chủ nghĩa xã hội, chủ yếu nhằm
              thúc đẩy sản xuất nông nghiệp, hàng tiêu dùng và xuất khẩu. Đáp
              ứng nhu cầu của công cuộc phòng thủ đất nước, củng cố quốc phòng,
              giữ vững an ninh, trật tự xã hội.
            </p>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <p className='text-center font-semibold max-w-5xl mt-4 mb-2 text-2xl'>
            Đường lối cách mạng:
          </p>
          <div className='text-left max-w-4xl space-y-1'>
            <p>
              • Chính trị: cơ bản giữ nguyên như Đại hội IV, tăng cường tính
              giai cấp công nhân.
            </p>
            <p>
              • Kinh tế: kết hợp công - nông hợp lý, chương trình ba mục tiêu:
              hàng lương thực, thực phẩm; hàng tiêu dùng; hàng xuất khẩu. * Nông
              nghiệp là mặt trận hàng đầu.
            </p>
            <p>
              • Đối ngoại: quan hệ với Liên Xô là hòn đá tảng, quan hệ Việt Nam
              - Lào - Campuchia có ý nghĩa sống còn, kêu gọi ASEAN đối thoại.
            </p>
          </div>
          <div className='relative flex justify-center text-center mt-4'>
            <Link
              href='/dot-pha'
              className='group relative inline-block overflow-hidden rounded px-12 py-3 text-sm text-orange-100 font-medium hover:cursor-pointer select-none z-10'
            >
              Đọc tiếp...
              <span className='absolute left-0 top-0 w-0 border-t-2 border-red-100 animate-top'></span>
              <span className='absolute right-0 top-0 h-0 border-r-2 border-red-100 animate-right'></span>
              <span className='absolute bottom-0 right-0 w-0 border-b-2 border-red-100 animate-bottom'></span>
              <span className='absolute bottom-0 left-0 h-0 border-l-2 border-red-100 animate-left'></span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DaiHoiV;
