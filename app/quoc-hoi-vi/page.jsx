import Image from 'next/image';

const QuocHoiKhoaVI = () => {
  return (
    <div>
      <Image
        className='!fixed blur-sm -z-10 brightness-50 object-cover'
        src='/quochoikhoavi.png'
        alt='quochoikhoavi'
        fill
      />

      <div className='h-screen overflow-y-scroll snap-y snap-mandatory scrollbar'>
        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h1 className='text-5xl font-semibold text-center leading-18'>
            QUỐC HỘI KHÓA VI (1976 - 1981)
          </h1>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>1. Bối cảnh lịch sử</h2>
          <p className='text-center max-w-5xl mt-4 mb-2'>
            Quốc hội khóa VI được tổ chức sau khi đất nước thống nhất, nhiệm vụ
            trọng tâm là thống nhất hai miền về mặt nhà nước và đề ra phương
            hướng phát triển kinh tế - xã hội.
          </p>
          <div className='text-left max-w-5xl'>
            <p>
              • Ngày 25/4/1976, cuộc Tổng tuyển cử bầu Quốc hội chung cho cả
              nước diễn ra.
            </p>
            <p>• Quốc hội khóa VI có 492 đại biểu đại diện cho cả nước.</p>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>2. Nội dung chính</h2>
          <div className='max-w-4xl space-y-4 text-center'>
            <div>
              <h3 className='text-2xl font-semibold'>
                Thống nhất đất nước về mặt nhà nước
              </h3>
              <p>
                Quốc hội đã quyết định đổi tên nước thành **Cộng hòa Xã hội Chủ
                nghĩa Việt Nam**.
              </p>
            </div>
            <div>
              <h3 className='text-2xl font-semibold'>
                Thông qua Hiến pháp 1980
              </h3>
              <p>
                Hiến pháp 1980 là văn bản luật cơ bản đầu tiên của nước Việt Nam
                thống nhất.
              </p>
            </div>
            <div>
              <h3 className='text-2xl font-semibold'>
                Kế hoạch phát triển kinh tế - xã hội
              </h3>
              <p>
                Quốc hội đề ra phương hướng phát triển 5 năm (1976-1980), tập
                trung vào công nghiệp hóa và cải tạo xã hội chủ nghĩa.
              </p>
            </div>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>3. Kết quả và hạn chế</h2>
          <div className='text-left max-w-4xl space-y-1'>
            <p>
              <strong>Thành tựu:</strong>
            </p>
            <p>- Hoàn thành thống nhất về mặt nhà nước.</p>
            <p>
              - Ban hành Hiến pháp 1980, xác định mô hình phát triển đất nước.
            </p>
            <p>- Đưa ra các chính sách phát triển kinh tế, văn hóa, xã hội.</p>

            <p>
              <strong>Hạn chế:</strong>
            </p>
            <p>
              - Kinh tế gặp nhiều khó khăn do thiên tai, chiến tranh biên giới.
            </p>
            <p>
              - Chưa đạt được hiệu quả cao trong quản lý và phân phối kinh tế.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuocHoiKhoaVI;
