"use client";

import { useState } from "react";
import MediaCard from "./MediaCard";

export type MediaItem = {
  id: number;
  type: "image" | "youtube";
  src: string;
  title: string;
  createdAt: string;
};

type Props = {
  data: MediaItem[];
};

export default function GallerySection({ data }: Props) {
  const [filter, setFilter] = useState("all");

  const filteredData = data.filter((item) => {
    const now = new Date();
    const created = new Date(item.createdAt);
    const diffDays =
      (now.getTime() - created.getTime()) / (1000 * 3600 * 24);

    if (filter === "7days") return diffDays <= 7;
    if (filter === "30days") return diffDays <= 30;
    if (filter === "year")
      return created.getFullYear() === now.getFullYear();

    return true;
  });

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Filter */}
        <div className="flex flex-wrap gap-4 mb-10">
          {[
            { key: "all", label: "Tất cả" },
            { key: "7days", label: "7 ngày gần đây" },
            { key: "30days", label: "30 ngày" },
            { key: "year", label: "Năm nay" },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={`px-4 py-2 text-sm border transition ${
                filter === btn.key
                  ? "bg-black text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>

        {filteredData.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            Không có dữ liệu phù hợp
          </p>
        )}
      </div>
    </section>
  );
}