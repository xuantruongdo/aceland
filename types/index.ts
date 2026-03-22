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

export interface Project {
  id: number;
  name: string;
  location: string;
  province: string;
  ward: string;
  area: Area;
  status: Status;
  image: string;
}

export interface AccordionItem {
  id: number;
  title: string;
  content: React.ReactNode;
}
