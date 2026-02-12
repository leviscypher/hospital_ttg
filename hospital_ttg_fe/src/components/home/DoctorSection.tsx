"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface Doctor {
  name: string;
  title: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    name: "PGS. TS. Nguyễn Thị Thu Hoài",
    title: "Viện trưởng Viện Tim mạch",
    image: "/images/doctor/doctor4.jpg",
  },
  {
    name: "PGS. TS. Phạm Thị Việt Dung",
    title: "Trưởng khoa Phẫu thuật Tạo hình",
    image: "/images/doctor/doctor4.jpg",
  },
  {
    name: "PGS.TS. Lê Công Định",
    title: "Trưởng khoa Tai Mũi Họng",
    image: "/images/doctor/doctor4.jpg",
  },
  {
    name: "BSCKII. Trần Thái Sơn",
    title: "Trưởng khoa Da liễu",
    image: "/images/doctor/doctor4.jpg",
  },
  {
    name: "BS. Nguyễn Văn A",
    title: "Khoa Nội tổng hợp",
    image: "/images/doctor/doctor4.jpg",
  },
];

export default function DoctorSlider() {
  const [visible, setVisible] = useState(4);
  const [current, setCurrent] = useState(4);
  const [transition, setTransition] = useState(true);
  const [paused, setPaused] = useState(false);

  // responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideWidth = 100 / visible;

  const sliderData = useMemo(() => {
    const clone = visible;
    return [
      ...doctors.slice(-clone),
      ...doctors,
      ...doctors.slice(0, clone),
    ];
  }, [visible]);

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () => setCurrent((prev) => prev - 1);

  // auto slide
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [paused]);

  // loop vô hạn
  useEffect(() => {
    const total = doctors.length;

    if (current >= total + visible) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(visible);
      }, 500);
    }

    if (current < visible) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(total + visible - 1);
      }, 500);
    }
  }, [current, visible]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div>
          <p className="text-green-600 font-semibold text-sm uppercase">
            Bác sĩ
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Đội ngũ chuyên gia
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            Hơn 1.000 bác sĩ và hơn 4.300 nhân viên y tế tận tâm phục vụ.
          </p>
        </div>

        <button className="px-5 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition">
          Tìm bác sĩ
        </button>
      </div>

      {/* Slider */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 cursor-pointer"
        >
          ❮
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 cursor-pointer" 
        >
          ❯
        </button>

        <div
          className={`flex ${
            transition ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${current * slideWidth}%)`,
          }}
        >
          {sliderData.map((doc, i) => (
            <div
              key={i}
              style={{ width: `${slideWidth}%` }}
              className="px-3 shrink-0"
            >
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative w-full h-[320px]">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4 text-center">
                  <p className="text-gray-600 text-sm">{doc.title}</p>
                  <h3 className="font-semibold text-lg mt-1">
                    {doc.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
