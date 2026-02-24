import IntroHero from "@/components/introduction/IntroHero";
import IntroContent from "@/components/introduction/IntroContent";
import IntroTimeline from "@/components/introduction/IntroTimeline";

const timelineData = [
  {
    year: "1911",
    content:
      "Thành lập tiền thân là Nhà thương Cống Vọng, điều trị bệnh truyền nhiễm.",
  },
  {
    year: "1935",
    content:
      "Đổi tên thành Bệnh viện Robin, mở rộng quy mô và nâng cấp cơ sở vật chất.",
  },
  {
    year: "1945",
    content: "Phục vụ công tác điều trị trong thời kỳ kháng chiến.",
  },
  {
    year: "1975",
    content: "Trở thành bệnh viện tuyến cuối khu vực phía Bắc.",
  },
  {
    year: "2006",
    content: "Được công nhận là bệnh viện đa khoa hạng đặc biệt.",
  },
  {
    year: "2016 đến nay",
    content:
      "Ứng dụng công nghệ cao và phát triển thành trung tâm y học hàng đầu Việt Nam.",
  },
];
const introContentData = {
  title: "Trí - Đức - Chuyên tâm",
  subtitle: "Vươn tầm Thế giới",
  image: "/images/banner/banner3.png",
  description: [
    "Bệnh viện là bệnh viện đa khoa hạng đặc biệt, giữ vai trò tuyến cuối trong hệ thống y tế quốc gia.",
    "Với hơn 100 năm hình thành và phát triển, bệnh viện không ngừng đổi mới và ứng dụng kỹ thuật cao.",
    "Đội ngũ chuyên gia đầu ngành cùng hệ thống trang thiết bị hiện đại đạt chuẩn quốc tế.",
  ],
};

export default function Page() {
  return (
    <>
      <IntroHero
        title="Giới thiệu"
        breadcrumb={["Trang chủ", "Giới thiệu"]}
        background="/images/banner/banner3.png"
      />
      <IntroContent {...introContentData} />
      <IntroTimeline data={timelineData} />
    </>
  );
}
