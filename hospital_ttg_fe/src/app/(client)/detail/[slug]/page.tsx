import NewsDetail from "@/components/news/NewsDetail";
import NewsSidebar from "@/components/news/NewsSidebar";

export default function DetailPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT - Nội dung tin tức */}
        <div className="lg:col-span-2">
          <NewsDetail />
        </div>

        {/* RIGHT - Sidebar */}
        <div className="lg:col-span-1">
          <NewsSidebar />
        </div>

      </div>
    </div>
  );
}