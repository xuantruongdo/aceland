import { Area, JobPosition, Project, Status } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "hong-ha-eco-city",
    name: "Hồng Hà Eco City",
    province: "Hà Nội",
    ward: "Yên Sở",
    area: Area.FROM_70_100,
    status: Status.ON_SALE,
    image: "/images/p1.jpg",
    contact: "0989328096",
    info: [
      "Hồng Hà Eco City là dự án nhà ở xã hội hiện đại tại khu vực phía Nam Hà Nội.",
      "Dự án được quy hoạch đồng bộ với nhiều tiện ích xanh và không gian sống thoáng đãng.",
      "Phù hợp cho gia đình trẻ và người thu nhập trung bình.",
    ],

    location: {
      image: "/images/project1.png",
      content: [
        "Nhà ở xã hội Udic Eco Tower đi vào từ ngõ 214 Nguyễn Xiển, Thanh Xuân khoảng 500m, dự án tọa lạc tại lô đất N01 khu đô thị mới Hạ Đình, xã Tân Triều, huyện Thanh Trì, thành phố Hà Nội.",
        "Với vị trí nổi bật tại cửa ngõ Tây Nam Hà Nội cư dân dễ dàng di chuyển đến khu vực phía Nam thành phố ( Giáp Bát – Ngọc Hồi ) hay khu phía Tây ( Mỹ Đình ) hoặc đi vào nội đô thành phố ( Nguyễn Trãi ) thông qua tuyến đường huyết mạch vành đai 3. Đồng thời, di chuyển qua các trục đường lớn như: Nguyễn Xiển, Nguyễn Trãi,… Kết nối hàng loạt các khu đô thị dọc theo trục đường vành đai 3 như: Khu đô thị Linh Đàm, khu đô thị Tây Nam Kim Giang,…",
        "Gần các khu đô thị lớn như Linh Đàm và Gamuda.",
      ],
    },

    potential: {
      image: "/images/project1.png",
      content: [
        "Khu vực đang phát triển mạnh về hạ tầng.",
        "Giá còn tốt so với tiềm năng tăng trưởng.",
        "Phù hợp đầu tư dài hạn.",
      ],
    },

    livingSpace: {
      image: "/images/project1.png",
      content: [
        "Thiết kế hiện đại tối ưu diện tích.",
        "Nhiều mảng xanh và công viên nội khu.",
        "Môi trường sống yên tĩnh và an toàn.",
      ],
    },

    salesPolicy: {
      image: "/images/project1.png",
      content: [
        "Hỗ trợ vay ngân hàng lên đến 80%.",
        "Thanh toán linh hoạt nhiều đợt.",
        "Ưu đãi cho khách hàng mua sớm.",
      ],
    },

    images: [
      "/images/pic1.jpg",
      "/images/pic2.jpg",
      "/images/pic3.jpg",
      "/images/pic4.jpg",
      "/images/pic5.jpg",
    ],
  },
  {
    id: 2,
    slug: "393-linh-nam",
    name: "393 Lĩnh Nam",
    province: "Hà Nội",
    ward: "Lĩnh Nam",
    area: Area.FROM_50_70,
    status: Status.ON_SALE,
    image: "/images/p2.jpg",
    contact: "0989328096",
    info: [
      "Dự án căn hộ giá hợp lý tại khu vực Lĩnh Nam.",
      "Phù hợp với người mua ở thực.",
      "Tiện ích đầy đủ trong bán kính gần.",
    ],

    location: {
      image: "/images/project2.png",
      content: [
        "Nằm trên trục đường Lĩnh Nam.",
        "Dễ dàng kết nối đến trung tâm Hoàng Mai.",
        "Gần trường học và chợ.",
      ],
    },

    potential: {
      image: "/images/project2.png",
      content: [
        "Khu vực đang phát triển nhanh.",
        "Giá tăng đều theo thời gian.",
        "Thanh khoản tốt.",
      ],
    },

    livingSpace: {
      image: "/images/project2.png",
      content: [
        "Không gian sống tiện nghi.",
        "Thiết kế tối giản.",
        "Phù hợp gia đình nhỏ.",
      ],
    },

    salesPolicy: {
      image: "/images/project2.png",
      content: [
        "Giá bán cạnh tranh.",
        "Thanh toán linh hoạt.",
        "Hỗ trợ vay ngân hàng.",
      ],
    },

    images: [
      "/images/pic1.jpg",
      "/images/pic2.jpg",
      "/images/pic3.jpg",
      "/images/pic4.jpg",
      "/images/pic5.jpg",
    ],
  },

  {
    id: 3,
    slug: "diamond-plaza-saigon",
    name: "Diamond Plaza Saigon",
    province: "TP.HCM",
    ward: "Bến Nghé",
    area: Area.OVER_100,
    status: Status.ON_SALE,
    image: "/images/p3.png",
    contact: "0989328096",
    info: [
      "Dự án cao cấp tại trung tâm Quận 1.",
      "Chuẩn sống sang trọng dành cho giới thượng lưu.",
      "Tiện ích quốc tế đầy đủ.",
    ],

    location: {
      image: "/images/project3.png",
      content: [
        "Ngay trung tâm TP.HCM.",
        "Gần Nhà thờ Đức Bà và phố đi bộ.",
        "Kết nối mọi tiện ích cao cấp.",
      ],
    },

    potential: {
      image: "/images/project3.png",
      content: [
        "Giá trị tăng bền vững.",
        "Khu vực hiếm nguồn cung.",
        "Phù hợp đầu tư giữ tài sản.",
      ],
    },

    livingSpace: {
      image: "/images/project3.png",
      content: [
        "Không gian sống đẳng cấp.",
        "An ninh 24/7.",
        "Dịch vụ quản lý chuyên nghiệp.",
      ],
    },

    salesPolicy: {
      image: "/images/project3.png",
      content: [
        "Chính sách VIP.",
        "Ưu đãi đặc biệt cho khách hàng thân thiết.",
        "Thanh toán linh hoạt.",
      ],
    },

    images: [
      "/images/pic1.jpg",
      "/images/pic2.jpg",
      "/images/pic3.jpg",
      "/images/pic4.jpg",
      "/images/pic5.jpg",
    ],
  },

  {
    id: 4,
    slug: "the-westgate",
    name: "The Westgate",
    province: "TP.HCM",
    ward: "Bình Chánh",
    area: Area.UNDER_50,
    status: Status.ON_SALE,
    image: "/images/p4.jpg",
    contact: "0989328096",
    info: [
      "Căn hộ giá tốt khu Tây TP.HCM.",
      "Phù hợp người trẻ.",
      "Thiết kế hiện đại.",
    ],

    location: {
      image: "/images/project4.png",
      content: [
        "Gần đại lộ Võ Văn Kiệt.",
        "Di chuyển nhanh vào trung tâm.",
        "Khu vực dân cư đông.",
      ],
    },

    potential: {
      image: "/images/project4.png",
      content: [
        "Giá mềm dễ tiếp cận.",
        "Khu vực đang đô thị hóa.",
        "Tiềm năng tăng giá.",
      ],
    },

    livingSpace: {
      image: "/images/project4.png",
      content: [
        "Không gian yên tĩnh.",
        "Tiện ích cơ bản đầy đủ.",
        "Phù hợp ở thực.",
      ],
    },

    salesPolicy: {
      image: "/images/project4.png",
      content: ["Trả góp dài hạn.", "Hỗ trợ vay.", "Ưu đãi mở bán."],
    },

    images: [
      "/images/pic1.jpg",
      "/images/pic2.jpg",
      "/images/pic3.jpg",
      "/images/pic4.jpg",
      "/images/pic5.jpg",
    ],
  },

  {
    id: 5,
    slug: "sky-garden-complex",
    name: "Sky Garden Complex",
    province: "TP.HCM",
    ward: "Dầu Tiếng",
    area: Area.FROM_50_70,
    status: Status.ON_SALE,
    image: "/images/p5.jpg",
    contact: "0989328096",
    info: [
      "Khu căn hộ xanh với nhiều tiện ích.",
      "Không gian sống trong lành.",
      "Phù hợp nghỉ dưỡng.",
    ],

    location: {
      image: "/images/project5.png",
      content: [
        "Khu vực yên tĩnh.",
        "Xa trung tâm nhưng không khí tốt.",
        "Phù hợp nghỉ dưỡng.",
      ],
    },

    potential: {
      image: "/images/project5.png",
      content: [
        "Giá còn thấp.",
        "Tiềm năng tăng khi phát triển.",
        "Phù hợp đầu tư dài hạn.",
      ],
    },

    livingSpace: {
      image: "/images/project5.png",
      content: [
        "Nhiều cây xanh.",
        "Không gian thoáng.",
        "Môi trường sống tốt.",
      ],
    },

    salesPolicy: {
      image: "/images/project5.png",
      content: [
        "Ace Land mang đến nhiều ưu đãi hấp dẫn dành cho khách hàng mua nhà ở xã hội:",
        "Hỗ trợ vay vốn: Lên đến 70% giá trị căn hộ với lãi suất ưu đãi 4.8%/năm",
        "Thời gian vay: Tối đa 25 năm, linh hoạt phù hợp thu nhập",
        "Thanh toán linh hoạt: Thanh toán theo tiến độ xây dựng",
        "Ưu đãi đặt cọc sớm: Chiết khấu đến 2% cho khách hàng đặt cọc sớm",
        "Miễn phí quản lý: Miễn 1 năm phí quản lý tòa nhà",
        "Quà tặng: Tặng gói nội thất cơ bản trị giá 20 triệu đồng",
        "Liên hệ ngay để được tư vấn chi tiết và nhận báo giá mới nhất!",
      ],
    },

    images: [
      "/images/pic1.jpg",
      "/images/pic2.jpg",
      "/images/pic3.jpg",
      "/images/pic4.jpg",
      "/images/pic5.jpg",
    ],
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

export enum WorkType {
  Internship = "Thực tập sinh",
  FullTime = "Toàn thời gian",
  PartTime = "Bán thời gian",
  Contract = "Hợp đồng",
}

export const JOB_POSITIONS: JobPosition[] = [
  {
    id: 1,
    title: "Thực tập sinh Kinh doanh",
    workType: WorkType.Internship,
    quantity: 3,
    salary: "3 triệu - 5 triệu",
    location: "Hà Nội",
    deadline: "27/03/2026",
    contact: "0123456789",
    email: "hr@aceland.vn",
  },
  {
    id: 2,
    title: "Chuyên viên Kinh doanh Bất động sản",
    workType: WorkType.FullTime,
    quantity: 5,
    salary: "15 triệu - 30 triệu",
    location: "Hà Nội, TP.HCM",
    deadline: "15/04/2026",
    contact: "0123456789",
    email: "hr@aceland.vn",
  },
  {
    id: 3,
    title: "Chuyên viên Marketing Digital",
    workType: WorkType.FullTime,
    quantity: 2,
    salary: "12 triệu - 20 triệu",
    location: "Hà Nội",
    deadline: "10/04/2026",
    contact: "0123456789",
    email: "hr@aceland.vn",
  },
  {
    id: 4,
    title: "Thực tập sinh Marketing",
    workType: WorkType.Internship,
    quantity: 2,
    salary: "3 triệu - 4 triệu",
    location: "Hà Nội",
    deadline: "20/04/2026",
    contact: "0123456789",
    email: "hr@aceland.vn",
  },
  {
    id: 5,
    title: "Chuyên viên Pháp lý",
    workType: WorkType.FullTime,
    quantity: 1,
    salary: "18 triệu - 25 triệu",
    location: "Hà Nội",
    deadline: "30/04/2026",
    contact: "0123456789",
    email: "hr@aceland.vn",
  },
  {
    id: 6,
    title: "Trưởng phòng Kinh doanh",
    workType: WorkType.FullTime,
    quantity: 1,
    salary: "Thỏa thuận",
    location: "Hà Nội",
    deadline: "05/05/2026",
    contact: "0123456789",
    email: "hr@aceland.vn",
  },
];
