import NewsLayout from "@/components/news/news";
import { NewsItem } from "@/types/news/news";

const data: NewsItem[] = [
  {
    id: 3,
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
    id: 4,
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

export default function Page() {
  return (
    <NewsLayout
      title="Tin nội bộ"
      breadcrumb={[
        { label: "Trang chủ" },
        { label: "Tin nội bộ" },
      ]}
      data={data}
      itemsPerPage={6}
    />
  );
}
