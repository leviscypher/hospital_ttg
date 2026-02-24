interface Props {
  title: string;
  breadcrumb: string[];
}

export default function IntroHero({ title, breadcrumb }: Props) {
  return (
    <section className="relative h-[300px] md:h-[180px] w-full border-t-[1px] border-zinc-400 border-b">
      <div className="absolute inset-0 bg-white" />

      <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 text-black">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <div className="mt-4 text-sm opacity-90">
          {breadcrumb.join("  |  ")}
        </div>
      </div>
    </section>
  );
}
