"use client";

import { useState } from "react";
import { NewsItem } from "@/types/news/news";
import NewsCard from "../Card/Card";
import Pagination from "../Pagination/Pagination";


interface Props {
  title: string;
  breadcrumb: { label: string; href?: string }[];
  data: NewsItem[];
  itemsPerPage?: number;
}

export default function NewsLayout({
  title,
  breadcrumb,
  data,
  itemsPerPage = 6,
}: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="w-full bg-gray-100">
      {/* HEADER */}
      <div className="bg-[#f4efe6] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {title}
          </h1>

          <div className="mt-4 text-sm text-gray-600 flex gap-2 flex-wrap">
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span>{item.label}</span>
                {index < breadcrumb.length - 1 && <span>|</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          ">
          {currentData.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}
