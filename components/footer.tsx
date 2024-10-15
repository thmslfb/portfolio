import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='py-6 md:py-8'>
      <p className='text-sm tracking-tight'>
        &copy; 2024{' '}
        <Link href='/' className='hover:underline'>
          thmslfb
        </Link>
      </p>
    </footer>
  );
};
