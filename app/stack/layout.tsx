import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stack',
  description:
    'Discover the tools and technologies I use in my development process. From design tools like Figma to frameworks like Next.js and Tailwind CSS, this stack supports my passion for building innovative web solutions.',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
