'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Stack } from '@/components/stack';
import { Where } from '@/components/where';
import { fromBottomVariants, fromTopVariants } from '@/lib/animation-variants';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <motion.div variants={fromTopVariants} initial='initial' animate='target'>
        <Header />
      </motion.div>
      <motion.div
        variants={fromBottomVariants}
        initial='initial'
        animate='target'>
        <Hero />
        <Projects maxProjects={2} />
        <Where />
        <Stack />
        <Footer />
      </motion.div>
    </>
  );
}
