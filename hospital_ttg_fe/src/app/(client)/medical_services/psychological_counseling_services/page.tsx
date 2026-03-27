import NewsLayout from "@/components/news/news";
import { NewsItem } from "@/types/news/news";

const data: NewsItem[] = [
  {
    id: 3,
    title:
      "Đừng để thủy đậu trở thành 'bản án' với người mắc bệnh nền",
    image: "/images/doctor/doctor2.jpg",
    date: "05/02/2026",
    category: "Tin y tế",
    views: 12670,
    content: ["Phó Giáo sư, Tiến sĩ ...", "Trên cương vị ..."],
  },
];

export default function Page() {
  return (
    <NewsLayout
      title="Giá dịch vụ kỹ thuật y tế"
      breadcrumb={[
        { label: "Trang chủ" },
        { label: "Giá dịch vụ kỹ thuật y tế" },
      ]}
      data={data}
      itemsPerPage={6}
    />
  );
}
