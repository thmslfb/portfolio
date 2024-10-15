import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '@/components/navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  keywords: ['Thomas Lefebvre', 'Frontend Developer', 'thmslfb'],
  title: {
    default: 'Thomas Lefebvre - Frontend Developer',
    template: '%s - Thomas Lefebvre',
  },
  description:
    "I'm Thomas Lefebvre, a passionate developer based in Amiens, France. I specialize in front-end development and creating engaging web experiences.",
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased max-w-lg p-4 md:py-6 md:px-0 mx-auto bg-background text-primary flex flex-col min-h-screen`}>
        <main className='flex-grow'>{children}</main>
        <Navbar />
      </body>
    </html>
  );
}
