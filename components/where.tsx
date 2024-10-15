import { socials } from '@/data/where-data';
import Link from 'next/link';

export const Where = () => {
  return (
    <section className='py-6 md:py-8'>
      <h2 className='text-white font-medium text-lg mb-6'>Where</h2>
      {socials.map((social) => (
        <Link
          key={social.id}
          href={social.href}
          target='_blank'
          className='flex items-center mb-4 last:mb-0 hover:text-white transition-colors group'>
          <h3 className='font-medium'>{social.name}</h3>
          <div className='relative flex-grow mx-4 h-[1px] bg-primary'>
            <div className='absolute top-0 left-0 w-0 h-full bg-white transition-all duration-200 group-hover:w-full' />
          </div>
          <p className='text-sm'>Explore</p>
        </Link>
      ))}
    </section>
  );
};
