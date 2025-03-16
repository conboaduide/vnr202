import Image from 'next/image';
import React from 'react';
import ImageDialog from '../_components/utils/ImageDialog';

const DotPha = () => {
  return (
    <div>
      <Image
        className='!fixed blur-sm -z-10 brightness-50 object-cover'
        src='/vietnam-1980s.png'
        alt='vn'
        fill
      />
      <div className='h-screen overflow-y-scroll snap-y snap-mandatory scrollbar'>
        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h1 className='text-5xl font-semibold text-center leading-18'>
            CÁC BƯỚC ĐỘT PHÁ TIẾP TỤC ĐỔI MỚI KINH TẾ
            <br />
            (1982 - 1986)
          </h1>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>
            3. Các bước đột phá tiếp tục đổi mới kinh tế sau Đại hội V
          </h2>
          <p className='text-center max-w-4xl mt-4'>
            Trung ương Đảng có nhiều Hội nghị cụ thể hoá, thực hiện Nghị quyết
            Đại hội.
          </p>
          <div className='max-w-5xl'>
            <p>
              • Hội nghị Trung ương 6 (7-1984) chủ trương tập trung giải quyết
              một số vấn đề cấp bách về phân phối lưu thông với hai loại công
              việc cần làm ngay:
            </p>
            <p>
              &nbsp;- Một là, phải đẩy mạnh thu mua nắm nguồn hàng, quản lý chặt
              chẽ thị trường tự do;
            </p>
            <p>
              &nbsp;- Hai là, thực hiện điều chỉnh giá cả, tiền lương, tài chính
              cho phù hợp với thực tế.
            </p>
            <p>
              • Hội nghị Trung ương 7 (12-1984) xác định kế hoạch năm 1985 phải
              tiếp tục coi mặt trận sản xuất nông nghiệp là mặt trận hàng đầu,
              trước hết là sản xuất lương thực, thực phẩm.
            </p>
            <p>
              • Hội nghị Trung ương 8 khoá V (6-1985) được coi là bước đột phá
              thứ hai trong quá trình tìm tòi, đổi mới kinh tế của Đảng.{' '}
              <a className='font-bold hover:cursor-pointer' href='#hoi-nghi-8'>
                Đọc tiếp...
              </a>
            </p>
          </div>
        </section>

        <section
          id='hoi-nghi-8'
          className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'
        >
          <h2 className='text-2xl font-semibold'>
            Hội nghị Trung ương 8 khóa V - bước đột phá thứ hai
          </h2>
          <p className='text-center max-w-5xl mt-4'>
            Xoá bỏ cơ chế tập trung quan liêu hành chính bao cấp, lấy giá -
            lương - tiền là khâu đột phá để chuyển sang cơ chế hạch toán, kinh
            doanh xã hội chủ nghĩa.
          </p>
          <div className='max-w-5xl'>
            <p>
              • Giá: Giá cả bảo đảm bù đắp chi phí thực tế hợp lý. Thực hiện cơ
              chế một giá, xoá bỏ chế độ bao cấp bằng hiện vật theo giá thấp,
              chuyển mọi hoạt động sản xuất, kinh doanh sang hoạch toán kinh
              doạnh xã hội chủ nghĩa.
            </p>
            <p>
              • Lương: Người sản xuất có lợi nhuận thoả đáng và Nhà nước từng
              bước có tích luỹ; xoá bỏ tình trạng Nhà nước mua thấp, bán thấp và
              bù lỗ.
            </p>
            <p>
              • Tiền: Ngày 14/9/1985 thực hiện đổi tiền, 10 đồng hiện hành đổi 1
              đồng mới.
            </p>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-2xl font-semibold pt-10 mb-4'>
            Tiền giấy năm 1985
          </h2>
          <div className='flex md:flex-col space-y-2'>
            <div className='md:flex space-x-2'>
              <Image src='/5hao-1985.png' alt='5hao' width={200} height={200} />
              <Image
                src='/1dong-1985.png'
                alt='5hao'
                width={200}
                height={200}
              />
              <Image
                src='/2dong-1985.png'
                alt='5hao'
                width={200}
                height={200}
              />
              <Image
                src='/5dong-1985.png'
                alt='5hao'
                width={200}
                height={200}
              />
              <Image
                src='/10dong-1985.png'
                alt='5hao'
                width={200}
                height={200}
              />
              <Image
                src='/20dong-1985.png'
                alt='5hao'
                width={200}
                height={200}
              />
            </div>
            <div className='md:flex space-x-2'>
              <Image
                src='/30dong-1985.png'
                alt='5hao'
                width={200}
                height={200}
              />
              <Image
                src='/50dong-1985.png'
                alt='5hao'
                width={200}
                height={200}
              />
              <Image
                src='/50dong-1985-2.png'
                alt='5hao'
                width={200}
                height={200}
              />
              <Image
                src='/100dong-1985.png'
                alt='5hao'
                width={200}
                height={200}
              />
              <Image
                src='/500dong-1985.png'
                alt='5hao'
                width={200}
                height={200}
              />
            </div>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-2xl font-semibold'>
            Hậu quả của sai lầm từ Hội nghị Trung ương 8
          </h2>
          <p className='text-center max-w-2xl mt-4 mb-4'>
            Trong quá trình tổ chức thực hiện mắc những sai lầm như vội vàng đổi
            tiền và tổng điều chỉnh giá, lương trong tình hình chưa chuẩn bị đủ
            mọi mặt. Cuộc điều chỉnh giá, tiền, lương đã làm cho cuộc khủng
            hoảng kinh tế-xã hội trầm trọng sâu sắc hơn.
          </p>
          <ImageDialog
            src='/lamphat-1985.png'
            title='Xem tỷ lệ lạm phát'
            height={600}
            width={800}
          />
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-2xl font-semibold'>
            Hội nghị Bộ Chính trị Khóa V - bước đột phá thứ ba
          </h2>
          <p className='text-center max-w-3xl mt-4 mb-2'>
            Hội nghị Bộ Chính trị khoá V (8-1986) đưa ra “Kết luận đối với một
            số vấn đề thuộc về quan điểm kinh tế”. Đây là bước đột phá thứ ba về
            đổi mới kinh tế, đồng thời cũng là bước quyết định cho sự ra đời của
            đường lối đổi mới của Đảng.
          </p>
          <div className='text-left max-w-6xl space-y-2'>
            <p>
              • Về cơ cấu sản xuất: Hội nghị cho rằng, chúng ta đã chủ quan,
              nóng vội đề ra một số chủ trương quá lớn về quy mô, quá cao về
              nhịp độ xây dựng cơ bản và phát triển sản xuất.
            </p>
            <p>
              • Về cải tạo xã hội chủ nghĩa: Không chỉ là sự thay đổi chế độ sở
              hữu, mà còn thay đổi cả chế độ quản lý, chế độ phân phối, đó là
              một quá trình gắn liền với mỗi bước phát triển của lực lượng sản
              xuất, vì vậy không thể làm một lần hay trong một thời gian ngắn là
              xong.
            </p>
            <p>
              • Về cơ chế quản lý kinh tế: Đổi mới kế hoạch hoá theo nguyên tắc
              phát huy vai trò chủ đạo của các quy luật kinh tế xã hội chủ
              nghĩa.
            </p>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>
            4. Tổng kết tư duy đổi mới kinh tế giai đoạn 1982 - 1986
          </h2>
          <p className='text-center max-w-5xl mt-4 mb-2'>
            Giai đoạn 1982 - 1986 cho thấy sự thay đổi trong tư duy kinh tế của
            Đảng từ kế hoạch hóa tập trung cứng nhắc sang chấp nhận yếu tố thị
            trường và nền kinh tế nhiều thành phần.
            <br />
            Các chính sách cải cách còn mang tính thử nghiệm, chưa đồng bộ, dẫn
            đến những khó khăn nhất định nhưng cũng là bước đệm quan trọng cho
            công cuộc Đổi mới từ Đại hội VI (1986).
          </p>
          <div className='text-left max-w-6xl space-y-1'>
            <p>Những bài học quan trọng được rút ra:</p>
            <p>
              • Cần đổi mới từng bước, có lộ trình phù hợp với điều kiện thực
              tiễn.
            </p>
            <p>
              • Phải có sự chuẩn bị kỹ lưỡng về chính sách, thể chế trước khi
              triển khai cải cách lớn.
            </p>
            <p>
              • Đổi mới kinh tế phải gắn liền với cải cách quản lý nhà nước và
              nâng cao hiệu quả điều hành.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DotPha;
