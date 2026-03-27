import { Metadata } from "next";
import LeadershipSection from "@/components/LeadershipSection/LeadershipSection";
import { Leader } from "@/types/LeadershipSection/LeadershipSectionProps";
import Intro from "@/components/shared/Intro";

export const metadata: Metadata = {
  title: "Cơ cấu tổ chức",
};
export default function Page() {
  const director: Leader = {
    name: "Bà Nguyễn Văn A",
    title: "Giám đốc bệnh viện",
    image: "/images/doctor/doctor7.jpg",
  };

  const viceDirectors: Leader[] = [
    {
      name: "Ông Nguyễn Văn B",
      title: "Phó giám đốc bệnh viện",
      image: "/images/doctor/doctor7.jpg",
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
