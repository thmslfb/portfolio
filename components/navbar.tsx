'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Separator } from './ui/separator';
import { links, socials } from '@/data/navbar-data';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex gap-2 items-center rounded-full p-2 border border-[#3F3F3F] w-fit mx-auto sticky bottom-6 bg-[#2F2F2F]/90 backdrop-blur-md'>
      {links.map((link) => (
        <TooltipProvider key={link.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className={cn(
                  ' flex h-10 w-10 items-center justify-center rounded-full text-[#888888]  transition-colors',
                  pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(link.href))
                    ? 'bg-[#D5D5D5] text-[#1E1E1E] pointer-events-none'
                    : 'hover:bg-[#484848]'
                )}>
                {link.logo}
              </Link>
            </TooltipTrigger>
            <TooltipContent className='mb-3 bg-white text-[#1E1E1E] rounded-full py-1'>
              {link.name}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
      <Separator orientation='vertical' className='h-6 bg-[#3F3F3F] mx-1' />
      {socials.map((social) => (
        <TooltipProvider key={social.id}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={social.href}
                target='_blank'
                className='h-10 w-10 flex items-center justify-center rounded-full text-[#888888] hover:bg-[#484848] transition-colors'>
                {social.logo}
              </Link>
            </TooltipTrigger>
            <TooltipContent className='mb-3 bg-white text-[#1E1E1E] rounded-full py-1'>
              {social.name}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </nav>
  );
};
