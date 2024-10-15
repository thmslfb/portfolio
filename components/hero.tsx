import Link from 'next/link';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';
import { AvailabilityStatus } from './availability-status';

export const Hero = () => {
  return (
    <section className='py-6 md:py-8'>
      <h1 className='font-medium text-2xl md:text-3xl mb-4'>
        I build <span className='text-white'>websites.</span>
      </h1>
      <p className='md:text-xl leading-6 tracking-tight mb-6'>
        I&apos;m Thomas Lefebvre, a passionate developer based in Amiens,
        France. I specialize in front-end development and creating engaging web
        experiences.
      </p>
      <AvailabilityStatus />
      <Button asChild>
        <Link href='/contact' className='font-semibold gap-3'>
          <Mail className='h-5 w-5 text-primary' />
          Contact me
        </Link>
      </Button>
    </section>
  );
};
