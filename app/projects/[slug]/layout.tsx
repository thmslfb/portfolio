import { projects } from '@/data/projects-data';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: {
        absolute: '404',
      },
      description: 'Not found',
    };
  }

  return {
    title: {
      absolute: `${project.title} - Thomas Lefebvre`,
    },
    description: project.longDescription,
    openGraph: {
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} - Thomas Lefebvre`,
        },
      ],
    },
  };
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
