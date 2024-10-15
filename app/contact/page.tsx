'use client';

import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AvailabilityStatus } from '@/components/availability-status';
import { fromBottomVariants, fromTopVariants } from '@/lib/animation-variants';

export default function ContactPage() {
  return (
    <>
      <motion.header
        variants={fromTopVariants}
        initial='initial'
        animate='target'
        className='mb-6 md:mb-8'>
        <h3 className='font-medium'>Contact</h3>
      </motion.header>
      <motion.div
        variants={fromBottomVariants}
        initial='initial'
        animate='target'>
        <section className='py-6 md:py-8'>
          <h1 className='font-medium text-2xl md:text-3xl mb-4'>
            Say <span className='text-white'>hey.</span>
          </h1>
          <p className='md:text-xl leading-6 tracking-tight mb-6'>
            Ready to create something truly amazing together? Get in touch!
          </p>
          <AvailabilityStatus />
          <Button className='bg-[#272727] hover:bg-[#393939]' asChild>
            <Link
              href='https://calendly.com/thmslfb'
              target='_blank'
              className='font-semibold gap-3'>
              <Calendar className='h-5 w-5 text-[#888888]' />
              Book a call
            </Link>
          </Button>
        </section>
        <Separator className='bg-[#3F3F3F] my-6 md:my-8' />
        <div className='mb-6 md:mb-8'>
          <ContactForm />
        </div>
        <Footer />
      </motion.div>
    </>
  );
}
