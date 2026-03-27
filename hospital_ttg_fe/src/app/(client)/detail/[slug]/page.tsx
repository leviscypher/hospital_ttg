"use client";
import NewsDetail from "@/components/news/NewsDetail";
import NewsSidebar from "@/components/news/NewsSidebar";
import { newsData } from "@/types/index";
import { notFound, useParams } from "next/navigation";
export default function DetailPage() {
  const params = useParams();
  const id = Number(params.id); // ✅ ép kiểu number

  const news = newsData.find((item) => item.id === id);
console.log("news",news)
  if (!news) return notFound();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT - Nội dung tin tức */}
        <div className="lg:col-span-2">
          <NewsDetail
            title={news.title}
            date={news.date}
            views={news.views}
            category={news.category}
            image={news.image}
            content={news.content}
          />
        </div>

        {/* RIGHT - Sidebar */}
        <div className="lg:col-span-1">
          <NewsSidebar />
        </div>
      </div>
    </div>
  );
}
