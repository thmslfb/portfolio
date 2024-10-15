'use client';

import { Footer } from '@/components/footer';
import { stacks } from '@/data/stack-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fromBottomVariants, fromTopVariants } from '@/lib/animation-variants';

export default function StackPage() {
  return (
    <>
      <motion.header
        variants={fromTopVariants}
        initial='initial'
        animate='target'
        className='pb-6 md:pb-8'>
        <h3 className='font-medium'>Stack</h3>
      </motion.header>
      <motion.div
        variants={fromBottomVariants}
        initial='initial'
        animate='target'>
        <h1 className='font-medium text-2xl md:text-3xl my-6 md:my-8'>
          Things I <span className='text-white'>use.</span>
        </h1>
        <section className='py-6 md:py-8'>
          <div className='flex flex-col md:grid md:grid-cols-2 md:gap-x-6'>
            {stacks.map((stack) => (
              <Link
                key={stack.id}
                href={stack.href}
                target='_blank'
                className='-mx-3 px-3 rounded-xl cursor-pointer transition-all flex flex-1 items-center space-x-4 py-3 hover:bg-[#272727] group'>
                <Avatar className='h-10 w-10'>
                  <AvatarImage src={stack.src} alt={stack.name} />
                  <AvatarFallback>{stack.fallback}</AvatarFallback>
                </Avatar>
                <div className='space-y-1 flex-1'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-white font-medium h-4'>{stack.name}</h3>
                  </div>
                  <p className='text-sm h-4'>{stack.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Footer />
      </motion.div>
    </>
  );
}
