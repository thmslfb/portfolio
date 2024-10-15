import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Ready to create something truly amazing together? Get in touch!',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
