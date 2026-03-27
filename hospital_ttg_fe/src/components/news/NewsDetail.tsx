'use client'
import Image from "next/image";

export default function NewsDetail() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">
        Giám Đốc Bệnh viện
      </h1>

      <div className="flex items-center text-sm text-gray-500 gap-4 mb-6">
        <span>📅 24/07/2025</span>
        <span>👁 12.670 lượt xem</span>
        <span className="text-green-600 font-medium">Ban lãnh đạo bệnh viện</span>
      </div>

      <div className="flex justify-center mb-6">
        <Image
          src="/images/doctor/doctor2.jpg"
          alt="Giám đốc bệnh viện"
          width={400}
          height={500}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Phó Giáo sư, Tiến sĩ Đào Xuân Cơ hiện là Giám đốc Bệnh viện Bạch Mai...
        </p>
        <p>
          Trên cương vị Giám đốc, ông đã đưa ra nhiều chiến lược đột phá...
        </p>
      </div>
    </article>
  );
}