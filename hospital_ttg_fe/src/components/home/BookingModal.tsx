"use client";

import { useMemo } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: Props) {
  // Lấy ngày hiện tại format yyyy-mm-dd
  const today = useMemo(() => {
    const now = new Date();
    return now.toISOString().split("T")[0];
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg mx-4 p-8 animate-fadeIn">
        
        <h3 className="text-2xl font-bold mb-2">Đặt lịch khám</h3>
        <p className="text-gray-500 text-sm mb-6">
          Điền thông tin bên dưới, chúng tôi sẽ xác nhận qua điện thoại.
        </p>

        <div className="space-y-4">

          <div>
            <label className="text-sm text-gray-600">Họ và tên</label>
            <input
              type="text"
              placeholder="Nguyễn Văn A"
              className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Số điện thoại</label>
              <input
                type="text"
                placeholder="0912 345 678"
                className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Ngày sinh</label>
              <input
                type="date"
                className="w-full border rounded-xl p-3 mt-1 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
          </div>

          {/* Ngày khám - không cho chọn quá khứ */}
          <div className="w-full">
            <label className="text-sm text-gray-600">Ngày khám</label>
            <input
              type="date"
              min={today}
              className="border rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none w-full mt-1"
            />
          </div>

          <div>
            <textarea
              placeholder="Mô tả triệu chứng (không bắt buộc)"
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl font-semibold transition cursor-pointer">
            Đặt lịch ngay
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
    </div>
  );
}