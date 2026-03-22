import { PROJECTS } from '@/constants';
import { Project, Status } from '@/types';
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectsByStatus(status: Status): Project[] {
  return PROJECTS.filter((p) => p.status === status);
}
