import Image from 'next/image';
import React from 'react';
import ImageDialog from '../_components/utils/ImageDialog';
import Link from 'next/link';
import Card from '../_components/utils/Card';

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
            <div className='hidden md:block'>
              <Image
                className='border-red-500 border-2 m-auto'
                src='/leduan.png'
                alt='leduan'
                width={200}
                height={500}
              />
              <div className='text-center mt-2'>Tổng bí thư Lê Duẩn</div>
            </div>
            <div className='md:hidden text-center'>
              <ImageDialog
                src='/leduan.png'
                title='Tổng bí thư Lê Duẩn'
                height={500}
                width={200}
              />
            </div>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <p className='text-center font-semibold max-w-5xl mt-4 mb-2 text-2xl'>
            Nội dung của Đại hội V:
          </p>
          <div className='text-center max-w-4xl space-y-1'>
            <p>
              Đại hội thảo luận và thông qua các văn kiện: Báo cáo chính trị;
              Phương hướng, nhiệm vụ và những mục tiêu chủ yếu về kinh tế và xã
              hội trong 5 năm (1981- 1985) và những năm 80; Báo cáo xây dựng
              Đảng và Điều lệ Đảng(bổ sung và sửa đổi). Nội dung cơ bản của
              những văn kiện đó là:
            </p>
            <a className='font-bold hover:cursor-pointer' href='#noi-dung-1'>
              Đọc tiếp...
            </a>
          </div>
        </section>

        <section
          id='noi-dung-1'
          className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'
        >
          <p className='text-center font-semibold max-w-5xl mt-4 mb-2 text-2xl'>
            Những thành tựu quan trọng trước Đại hội V
          </p>
          <div className='text-left max-w-4xl space-y-1'>
            <p>
              Chỉ ra 3 thắng lợi trong 5 năm thực hiện Nghị quyết Đại hội IV:
            </p>
            <p>
              • Nhanh chóng thống nhất đất nước về mặt Nhà nước, thực hiện một
              bước quyền làm chủ tập thể của nhân dân lao động.
            </p>
            <p>
              • Giành thắng lợi trong cuộc chiến tranh bảo vệ Tổ quốc ở hai đầu
              biên giới, bảo vệ thành công độc lập, chủ quyền và toàn vẹn lãnh
              thổ đất nước, giúp đỡ Mặt trận đoàn kết dân tộc cứu nước
              Campuchia, cứu dân tộc Khmer khỏi họa diệt chủng.
            </p>
            <p>
              • Đạt được những thành tựu đáng kể trên mặt trận kinh tế. bước đầu
              khắc phục những hậu quả nặng nề do chiến tranh xâm lược và thiên
              tai liên tiếp xảy ra.
            </p>
          </div>
        </section>

        <section
          id='noi-dung-2'
          className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'
        >
          <p className='text-center font-semibold max-w-5xl mt-4 mb-2 text-2xl'>
            Hai nhiệm vụ chiến lược
          </p>
          <div className='text-left max-w-4xl space-y-1'>
            <p>
              Xuất phát từ thực tiễn, Đại hội đã nêu lên hai nhiệm vụ chiến lược
              của cách mạng nước ta trong giai đoạn mới:
            </p>
            <p>• Xây dựng thành công chủ nghĩa xã hội.</p>
            <p>
              • Sẵn sàng chiến đấu, bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ
              nghĩa.
            </p>
            <p className='font-semibold'>
              → Hai nhiệm vụ chiến lược đó có quan hệ mật thiết với nhau.
            </p>
          </div>
        </section>

        <section
          id='noi-dung-3'
          className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'
        >
          <p className='text-center font-semibold max-w-5xl mt-4 mb-2 text-2xl'>
            Định hướng phát triển kinh tế - xã hội
          </p>
          <div className='text-left max-w-4xl space-y-1'>
            <p>
              Xác định chặng đường đầu tiên của thời kỳ quá độ, bao gồm giai
              đoạn 1981 - 1985 và kéo dài đến năm 1990. "Là khoảng thời gian có
              tầm quan trọng đặc biệt", nhiệm vụ cần thiết trước mắt là ổn định
              tình hình kinh tế - xã hội:
            </p>
            <p>
              • "Cần tập trung sức mạnh phát triển nông nghiệp”, tập trung phát
              triển nông nghiệp là mặt trận hàng đầu.
            </p>
            <p>
              • Đẩy mạnh sản xuất hàng tiêu dùng và phát triển một số ngành công
              nghiệp nặng quan trọng.
            </p>
            <p className='font-semibold'>
              → Kết hợp công - nông hợp lý, chương trình ba mục tiêu: hàng lương
              thực, thực phẩm; hàng tiêu dùng; hàng xuất khẩu. * Nông nghiệp là
              mặt trận hàng đầu.
            </p>
          </div>
        </section>

        <section
          id='cong-nghiep-nang'
          className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'
        >
          <p className='text-center font-semibold max-w-5xl mt-4 mb-6 text-2xl'>
            Các ngành công nghiệp nặng:
          </p>
          <div className='max-w-6xl space-y-1'>
            <div className='pl-4 flex-col flex md:flex-row items-center justify-center space-x-4'>
              <div className='flex md:flex-row md:space-x-4'>
                <Card src='/luyenkim.png' title='Luyện kim' />
                <Card src='/cokhichetao.png' title='Cơ khí chế tạo' />
              </div>
              <div className='flex md:flex-row md:space-x-4'>
                <Card src='/hoachat.png' title='Hóa chất' />
                <Card src='/dienluc.png' title='Điện lực' />
              </div>
              <div>
                <Card
                  src='/khaithackhoangsan.png'
                  title='Khai thác khoáng sản'
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id='noi-dung-3'
          className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'
        >
          <p className='text-center font-semibold max-w-5xl mt-4 mb-2 text-2xl'>
            Cơ cấu kinh tế
          </p>
          <div className='text-left max-w-4xl space-y-1'>
            <p>Trong một thời gian nhất định cơ cấu kinh tế:</p>
            <p>
              • Miền Bắc có 3 thành phần kinh tế (quốc doanh, tập thể, cá thể).
            </p>
            <p>
              • Miền Nam có 5 thành phần kinh tế (quốc doanh, tập thể, công tư
              hợp doanh, cá thể, tư bản tư nhân).
            </p>
            <p>Chủ trương đổi mới cơ chế quản lý kinh tế:</p>
            <p>• Lấy kế hoạch nhà nước làm trung tâm.</p>
            <p>
              • Vận dụng các đòn bẩy kinh tế, khuyến khích sáng kiến và tài
              năng.
            </p>
            <p>• Nâng cao hiệu lực điều hành của các cấp quản lý.</p>
          </div>
        </section>

        <section
          id='noi-dung-3'
          className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'
        >
          <p className='text-center font-semibold max-w-5xl mt-4 mb-2 text-2xl'>
            Các chỉ tiêu phát triển kinh tế - xã hội (1981-1985)
          </p>
          <div className='text-left max-w-4xl space-y-1'>
            <p>• Sản xuất nông nghiệp tăng trung bình 6 - 7%/năm.</p>
            <p>• Sản xuất công nghiệp tăng trung bình 4 - 5%/năm.</p>
            <p>• Thu nhập quốc dân tăng trung bình 4,5 - 5%.</p>
            <p>• Sản lượng lương thực tăng 32%.</p>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <p className='text-center font-semibold max-w-5xl mt-4 mb-2 text-2xl'>
            Đối ngoại
          </p>
          <div className='text-center max-w-4xl space-y-1'>
            <p>• Đoàn kết với các lực lượng cách mạng và tiến bộ thế giới.</p>
            <p className='flex'>
              • Ủng hộ mạnh mẽ cuộc đấu tranh của nhân dân các nước chống chính
              sách hiếu chiến và xâm lược của chủ nghĩa đế quốc, đứng đầu là đế
              quốc Mỹ.
            </p>
            <p>
              • Đoàn kết và hợp tác toàn diện với Liên Xô; Quan hệ đặc biệt với
              Lào.
            </p>
            <p>
              • Thiết lập và mở rộng quan hệ bình thường về mặt Nhà nước, về
              kinh tế, văn hoá và khoa học, kỹ thuật với tất cả các nước, không
              phân biệt chế độ chính trị, xã hội, trên cơ sở tôn trọng độc lập,
              chủ quyền, bình đẳng và cùng có lợi
            </p>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <p className='text-center font-semibold max-w-5xl mt-4 mb-2 text-2xl'>
            Thành tựu nổi bật
          </p>
          <div className='text-center md:text-left md:max-w-4xl space-y-1'>
            <p>
              Kế hoạch 5 năm 1981-1985 do Đại hội đề ra đã đạt được nhiều thành
              tựu nhưng chủ yếu là trong nông nghiệp.
            </p>
            <p>Khoa học kỹ thuật được triển khai mạnh mẽ:</p>
            <p className='hidden md:block'>
              • Bắt đầu khai thác dầu mỏ với sự hợp tác của Liên Xô, đặc biệt là
              tại mỏ Bạch Hổ.
            </p>
            <p className='hidden md:block'>
              • Xây dựng nhiều công trình thủy điện quan trọng như Thủy điện Hòa
              Bình, Thủy điện Trị An.
            </p>
            <div className='hidden mt-4 md:flex flex-row justify-center space-x-10'>
              <Card src='/mobachho.png' title='Mỏ Bạch Hổ' />
              <Card src='/thuydienhoabinh.png' title='Thủy điện Hòa Bình' />
              <Card src='/thuydientrian.png' title='Thủy điện Trị An' />
            </div>
            <div className='md:hidden flex flex-col justify-center items-center'>
              <Card src='/mobachho.png' title='Mỏ Bạch Hổ' />
              <div className='flex'>
                <Card src='/thuydienhoabinh.png' title='Thủy điện Hòa Bình' />
                <Card src='/thuydientrian.png' title='Thủy điện Trị An' />
              </div>
            </div>
          </div>
        </section>

        <section className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'>
          <p className='text-center font-semibold max-w-5xl mt-4 mb-2 text-2xl'>
            Một số hạn chế
          </p>
          <div className='text-left max-w-4xl space-y-1'>
            <p>
              • Kinh tế mất cân đối lớn: <br />
              &nbsp;- Kinh tế quốc doanh và tập thể thua lỗ nặng, không phát huy
              tác dụng.
              <br />
              &nbsp;- Kinh tế tư nhân và cá thể vẫn bị ngăn cấm triệt để.
              <br />
              &nbsp;- Sản xuất chậm phát triển, thu nhập quốc dân và năng suất
              lao động thấp.
              <br />
              &nbsp;- Đời sống nhân dân khó khăn, xã hội phát sinh nhiều hiện
              tượng tiêu cực.
            </p>
            <p>
              • Chính sách nông nghiệp chưa đủ mạnh: chưa có những chính sách,
              giải pháp cụ thể để giải phóng lực lượng sản xuất trong nông
              nghiệp.
            </p>
            <p>
              • Chính sách đối ngoại chưa hiệu quả: chưa đưa ra được giải pháp
              hữu hiệu để giúp đất nước thoát khỏi thế bị bao vây, cô lập.
            </p>
          </div>
        </section>

        <section
          id='noi-dung-cuoi'
          className='h-screen flex flex-col justify-center items-center text-white px-6 snap-start'
        >
          <p className='text-center font-semibold max-w-5xl mt-4 mb-2 text-2xl'>
            Ý nghĩa của Đại hội V
          </p>
          <div className='text-left max-w-4xl space-y-1'>
            <p>
              • Phản ánh tư duy đổi mới từng bước của Đảng trong việc tìm tòi,
              tổng kết thực tiễn, đề ra hướng đi phù hợp với điều kiện thực tế.
            </p>
            <p>
              • Xây dựng cơ cấu kinh tế và cơ chế quản lý phù hợp với giai đoạn
              đầu của thời kỳ quá độ lên chủ nghĩa xã hội.
            </p>
            <p>
              • Nội dung của chặng đường đầu tiên là chuẩn bị những tiền đề cần
              thiết về kinh tế, kỹ thuật để đẩy mạnh công nghiệp hóa xã hội chủ
              nghĩa, khắc phục khủng hoảng kinh tế - xã hội, chăm lo đời sống
              của nhân dân.
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
