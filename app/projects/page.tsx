'use client';

import { motion } from 'framer-motion';
import { Projects } from '@/components/projects';
import { Footer } from '@/components/footer';
import { fromBottomVariants, fromTopVariants } from '@/lib/animation-variants';

export default function ProjectsPage() {
  return (
    <>
      <motion.header
        variants={fromTopVariants}
        initial='initial'
        animate='target'
        className='mb-6 md:mb-8'>
        <h3 className='font-medium'>Projects</h3>
      </motion.header>
      <motion.div
        variants={fromBottomVariants}
        initial='initial'
        animate='target'>
        <h1 className='font-medium text-2xl md:text-3xl py-6 md:py-8'>
          Things I&apos;ve <span className='text-white'>made.</span>
        </h1>
        <Projects showHeader={false} />
        <Footer />
      </motion.div>
    </>
  );
}
