import { projects } from '@/data/projects-data';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectsUrls = (projects || []).map((project) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${project.slug}`,
    lastModified: project.lastModified,
    priority: 0.6,
  }));

  return [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL as string,
      lastModified: '2024-10-15',
      priority: 1.0,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      lastModified: '2024-10-15',
      priority: 0.8,
    },
    ...projectsUrls,
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/stack`,
      lastModified: '2024-10-15',
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: '2024-10-15',
      priority: 0.6,
    },
  ];
}
