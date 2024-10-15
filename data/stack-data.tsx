type Stack = {
  id: number;
  name: string;
  description: string;
  src: string;
  fallback: string;
  href: string;
};

export const stacks: Stack[] = [
  {
    id: 1,
    name: 'Figma',
    description: 'Design tool',
    src: 'https://cdn.brandfetch.io/figma.com/w/400/h/400',
    fallback: 'FG',
    href: 'https://www.figma.com/',
  },
  {
    id: 2,
    name: 'Supabase',
    description: 'Database',
    src: 'https://cdn.brandfetch.io/supabase.in/w/400/h/400',
    fallback: 'SB',
    href: 'https://www.supabase.io/',
  },
  {
    id: 3,
    name: 'Prisma',
    description: 'ORM',
    src: 'https://cdn.brandfetch.io/prisma.io/w/400/h/400',
    fallback: 'PR',
    href: 'https://www.prisma.io/',
  },
  {
    id: 4,
    name: 'Next.js',
    description: 'React framework',
    src: 'https://cdn.brandfetch.io/nextjs.org/w/400/h/400',
    fallback: 'NX',
    href: 'https://nextjs.org/',
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    description: 'CSS framework',
    src: 'https://cdn.brandfetch.io/tailwindcss.com/w/400/h/400',
    fallback: 'TW',
    href: 'https://tailwindcss.com/',
  },
  {
    id: 6,
    name: 'VSCode',
    description: 'Code editor',
    src: 'https://cdn.brandfetch.io/vscode.dev/w/400/h/400',
    fallback: 'VS',
    href: 'https://code.visualstudio.com/',
  },
  {
    id: 7,
    name: 'Git',
    description: 'Version control',
    src: 'https://cdn.brandfetch.io/git-scm.com/w/400/h/400',
    fallback: 'GT',
    href: 'https://git-scm.com/',
  },
  {
    id: 8,
    name: 'Vercel',
    description: 'Deploy platform',
    src: 'https://cdn.brandfetch.io/vercel.com/w/400/h/400',
    fallback: 'VC',
    href: 'https://vercel.com/',
  },
  {
    id: 9,
    name: 'Claude',
    description: 'AI',
    src: 'https://cdn.brandfetch.io/idW5s392j1/w/400/h/400/fallback/lettermark/icon.webp?k=bfumLaCV7m',
    fallback: 'CL',
    href: 'https://claude.ai/',
  },
];
