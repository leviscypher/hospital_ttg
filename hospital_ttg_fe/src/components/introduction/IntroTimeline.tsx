interface TimelineItem {
  year: string;
  content: string;
}

interface Props {
  data: TimelineItem[];
}

export default function IntroTimeline({ data }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-green-700 mb-20">
          105 năm hình thành và phát triển
        </h2>

        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-green-600" />

          <div className="space-y-20">
            {data.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 w-5 h-5 bg-green-600 rounded-full border-4 border-white shadow-lg" />

                  <div
                    className={`md:w-1/2 ${
                      isLeft
                        ? "md:pr-14 text-right"
                        : "md:pl-14 text-left"
                    }`}
                  >
                    <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                      <h3 className="text-lg font-bold text-green-700">
                        {item.year}
                      </h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
