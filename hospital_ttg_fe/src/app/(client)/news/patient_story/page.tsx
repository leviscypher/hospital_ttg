import NewsLayout from "@/components/news/news";
import { NewsItem } from "@/types/news/news";

const data: NewsItem[] = [
  {
    id: "1",
    title: "Đừng để thủy đậu trở thành 'bản án' với người mắc bệnh nền",
    image: "/images/doctor/doctor2.jpg",
    date: "05/02/2026",
    href: "/news/1",
  }
];

export default function Page() {
  return (
    <NewsLayout
      title="Câu chuyện bệnh nhân"
      breadcrumb={[
        { label: "Trang chủ" },
        { label: "Câu chuyện bệnh nhân" },
      ]}
      data={data}
      itemsPerPage={6}
    />
  );
}
