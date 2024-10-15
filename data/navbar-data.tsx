import {
  ArrowUpRight,
  Github,
  Home,
  Layers,
  Layout,
  LinkedinIcon,
  MessageSquare,
} from 'lucide-react';

type Link = {
  id: number;
  name: string | JSX.Element;
  logo: JSX.Element;
  href: string;
};

export const links: Link[] = [
  {
    id: 1,
    name: 'Home',
    logo: <Home />,
    href: '/',
  },
  {
    id: 2,
    name: 'Projects',
    logo: <Layout />,
    href: '/projects',
  },
  {
    id: 3,
    name: 'Stack',
    logo: <Layers />,
    href: '/stack',
  },
  {
    id: 4,
    name: 'Contact',
    logo: <MessageSquare />,
    href: '/contact',
  },
];

export const socials: Link[] = [
  {
    id: 5,
    name: (
      <p className='flex items-center gap-1'>
        GitHub <ArrowUpRight className='h-4 w-4' />
      </p>
    ),
    logo: <Github />,
    href: 'https://github.com/thmslfb',
  },
  {
    id: 6,
    name: (
      <p className='flex items-center gap-1'>
        LinkedIn <ArrowUpRight className='h-4 w-4' />
      </p>
    ),
    logo: <LinkedinIcon />,
    href: 'https://www.linkedin.com/in/thomas-ie/',
  },
];
