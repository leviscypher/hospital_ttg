"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { title: "Trang chủ", href: "/" },
  {
    title: "Giới thiệu",
    children: [
      {
        title: "Giới thiệu chung",
        href: "/introduce/general_introduction",
      },
      { title: "Ban lãnh đạo", href: "/introduce/management" },
    ],
  },
  {
    title: "Tin tức",
    children: [
      { title: "Tin nội bộ", href: "#" },
      { title: "Câu chuyện bệnh nhân", href: "#" },
    ],
  },
  {
    title: "Thông tin hoạt động",
    children: [
      { title: "Hoạt động chuyên môn", href: "#" },
      { title: "Hoạt động Quản lý Chất lượng", href: "#" },
      { title: "Hoạt động Công tác xã hội", href: "#" },
    ],
  },
  {
    title: "Dịch vụ y khoa",
    children: [
      { title: "Giá DVKTYT", href: "#" },
      { title: "Dịch vụ tư vấn tâm lý", href: "#" },
      { title: "Chụp X-quang", href: "#" },
      { title: "Khám sức khỏe", href: "#" },
    ],
  },
  {
    title: "Thư viện",
    children: [
      { title: "Ảnh", href: "#" },
      { title: "Video", href: "#" },
    ],
  },
  {
    title: "Tuyển dụng & Thông báo",
    children: [
      { title: "Tuyển dụng", href: "#" },
      { title: "Thông báo", href: "#" },
    ],
  },
  { title: "Liên hệ", href: "#" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSub, setOpenSub] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSub(openSub === index ? null : index);
  };
  return (
    <header className="w-full relative z-50">
      {/* TOP BAR */}
      <div className="bg-green-600 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-end gap-3 px-4 py-2">
          <a
            href="tel:0966101616"
            className="border border-white px-3 py-1 rounded-full hover:bg-white hover:text-green-600 transition">
            Đường dây nóng: 0966101616
          </a>
          <a
            href="#"
            className="border border-white px-3 py-1 rounded-full hover:bg-white hover:text-green-600 transition">
            Đặt lịch khám
          </a>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo.jpg"
              alt="Logo"
              width={60}
              height={60}
            />
            <div>
              <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                BỆNH VIỆN ĐA KHOA THẠCH THẤT
              </h4>
              <p className="hidden sm:block text-green-600 text-xs">
                THACH THAT GENERAL HOSPITAL
              </p>
            </div>
          </div>
          <div className="hidden lg:block flex-1 px-6">
            <div className="relative h-[60px] w-full">
              <Image
                src="/images/image_header/image_header.jpg"
                alt="Slogan"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* SEARCH (Desktop only) */}
          <div className="hidden lg:flex">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="border px-3 py-2 rounded-l-md focus:outline-none focus:border-green-600"
            />
            <button className="bg-green-600 text-white px-4 rounded-r-md hover:bg-green-700 transition">
              Tìm
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpenMenu(true)}
            className="lg:hidden text-2xl text-green-600">
            ☰
          </button>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="hidden lg:block bg-white ">
        <ul className="max-w-7xl mx-auto flex justify-center gap-8 py-4 text-[15px] font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item.href || "#"}
                className="text-dark-700 text-[17px] hover:text-green-600 transition flex items-center gap-1">
                {item.title}
                {item.children && (
                  <span className="text-xs transition-transform group-hover:rotate-180">
                    ▾
                  </span>
                )}
              </Link>

              {/* SUBMENU */}
              {item.children && (
                <div
                  className="
      absolute left-0 top-full pt-3
      pointer-events-none
      opacity-0 translate-y-2
      transition-all duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]
      will-change-transform
      group-hover:opacity-100
      group-hover:translate-y-0
      group-hover:pointer-events-auto
    ">
                  <ul className="bg-white text-dark-700 text-[17px] shadow-xl rounded-xl min-w-[230px] border border-gray-100 py-2">
                    {item.children.map((sub, i) => (
                      <li key={i}>
                        <Link
                          href={sub.href}
                          className="block px-5 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200">
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-semibold text-green-600">Menu</span>
          <button onClick={() => setOpenMenu(false)}>✕</button>
        </div>

        <ul className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div className="flex justify-between items-center">
                <Link
                  href={item.href || "#"}
                  className="block py-2 text-gray-800"
                  onClick={() =>
                    !item.children && setOpenMenu(false)
                  }>
                  {item.title}
                </Link>

                {item.children && (
                  <button
                    onClick={() => toggleSubMenu(index)}
                    className={`transition-transform duration-300 ${
                      openSub === index ? "rotate-180" : ""
                    }`}>
                    ▾
                  </button>
                )}
              </div>

              {/* SUBMENU ACCORDION */}
              {item.children && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSub === index ? "max-h-96 mt-2" : "max-h-0"
                  }`}>
                  <ul className="pl-4 space-y-2">
                    {item.children.map((sub, i) => (
                      <li key={i}>
                        <Link
                          href={sub.href}
                          className="block py-1 text-gray-600 hover:text-green-600"
                          onClick={() => setOpenMenu(false)}>
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* OVERLAY */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenMenu(false)}
        />
      )}
    </header>
  );
}
