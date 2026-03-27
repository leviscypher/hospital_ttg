'use client'
import Image from "next/image";

interface NewsDetailProps {
  title: string;
  date: string;
  views: number;
  category: string;
  image: string;
  content: string[];
}

export default function NewsDetail(props: NewsDetailProps) {
  console.log("data",props);
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">{props.title}</h1>

      <div className="flex items-center text-sm text-gray-500 gap-4 mb-6">
        <span>📅 {props.date}</span>
        <span>👁 {props.views.toLocaleString()} lượt xem</span>
        <span className="text-green-600 font-medium">{props.category}</span>
      </div>

      <div className="flex justify-center mb-6">
        <Image
          src={props.image}
          alt={props.title}
          width={400}
          height={500}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        {props.content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </article>
  );
}