"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import '@/styles/css/header.css'

const menuItems = [
  { title: "Trang chủ", href: "/" },
  {
    title: "Giới thiệu",
    children: [
      { title: "Lịch sử hình thành", href: "#" },
      { title: "Tầm nhìn - Sứ mệnh", href: "#" },
      { title: "Cơ sở vật chất", href: "#" },
    ],
  },
  {
    title: "Cơ cấu tổ chức",
    children: [
      { title: "Ban giám đốc", href: "#" },
      { title: "Các khoa phòng", href: "#" },
    ],
  },
  { title: "Đội ngũ bác sĩ", href: "#" },
  {
    title: "Dịch vụ",
    children: [
      { title: "Khám tổng quát", href: "#" },
      { title: "Khám chuyên khoa", href: "#" },
      { title: "Xét nghiệm", href: "#" },
    ],
  },
  { title: "Tin tức", href: "#" },
  { title: "Tuyển dụng", href: "#" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full relative z-50">
      {/* TOP BAR */}
      <div className="bg-green-600 w-full">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end gap-3 flex-wrap">
          <a
            href="tel:0966101616"
            className="text-white text-xs sm:text-sm border border-white px-3 py-1 rounded-full hover:bg-white hover:text-green-700 transition">
            Đường dây nóng: 0966101616
          </a>
          <a
            href="#"
            className="text-white text-xs sm:text-sm border border-white px-3 py-1 rounded-full hover:bg-white hover:text-green-700 transition">
            Đặt lịch khám
          </a>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="bg-white shadow-sm w-full">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* LOGO + NAME (luôn hiện cả mobile) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative h-11 w-11 sm:h-14 sm:w-14 flex-shrink-0">
              <Image
                src="/images/logo/logo.jpg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-xs sm:text-base font-bold text-gray-800 leading-tight">
                BỆNH VIỆN ĐA KHOA
                <br className="sm:hidden" />
                THẠCH THẤT
              </h4>
              <p className="hidden sm:block text-xs sm:text-sm text-green-600">
                THACH THAT GENERAL HOSPITAL
              </p>
            </div>
          </div>

          {/* SLOGAN (Desktop only) */}
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
          <div className="hidden lg:flex items-center">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="border border-gray-300 px-3 py-2 rounded-l-md w-56 focus:outline-none focus:border-green-600"
            />
            <button className="bg-green-700 text-white px-4 py-2 rounded-r-md hover:bg-green-800 transition">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

          {/* MENU ICON (Mobile + Tablet) */}
          <button
            className="lg:hidden text-green-700 text-2xl ml-2"
            onClick={() => setOpenMenu(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <nav className="nav">
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <Link href={item.href || "#"} className="menu-link">
                {item.title}
              </Link>

              {item.children && (
                <div className="submenu">
                  <ul>
                    {item.children.map((sub, i) => (
                      <li key={i}>
                        <Link
                          href={sub.href}
                          className="submenu-link">
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

      {/* MOBILE / TABLET SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Header menu */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-semibold text-green-700 text-lg">
            Menu
          </span>
          <button onClick={() => setOpenMenu(false)}>
            <FontAwesomeIcon icon={faXmark} className="text-xl" />
          </button>
        </div>

        {/* SEARCH in menu (Mobile + Tablet) */}
        <div className="p-4 border-b">
          <div className="flex">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="border border-gray-300 px-3 py-2 rounded-l-md w-full focus:outline-none focus:border-green-600"
            />
            <button className="bg-green-700 text-white px-4 py-2 rounded-r-md">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>

        {/* Menu items */}
        <nav className="hidden lg:block bg-white border-t border-gray-200 w-full">
          <ul className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-6 py-3 text-sm font-medium">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  href={item.href || "#"}
                  className="text-gray-700 hover:text-green-700 transition flex items-center gap-1">
                  {item.title}
                  {item.children && (
                    <span className="text-xs">▾</span>
                  )}
                </Link>

                {/* SUB MENU */}
                {item.children && (
                  <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                    {item.children.map((sub, i) => (
                      <li key={i}>
                        <Link
                          href={sub.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition">
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
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
