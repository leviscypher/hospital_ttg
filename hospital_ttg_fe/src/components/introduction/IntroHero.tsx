import Image from "next/image";

interface Props {
  title: string;
  breadcrumb: string[];
  background: string;
}

export default function IntroHero({
  title,
  breadcrumb,
  background,
}: Props) {
  return (
    <section className="relative h-[300px] md:h-[312px] w-full">
      <Image
        src={background}
        alt={title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <div className="mt-4 text-sm opacity-90">
          {breadcrumb.join("  |  ")}
        </div>
      </div>
    </section>
  );
}
