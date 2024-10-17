import { Lock, Search } from 'lucide-react';

type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  logo: JSX.Element;
  date: string;
  category: string;
  href: string;
  image: string;
  tools: string[];
  additionalInfo: { label: string; value: string }[];
  githubLink: string;
  demoLink?: string;
  lastModified: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'auth-starter-kit',
    title: 'Auth Starter Kit',
    description: 'An auth starter kit for my projects.',
    longDescription:
      'A robust authentication starter kit that can be easily integrated into various web projects, providing secure user authentication and authorization.',
    logo: <Lock />,
    date: '2024',
    category: 'Auth',
    href: `/projects/auth-starter-kit`,
    image:
      'https://res.cloudinary.com/dyq2t6mgd/image/upload/v1729179812/auth-starter-kit_anslcb.png',
    tools: ['Lucia', 'Prisma', 'PostgreSQL', 'Supabase'],
    additionalInfo: [
      { label: 'Deployment', value: 'Vercel' },
      { label: 'Framework', value: 'Next.js' },
      { label: 'Language', value: 'TypeScript' },
    ],
    githubLink: 'In progress',
    lastModified: '2024-10-17',
  },

  {
    id: 2,
    slug: 'github-finder',
    title: 'GitHub Finder',
    description: 'A GitHub user search app.',
    longDescription:
      'An application that allows users to search for GitHub profiles and view detailed information, including bios and locations.',
    logo: <Search />,
    date: '2022',
    category: 'Web Application',
    href: '/projects/github-finder',
    image:
      'https://res.cloudinary.com/dyq2t6mgd/image/upload/v1728917685/github-finder_ch5ttc.png',
    tools: ['React', 'GitHub API', 'Tailwind CSS'],
    additionalInfo: [
      { label: 'Deployment', value: 'GitHub Pages' },
      { label: 'Framework', value: 'Vite.js' },
      { label: 'Language', value: 'JavaScript' },
    ],
    githubLink: 'https://github.com/thmslfb/react-github-finder',
    demoLink: 'https://thmslfb.github.io/react-github-finder/',
    lastModified: '2024-10-14',
  },
];
