'use client'
import Image from "next/image";
import Link from "next/link";

export default function NewsSidebar() {
  return (
    <aside className="space-y-6">
      {/* Thông báo */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">
          Thông báo
        </h2>

        <ul className="space-y-3 text-sm">
          <li className="hover:text-green-600 cursor-pointer">
            <Link href={`/detail/1`} prefetch>Lịch khám, tư vấn theo yêu cầu</Link>
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            <Link href={`/detail/1`} prefetch>Lịch khám, tư vấn theo yêu cầu</Link>
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            <Link href={`/detail/1`} prefetch>Lịch khám, tư vấn theo yêu cầu</Link>
          </li>
        </ul>
      </div>

      {/* Tin tức mới nhất */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">
          Tin tức mới nhất
        </h2>

        <div className="space-y-4">
          <Link prefetch
            className="hover:text-green-600 cursor-pointer"
              href={`/detail/1`}>
            <div className="flex gap-3">
              <Image
                src="/images/doctor/doctor4.jpg"
                alt="news"
                width={80}
                height={60}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-medium ">
                  Hội nghị khoa học thường niên 2025
                </p>
                <span className="text-xs text-gray-500">
                  22/07/2025
                </span>
              </div>
            </div>
          </Link>
          <Link prefetch
            className="hover:text-green-600 cursor-pointer"
            href={`/detail/1`}>
            <div className="flex gap-3">
              <Image
                src="/images/doctor/doctor4.jpg"
                alt="news"
                width={80}
                height={60}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-medium ">
                  Hội nghị khoa học thường niên 2025
                </p>
                <span className="text-xs text-gray-500">
                  22/07/2025
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
}
