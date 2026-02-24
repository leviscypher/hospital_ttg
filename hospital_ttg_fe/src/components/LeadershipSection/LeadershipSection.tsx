"use client";

import { Leader } from "@/types/LeadershipSection/LeadershipSectionProps";
import Image from "next/image";

interface LeadershipSectionProps {
  director: Leader;
  viceDirectors: Leader[];
}

export default function LeadershipSection({
  director,
  viceDirectors,
}: LeadershipSectionProps) {
  return (
    <section className="relative bg-green-500 py-14 md:py-20 overflow-hidden mb-[150px]">
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="text-center group">
            <div className="relative w-[220px] sm:w-[260px] md:w-[320px] h-[320px] sm:h-[380px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl transition duration-300 group-hover:-translate-y-2">
              <Image
                src={director.image}
                alt={director.name}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-white mt-4 text-xs sm:text-sm opacity-90">
              {director.title}
            </p>
            <h3 className="text-white font-semibold text-sm sm:text-base">
              {director.name}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {viceDirectors.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-[200px] sm:w-[240px] md:w-[280px] h-[280px] sm:h-[320px] md:h-[380px] mx-auto rounded-3xl overflow-hidden shadow-xl transition duration-300 group-hover:-translate-y-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-white mt-4 text-xs sm:text-sm opacity-90">
                {item.title}
              </p>
              <h3 className="text-white font-semibold text-sm sm:text-base">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
