"use client";

import React from "react";

interface ActionItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

/* ================= ICONS ================= */

const PhoneIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ChatIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ClipboardIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" ry="1" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="12" y2="16" />
  </svg>
);

/* ================= DATA ================= */

const actions: ActionItem[] = [
  {
    icon: <PhoneIcon />,
    title: "Gọi tổng đài",
    description: "Đặt lịch khám nhanh qua tổng đài 1900.888.866",
    href: "tel:1900888866",
  },
  {
    icon: <CalendarIcon />,
    title: "Đặt lịch khám",
    description: "Đặt lịch khám online tại website",
    href: "#dat-lich-kham",
  },
  {
    icon: <ChatIcon />,
    title: "Hỏi đáp chuyên gia",
    description: "Giải đáp thắc mắc về sức khỏe",
    href: "#hoi-dap",
  },
  {
    icon: <ClipboardIcon />,
    title: "Kết quả xét nghiệm",
    description: "Tra cứu kết quả xét nghiệm của bạn",
    href: "#ket-qua-xet-nghiem",
  },
];

/* ================= COMPONENT ================= */

const QuickActionBar = () => {
  return (
    <div className="w-full max-w-7xl mx-auto -mt-12 sm:-mt-16 relative z-20 px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-green-100 p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, i) => (
            <a
              key={i}
              href={action.href ?? "#"}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white hover:bg-green-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span className="text-green-600 group-hover:text-green-700 transition-transform duration-300 group-hover:scale-110">
                {action.icon}
              </span>
              <div>
                <p className="text-base font-semibold text-gray-800 group-hover:text-green-700">
                  {action.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {action.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActionBar;
