import { Metadata } from "next";
import LeadershipSection from "@/components/LeadershipSection/LeadershipSection";
import { Leader } from "@/types/LeadershipSection/LeadershipSectionProps";
import Intro from "@/components/shared/Intro";

export const metadata: Metadata = {
  title: "Cơ cấu tổ chức",
};
export default function Page() {
  const director: Leader = {
    name: "PGS. TS. Đào Xuân Cơ",
    title: "Giám đốc bệnh viện",
    image: "/images/doctor/doctor2.jpg",
  };

  const viceDirectors: Leader[] = [
    {
      name: "PGS. TS. Vũ Văn Giáp",
      title: "Phó giám đốc bệnh viện",
      image: "/images/doctor/doctor2.jpg",
    },
    {
      name: "PGS. TS. Nguyễn Tuấn Tùng",
      title: "Phó giám đốc bệnh viện",
      image: "/images/doctor/doctor2.jpg",
    },
  ];

  return (
    <div>
      <Intro
        title="Cơ cấu tổ chức"
        breadcrumb={["Trang chủ", "Cơ cấu tổ chức"]}
      />
      <LeadershipSection
        director={director}
        viceDirectors={viceDirectors}
      />
    </div>
  );
}
