// ================= TYPES =================
export interface IntroContent {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string[];
}

export interface Leader {
  id: number;
  name: string;
  title: string;
  image: string;
}

export interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  category: string;
  views: number;
  content: string[];
}

// ================= DATA =================

// 🔹 Intro
export const introContentData: IntroContent = {
  id: 1,
  title: "Trí - Đức - Chuyên tâm",
  subtitle: "Vươn tầm Thế giới",
  image: "/images/banner/banner3.png",
  description: [
    "Bệnh viện là bệnh viện đa khoa hạng đặc biệt, giữ vai trò tuyến cuối trong hệ thống y tế quốc gia.",
    "Với hơn 100 năm hình thành và phát triển, bệnh viện không ngừng đổi mới và ứng dụng kỹ thuật cao.",
    "Đội ngũ chuyên gia đầu ngành cùng hệ thống trang thiết bị hiện đại đạt chuẩn quốc tế.",
  ],
};

// 🔹 Leaders
export const leaders = {
  director: {
    id: 2,
    name: "Bà Nguyễn Văn A",
    title: "Giám đốc bệnh viện",
    image: "/images/doctor/doctor7.jpg",
  } as Leader,

  viceDirectors: [
    {
      id: 3,
      name: "Ông Nguyễn Văn B",
      title: "Phó giám đốc bệnh viện",
      image: "/images/doctor/doctor7.jpg",
    },
  ] as Leader[],
};

// 🔹 News
export const newsData: NewsItem[] = [
  {
    id: 4,
    title: "Đừng để thủy đậu trở thành 'bản án' với người mắc bệnh nền",
    image: "/images/doctor/doctor2.jpg",
    date: "05/02/2026",
    category: "Tin y tế",
    views: 12670,
    content: [
      "Phó Giáo sư, Tiến sĩ ...",
      "Trên cương vị ...",
    ],
  },
  {
    id: 5,
    title: "Viêm màng não do não mô cầu...",
    image: "/images/doctor/doctor2.jpg",
    date: "15/01/2026",
    category: "Tin y tế",
    views: 8421,
    content: [
      "Đây là bệnh nguy hiểm...",
      "Cần tiêm phòng...",
    ],
  },
];
