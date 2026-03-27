import GallerySection, {
  MediaItem,
} from "@/components/library/GallerySection";

const videoData: MediaItem[] = [
  {
    id: 1,
    type: "youtube",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Hospital Introduction",
    createdAt: "2026-02-15",
  },
  {
    id: 2,
    type: "youtube",
    src: "https://www.youtube.com/embed/ysz5S6PUM-U",
    title: "Medical Event",
    createdAt: "2026-01-05",
  },
];

export default function VideoPage() {
  return <GallerySection data={videoData} />;
}