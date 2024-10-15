import { projects } from '@/data/projects-data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Projects = ({
  maxProjects,
  showHeader = true,
}: {
  maxProjects?: number;
  showHeader?: boolean;
}) => {
  const projectsToShow = maxProjects ? projects.slice(-maxProjects) : projects;

  return (
    <section className='my-6 md:my-8'>
      {showHeader && (
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-white font-medium text-lg'>Projects</h2>
          <Link
            href='/projects'
            className='flex items-center gap-1 hover:text-white transition-colors'>
            All <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      )}
      {projectsToShow.map((project) => (
        <Link
          href={project.href}
          key={project.id}
          className='-mx-4 px-4 rounded-xl cursor-pointer transition-all flex items-center space-x-4 py-3 hover:bg-[#272727] group'>
          <div className='h-10 w-10 flex items-center justify-center text-[#64676E] bg-[#64676E]/20 rounded-full'>
            {project.logo}
          </div>
          <div className='space-y-1 flex-1'>
            <div className='flex items-center justify-between'>
              <h3 className='text-white font-medium h-4'>{project.title}</h3>
              <p className='text-sm opacity-0 group-hover:opacity-100 transition-opacity'>
                {project.date}
              </p>
            </div>
            <p className='text-sm h-4'>{project.description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};
