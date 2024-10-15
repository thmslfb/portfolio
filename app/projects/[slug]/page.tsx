'use client';

import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/data/projects-data';
import { fromBottomVariants, fromTopVariants } from '@/lib/animation-variants';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ProjectSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <motion.header
        variants={fromTopVariants}
        initial='initial'
        animate='target'
        className='mb-6 md:mb-8'>
        <Link
          href='/projects'
          className='flex items-center gap-2 group hover:text-white transition-all'>
          <ArrowLeft className='h-5 w-5 py-1 flex items-center justify-center bg-[#64676E]/20 group-hover:bg-[#64676E]/40 rounded-full' />
          <h3 className='font-medium group-hover:text-white'>Projects</h3>
        </Link>
      </motion.header>
      <motion.div
        variants={fromBottomVariants}
        initial='initial'
        animate='target'>
        <section className='py-6 md:py-8'>
          <p className='border border-[#303030] w-fit py-1 px-3 text-sm rounded-lg mb-4'>
            {project.category}
          </p>
          <h1 className='font-medium text-2xl md:text-3xl text-white mb-2'>
            {project.title}
          </h1>
          <p className='md:text-xl leading-6 tracking-tight'>
            {project.description}
          </p>
        </section>

        <section className='my-6 md:my-8'>
          <div className='-mx-4 md:-mx-28 mb-6 md:mb-8'>
            <div className='aspect-w-16 aspect-h-9'>
              <Image
                src={project.image}
                alt={`${project.title} project image`}
                fill
                quality={100}
                className='object-cover md:rounded-xl'
                priority={true}
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-3'>
            {project.githubLink && (
              <Button
                variant='secondary'
                disabled={project.githubLink === 'In progress'}
                asChild={project.githubLink !== 'In progress'}>
                <Link href={project.githubLink} target='_blank'>
                  {project.githubLink === 'In progress'
                    ? 'In progress'
                    : 'Explore on GitHub'}
                </Link>
              </Button>
            )}
            {project.demoLink && (
              <Button asChild>
                <Link
                  href={project.demoLink}
                  className='flex items-center gap-2'
                  target='_blank'>
                  <Eye className='h-4 w-4 text-primary' /> Visit website
                </Link>
              </Button>
            )}
          </div>
          <p className='my-6 md:my-8'>{project.longDescription}</p>
          <h4 className='text-lg font-medium text-white mb-6 md:mb-8'>
            Powered by these technologies:
          </h4>
          {project.tools.map((tool, index) => (
            <ul key={index} className='list-disc list-inside'>
              <li>{tool}</li>
            </ul>
          ))}
          <Separator className='bg-[#3F3F3F] my-6 md:my-8' />
          <div className='flex flex-col space-y-1'>
            {project.additionalInfo.map((info) => (
              <div key={info.label} className='flex'>
                <h5 className='text-white text-sm font-medium max-w-[120px] w-full'>
                  {info.label}
                </h5>
                <p className='text-sm '>{info.value}</p>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </motion.div>
    </>
  );
}
