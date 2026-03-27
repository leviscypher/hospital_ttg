'use client'
import { MediaItem } from "./GallerySection";

export default function MediaCard({ item }: { item: MediaItem }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg">
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <iframe
            src={item.src}
            title={item.title}
            className="w-full h-[250px] rounded-lg"
            allowFullScreen
          />
        )}
      </div>

      <div className="mt-3">
        <p className="text-sm font-medium">{item.title}</p>
        <p className="text-xs text-gray-400">
          {new Date(item.createdAt).toLocaleDateString("vi-VN")}
        </p>
      </div>
    </div>
  );
}