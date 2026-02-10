import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    // <!-- Header -->
    <header className="w-full">
      {/* <!-- Top Bar --> */}
      <div className="bg-green-500 py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-4">
          <a
            href="tel:0966101616"
            className="text-white text-sm border border-white px-4 py-1.5 rounded-full hover:bg-white hover:text-green-700 transition">
            Đường dây nóng: 0966101616
          </a>
          <a
            href="#"
            className="text-white text-sm border border-white px-4 py-1.5 rounded-full hover:bg-white hover:text-green-700 transition">
            Đặt lịch khám
          </a>
        </div>
      </div>

      {/* <!-- Main Header --> */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* <!-- Logo --> */}
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-800">
                  BỆNH VIỆN ĐA KHOA THẠCH THẤT
                </h4>
                <p className="text-sm text-green-600">
                  THACH THAT GENERAL HOSPITAL
                </p>
              </div>
            </div>

            {/* <!-- Slogan --> */}
            <div className="hidden lg:block">
              <div className="relative h-[60] w-[420]">
                <Image
                  src="/images/image_header/image_header.jpg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* <!-- Search --> */}
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Từ khóa tìm kiếm..."
                className="border border-gray-300 px-4 py-2 rounded-l-md w-64 focus:outline-none focus:border-green-600"
              />
              <button className="bg-green-700 text-white px-4 py-2 rounded-r-md hover:bg-green-800 transition">
                <FontAwesomeIcon icon={['fas', 'magnifying-glass']}  />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Navigation Menu --> */}
      <nav className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-8 py-4 text-sm font-medium">
            <li>
              <a
                href="#"
                className="text-green-700 hover:text-green-800 transition">
                Trang chủ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 transition">
                Giới thiệu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 transition">
                Cơ cấu tổ chức
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 transition">
                Đội ngũ bác sĩ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 transition">
                Đặt lịch khám
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 transition flex items-center gap-1">
                Tin tức
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 transition flex items-center gap-1">
                Dành cho bệnh nhân
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 transition flex items-center gap-1">
                Thạch Thất Family
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 transition">
                Thông tin tuyển dụng
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
