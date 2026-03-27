import GallerySection, {
  MediaItem,
} from "@/components/library/GallerySection";

const imageData: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/doctor/doctor2.jpg",
    title: "Doctor 1",
    createdAt: "2026-02-20",
  },
  {
    id: 2,
    type: "image",
    src: "/images/doctor/doctor2.jpg",
    title: "Doctor 2",
    createdAt: "2026-01-10",
  },
];

export default function ImagePage() {
  return <GallerySection data={imageData} />;
}