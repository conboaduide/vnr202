import { Noto_Sans_Mono } from 'next/font/google';
import './globals.css';
import NavBar from './_components/nav/NavBar';

const noto_sans_mono = Noto_Sans_Mono({ subsets: ['latin'] });

export const metadata = {
  title: 'Lịch sử Đảng - Chương 3',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${noto_sans_mono.className} select-none`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
