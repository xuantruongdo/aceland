import { Area, Project, Status } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Hồng Hà Eco City",
    location: "Yên Sở, Hà Nội",
    province: "Hà Nội",
    ward: "Yên Sở",
    area: Area.FROM_70_100,
    status: Status.ON_SALE,
    image: "/images/project1.png",
  },
  {
    id: 2,
    name: "393 Lĩnh Nam",
    location: "Lĩnh Nam, Hà Nội",
    province: "Hà Nội",
    ward: "Lĩnh Nam",
    area: Area.FROM_50_70,
    status: Status.ON_SALE,
    image: "/images/project2.png",
  },
  {
    id: 3,
    name: "Diamond Plaza Saigon",
    location: "Quận 1, TP.HCM",
    province: "TP.HCM",
    ward: "Bến Nghé",
    area: Area.OVER_100,
    status: Status.ON_SALE,
    image: "/images/project3.png",
  },
  {
    id: 4,
    name: "The Westgate",
    location: "Bình Chánh, TP.HCM",
    province: "TP.HCM",
    ward: "Bình Chánh",
    area: Area.UNDER_50,
    status: Status.ON_SALE,
    image: "/images/project4.png",
  },
  {
    id: 5,
    name: "Sky Garden Complex",
    location: "Dầu Tiếng, Hồ Chí Minh",
    province: "TP.HCM",
    ward: "Dầu Tiếng",
    area: Area.FROM_50_70,
    status: Status.ON_SALE,
    image: "/images/project5.png",
  },
  {
    id: 6,
    name: "Thanh Xuân Social Housing",
    location: "Văn Miếu - Quốc Tử Giám, Hà Nội",
    province: "Hà Nội",
    ward: "Văn Miếu",
    area: Area.UNDER_50,
    status: Status.ON_SALE,
    image: "/images/project6.png",
  },
  {
    id: 7,
    name: "Sunshine Crystal River",
    location: "Tây Hồ, Hà Nội",
    province: "Hà Nội",
    ward: "Tây Hồ",
    area: Area.FROM_70_100,
    status: Status.COMING_SOON,
    image: "/images/project5.png",
  },
  {
    id: 8,
    name: "Vinhomes Ocean Park 3",
    location: "Gia Lâm, Hà Nội",
    province: "Hà Nội",
    ward: "Gia Lâm",
    area: Area.OVER_100,
    status: Status.COMING_SOON,
    image: "/images/project6.png",
  },
  {
    id: 9,
    name: "Ecopark Grand",
    location: "Văn Giang, Hưng Yên",
    province: "Hưng Yên",
    ward: "Văn Giang",
    area: Area.OVER_100,
    status: Status.COMING_SOON,
    image: "/images/project7.png",
  },
  {
    id: 10,
    name: "Emerald City Garden",
    location: "Cầu Giấy, Hà Nội",
    province: "Hà Nội",
    ward: "Cầu Giấy",
    area: Area.FROM_50_70,
    status: Status.HANDED_OVER,
    image: "/images/project8.png",
  },
  {
    id: 11,
    name: "Ace Tower Premium",
    location: "Thanh Xuân, Hà Nội",
    province: "Hà Nội",
    ward: "Thanh Xuân",
    area: Area.UNDER_50,
    status: Status.HANDED_OVER,
    image: "/images/project9.png",
  },
  {
    id: 12,
    name: "Saigon Pearl",
    location: "Bình Thạnh, TP.HCM",
    province: "TP.HCM",
    ward: "Bình Thạnh",
    area: Area.FROM_50_70,
    status: Status.HANDED_OVER,
    image: "/images/project10.png",
  },
];

export const PROJECT_TABS: { key: Status; label: string; image: string }[] = [
  {
    key: Status.ON_SALE,
    label: "ĐANG MỞ BÁN",
    image: "/images/project-tab1.png",
  },
  {
    key: Status.COMING_SOON,
    label: "SẮP RA MẮT",
    image: "/images/project-tab2.png",
  },
  {
    key: Status.HANDED_OVER,
    label: "ĐÃ BÀN GIAO",
    image: "/images/project-tab3.png",
  },
];

export const PROVINCES = ["Hà Nội", "TP.HCM", "Hưng Yên"];
export const WARDS: Record<string, string[]> = {
  "Hà Nội": [
    "Yên Sở",
    "Lĩnh Nam",
    "Tây Hồ",
    "Gia Lâm",
    "Cầu Giấy",
    "Thanh Xuân",
    "Văn Miếu",
  ],
  "TP.HCM": ["Bến Nghé", "Bình Chánh", "Bình Thạnh", "Dầu Tiếng"],
  "Hưng Yên": ["Văn Giang"],
};
export const AREA_OPTIONS = [
  { value: Area.UNDER_50, label: "< 50 ha" },
  { value: Area.FROM_50_70, label: "50 - 70 ha" },
  { value: Area.FROM_70_100, label: "70 - 100 ha" },
  { value: Area.OVER_100, label: "> 100 ha" },
];

export const PAGE_SIZE = 4;

export enum IssuedBy {
  Empty = "",
  MinistryOfPublicSecurity = "ministry-of-public-security",
  PoliceAdminDepartment = "police-admin-department",
}

export enum MaritalStatus {
  Empty = "",
  Single = "single",
  Married = "married",
}

export enum PropertyOwnership {
  Empty = "",
  None = "none",
  OwnedUnder15 = "owned-under-15",
  OwnedOver15 = "owned-over-15",
}

export const TARGET_GROUP_OPTIONS = [
  "Người có công với cách mạng",
  "Hộ gia đình nghèo và cận nghèo",
  "Người thu nhập thấp tại đô thị",
  "Người lao động tại khu công nghiệp",
  "Cán bộ, công chức, viên chức",
  "Sĩ quan, quân nhân chuyên nghiệp",
  "Học sinh, sinh viên",
  "Hộ gia đình bị thu hồi đất",
];

export enum ApartmentType {
  Empty = "",
  Studio = "studio",
  OneBedroom = "1-bedroom",
  TwoBedroom = "2-bedroom",
  ThreeBedroom = "3-bedroom",
  Penthouse = "penthouse",
  Shophouse = "shophouse",
}

export const APARTMENT_TYPE_OPTIONS: { value: ApartmentType; label: string }[] =
  [
    { value: ApartmentType.Studio, label: "Studio" },
    { value: ApartmentType.OneBedroom, label: "1 Phòng ngủ" },
    { value: ApartmentType.TwoBedroom, label: "2 Phòng ngủ" },
    { value: ApartmentType.ThreeBedroom, label: "3 Phòng ngủ" },
    { value: ApartmentType.Penthouse, label: "Penthouse" },
    { value: ApartmentType.Shophouse, label: "Shophouse" },
  ];
