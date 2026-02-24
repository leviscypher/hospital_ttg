import Image from "next/image";

interface Props {
  title: string;
  subtitle?: string;
  description: string[];
  image: string;
  reverse?: boolean; // nếu muốn đổi vị trí ảnh trái / phải
}

export default function IntroContent({
  title,
  subtitle,
  description,
  image,
  reverse = false,
}: Props) {
  return (
    <section className="bg-[#f6f6f6] py-20">
      <div
        className={`max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT */}
        <div className={reverse ? "md:order-2" : ""}>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            {title}
          </h2>

          {subtitle && (
            <h3 className="text-xl font-medium text-gray-700 mb-6">
              {subtitle}
            </h3>
          )}

          {description.map((item, index) => (
            <p
              key={index}
              className="text-gray-700 leading-relaxed mb-4"
            >
              {item}
            </p>
          ))}
        </div>

        {/* IMAGE */}
        <div
          className={`relative h-[350px] rounded-2xl overflow-hidden shadow-xl ${
            reverse ? "md:order-1" : ""
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
