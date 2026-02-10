import Image from "next/image";
import type { Metadata } from "next";
import Carousel from "@/components/home/Carousel";
import QuickActionBar from "@/components/home/QuickActionBar";

export const metadata: Metadata = {
  title: "Trang chủ",
};
export default function Home() {
  return (
    <div className="home">
      <section className="relative">
        <Carousel></Carousel>
        <div className="p-4">
          <QuickActionBar />
        </div>
      </section>
    </div>
  );
}
