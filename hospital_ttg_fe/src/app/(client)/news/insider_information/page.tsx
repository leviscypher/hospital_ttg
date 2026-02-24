import NewsLayout from "@/components/news/news";
import { NewsItem } from "@/types/news/news";

const data: NewsItem[] = [
  {
    id: "1",
    title: "Đừng để thủy đậu trở thành 'bản án' với người mắc bệnh nền",
    image: "/images/doctor/doctor2.jpg",
    date: "05/02/2026",
    href: "/news/1",
  },
  {
    id: "2",
    title:
      "Viêm màng não do não mô cầu: Căn bệnh nguy hiểm, tỷ lệ tử vong cao",
    image: "/images/doctor/doctor2.jpg",
    date: "15/01/2026",
    href: "/news/2",
  },
  {
    id: "3",
    title:
      "Sốt xuất huyết Dengue: Hiểu đúng để chủ động phòng bệnh và bảo vệ sức khỏe",
    image: "/images/doctor/doctor2.jpg",
    date: "14/01/2026",
    href: "/news/3",
  },
  {
    id: "4",
    title: "Tiêm chủng đúng lịch – bảo vệ trẻ toàn diện",
    image: "/images/doctor/doctor2.jpg",
    date: "10/01/2026",
    href: "/news/4",
  },
  {
    id: "5",
    title: "Vắc xin HPV – phòng ngừa ung thư cổ tử cung",
    image: "/images/doctor/doctor2.jpg",
    date: "08/01/2026",
    href: "/news/5",
  },
  {
    id: "6",
    title: "Tư vấn trước tiêm – những điều cần lưu ý",
    image: "/images/doctor/doctor2.jpg",
    date: "05/01/2026",
    href: "/news/6",
  },
  {
    id: "7",
    title: "Vắc xin cúm mùa – có nên tiêm hằng năm?",
    image: "/images/doctor/doctor2.jpg",
    date: "01/01/2026",
    href: "/news/7",
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
