import Image from "next/image";
export default function Footer() {
  return (
    // <!-- Footer -->
    <footer className="bg-[#008046] text-white">
      {/* <!-- Top Yellow Bar --> */}
      <div className="bg-[#ffc52c] text-gray-800 py-3">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold">
            <i className="fas fa-phone-alt mr-2"></i>
            Tổng đài <span className="font-bold">1900.888.866</span>
          </p>
        </div>
      </div>

      {/* <!-- Main Footer Content --> */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Column 1: Hospital Info --> */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* <img src="logo.png" alt="Logo" className="h-20 w-20 bg-white rounded-full p-2" /> */}
              <div className="relative h-16 w-16">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="Logo"
                  fill
                  className="h-20 w-20 bg-white rounded-full p-2"
                />
              </div>
              <div>
                <h4 className="text-base font-bold">
                  BỆNH VIỆN ĐA KHOA THẠCH THẤT
                </h4>
                <p className="text-sm text-green-200">
                  THACH THAT GENERAL HOSPITAL
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-yellow-400 mt-1"></i>
                <p>
                  <span className="font-semibold">Địa chỉ:</span> Số
                  79, đường 420, xã Kim Quan, huyện Thạch Thất, TP.Hà
                  Nội
                </p>
              </div>

              <div className="flex items-start gap-2">
                <i className="fas fa-phone text-yellow-400 mt-1"></i>
                <p>
                  <span className="font-semibold">Tổng đài:</span> 024
                  33842217
                </p>
              </div>

              <div className="flex items-start gap-2">
                <i className="fas fa-burn text-yellow-400 mt-1"></i>
                <p>
                  <span className="font-semibold">Hotline:</span>{" "}
                  0966101616
                </p>
              </div>

              <div className="flex items-start gap-2">
                <i className="fas fa-clock text-yellow-400 mt-1"></i>
                <div>
                  <p className="font-semibold mb-2">Lịch làm việc:</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-green-200">
                      Khoa Khám bệnh theo yêu cầu:
                    </p>
                    <ul className="list-disc list-inside ml-2 text-green-200">
                      <li>Thứ 2 - Thứ 6: 06:00 - 16:30</li>
                    </ul>
                    <p className="text-green-200 mt-2">
                      Khoa Khám bệnh: Thứ 2 — Thứ 6
                    </p>
                    <ul className="list-disc list-inside ml-2 text-green-200">
                      <li>Sáng: 07:00 - 12:00</li>
                      <li>Chiều: 13:30 - 16:30</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Column 2: Quick Links --> */}
          <div>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center justify-between border border-white/30 rounded-lg px-4 py-3 hover:bg-green-600 transition group">
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone-alt text-yellow-400"></i>
                  <span className="font-medium">Gọi tổng đài</span>
                </div>
                <i className="fas fa-arrow-right text-yellow-400 group-hover:translate-x-1 transition"></i>
              </a>

              <a
                href="#"
                className="flex items-center justify-between border border-white/30 rounded-lg px-4 py-3 hover:bg-green-600 transition group">
                <div className="flex items-center gap-3">
                  <i className="fas fa-calendar-check text-yellow-400"></i>
                  <span className="font-medium">Đặt lịch khám</span>
                </div>
                <i className="fas fa-arrow-right text-yellow-400 group-hover:translate-x-1 transition"></i>
              </a>

              <a
                href="#"
                className="flex items-center justify-between border border-white/30 rounded-lg px-4 py-3 hover:bg-green-600 transition group">
                <div className="flex items-center gap-3">
                  <i className="fas fa-user-md text-yellow-400"></i>
                  <span className="font-medium">
                    Hỏi đáp cùng chuyên gia
                  </span>
                </div>
                <i className="fas fa-arrow-right text-yellow-400 group-hover:translate-x-1 transition"></i>
              </a>

              <a
                href="#"
                className="flex items-center justify-between border border-white/30 rounded-lg px-4 py-3 hover:bg-green-600 transition group">
                <div className="flex items-center gap-3">
                  <i className="fas fa-search-plus text-yellow-400"></i>
                  <span className="font-medium">
                    Tra cứu kết quả xét nghiệm
                  </span>
                </div>
                <i className="fas fa-arrow-right text-yellow-400 group-hover:translate-x-1 transition"></i>
              </a>
            </div>

            {/* <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition">
                <i className="fab fa-youtube"></i>
              </a>
            </div> */}

            {/* <div className="flex items-center gap-3 mt-6">
              <img
                src="https://via.placeholder.com/100x50/4169E1/FFFFFF?text=BỘ+THÔNG+BÁO"
                alt="Bộ thông báo"
                className="h-12"
              />
              <img
                src="https://via.placeholder.com/100x50/000000/FFFFFF?text=DMCA+PROTECTED"
                alt="DMCA"
                className="h-12"
              />
            </div> */}
          </div>

          <div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Về Bệnh viện đa khoa Thạch Thất
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Đơn vị chuyên khoa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Đội ngũ bác sĩ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Tin hoạt động bệnh viện
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Tin mới nhất
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-green-200">
            Copyright © 2026 - Bản quyền thuộc về Bệnh viện đa khoa Thạch Thất 
          </p>
        </div>
      </div>
    </footer>
  );
}
