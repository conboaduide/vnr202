import Image from 'next/image';

const DaiHoiIV = () => {
  return (
    <div>
      <Image
        className='!fixed blur-sm -z-10 brightness-50 object-cover'
        src='/daihoiiv.png'
        alt='daihoiiv'
        fill
      />
      <div className='h-screen overflow-y-scroll snap-y snap-mandatory scrollbar'>
        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h1 className='text-5xl font-semibold text-center leading-18'>
            ĐẠI HỘI ĐẠI BIỂU TOÀN QUỐC LẦN THỨ IV
            <br />
            (14 - 20/12/1976)
          </h1>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>1. Bối cảnh lịch sử</h2>
          <p className='text-center max-w-5xl mt-4 mb-2'>
            Đại hội IV diễn ra sau khi đất nước thống nhất, bước vào thời kỳ xây
            dựng chủ nghĩa xã hội.
          </p>
          <div className='text-left max-w-5xl'>
            <p>
              - Cả nước bắt đầu công cuộc hàn gắn vết thương chiến tranh, khôi
              phục và phát triển kinh tế.
            </p>
            <p>
              - Tình hình thế giới diễn biến phức tạp, với nhiều thách thức đối
              với Việt Nam.
            </p>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>
            2. Đại hội đại biểu toàn quốc lần thứ IV
          </h2>
          <p className='text-center max-w-5xl mt-4 mb-3'>
            Đại hội họp từ ngày 14 - 20/12/1976, với sự tham gia của 1.008 đại
            biểu.
          </p>
          <div className='text-left max-w-5xl'>
            <p>• Đại hội đã bầu ra:</p>
            <p>
              - Ban Chấp hành Trung ương gồm 101 ủy viên chính thức, 32 ủy viên
              dự khuyết.
            </p>
            <p>
              - Bộ Chính trị gồm 14 ủy viên chính thức, 3 ủy viên dự khuyết.
            </p>
            <p>- Đồng chí Lê Duẩn được bầu làm Tổng Bí thư của Đảng.</p>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>3. Nội dung chính</h2>
          <div className='max-w-4xl space-y-4 text-center'>
            <div>
              <h3 className='text-2xl font-semibold'>
                Đường lối xây dựng chủ nghĩa xã hội
              </h3>
              <p>
                Đại hội xác định con đường đi lên chủ nghĩa xã hội trên phạm vi
                cả nước.
              </p>
              {/* <Image
                src='/images?q=tbn:ANd9GcT40mR6J-FMCQ3m-3b6eztu1aLHejTqfQwhKQ&s'
                alt='Xây dựng CNXH'
                width={600}
                height={400}
              /> */}
            </div>
            <div>
              <h3 className='text-2xl font-semibold'>
                Kế hoạch phát triển kinh tế - xã hội
              </h3>
              <p>
                Đại hội đề ra kế hoạch phát triển kinh tế - xã hội giai đoạn
                1976-1980.
              </p>
              {/* <Image
                src='https://example.com/kehoach_kinhte.png'
                alt='Kế hoạch kinh tế'
                width={600}
                height={400}
              /> */}
            </div>
            <div>
              <h3 className='text-2xl font-semibold'>
                Xây dựng và củng cố hệ thống chính trị
              </h3>
              <p>
                Nhấn mạnh vai trò của việc xây dựng hệ thống chính trị vững
                mạnh.
              </p>
              {/* <Image
                src='https://example.com/cungho_hethongchinhtri.png'
                alt='Củng cố hệ thống chính trị'
                width={600}
                height={400}
              /> */}
            </div>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <h2 className='text-3xl font-semibold'>4. Thành tựu và hạn chế</h2>
          <div className='text-left max-w-4xl space-y-1'>
            <p>
              <strong>Thành tựu:</strong>
            </p>
            <p>- Hoàn thành thống nhất đất nước về mặt nhà nước.</p>
            <p>- Bước đầu xây dựng cơ sở vật chất cho chủ nghĩa xã hội.</p>
            <p>
              <strong>Hạn chế:</strong>
            </p>
            <p>
              - Kinh tế gặp nhiều khó khăn, chưa đạt được các mục tiêu đề ra.
            </p>
            <p>- Cơ chế quản lý kinh tế còn nhiều bất cập, cần cải thiện.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DaiHoiIV;
