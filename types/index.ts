import { WorkType } from "@/constants";

export enum Status {
  ON_SALE = "on-sale",
  COMING_SOON = "coming-soon",
  HANDED_OVER = "handed-over",
}

export enum Area {
  UNDER_50 = "<50",
  FROM_50_70 = "50-70",
  FROM_70_100 = "70-100",
  OVER_100 = ">100",
}

export interface LocationDetail {
  address: string;
  description: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ProjectInfoContent {
  image: string;
  content: string[];
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  province: string;
  ward: string;
  area: Area;
  status: Status;
  image: string;
  info: string[];
  location: ProjectInfoContent;
  potential: ProjectInfoContent;
  livingSpace: ProjectInfoContent;
  salesPolicy: ProjectInfoContent;
  images: string[];
  contact: string;
}

export interface AccordionItem {
  id: number;
  title: string;
  content: React.ReactNode;
}

export type SubNavItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  match?: string;
  dropdown?: SubNavItem[];
};

export interface JobPosition {
  id: number;
  title: string;
  workType: WorkType;
  quantity: number;
  salary: string;
  location: string;
  deadline: string;
  contact: string;
  email: string;
}
