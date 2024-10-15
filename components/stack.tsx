import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { stacks } from '@/data/stack-data';

export const Stack = () => {
  return (
    <section className='my-6 md:my-8'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-white font-medium text-lg'>Stack</h2>
        <Link
          href='/stack'
          className='flex items-center gap-1 hover:text-white transition-colors'>
          All <ArrowRight className='h-4 w-4' />
        </Link>
      </div>
      <div className='flex flex-wrap gap-3'>
        {stacks.map((stack) => (
          <Link key={stack.id} href={stack.href} target='_blank'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar className='h-10 w-10'>
                    <AvatarImage src={stack.src} alt='Stack logos' />
                    <AvatarFallback>{stack.fallback}</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent className='mb-2 bg-white text-[#1D1D1D]'>
                  <h3 className='font-bold'>{stack.name}</h3>
                  <p className='text-xs text-primary'>{stack.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        ))}
      </div>
    </section>
  );
};
