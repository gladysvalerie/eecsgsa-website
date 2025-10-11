import { useState } from "react";
import testImg from "../../assets/test.JPG";
import fuImg from "../../assets/fu.png";

const items = [
  { image: testImg, header: "Header 1", text: "Description 1" },
  { image: fuImg, header: "Header 2", text: "Description 2" },
  { image: testImg, header: "Header 3", text: "Description 3" },
  { image: testImg, header: "Header 1", text: "Description 1" },
  { image: testImg, header: "Header 1", text: "Description 1" },
  { image: testImg, header: "Header 1", text: "Description 1" },
  { image: testImg, header: "Header 1", text: "Description 1" },
];

export default function Accordion() {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="flex w-full h-[500px] overflow-hidden p-6 gap-2 rounded-[36px]">
      {items.map((item, index) => {
        const isActive = active === index;
        const grow = active === null ? 1 : isActive ? 3 : 1; // active expands, others shrink but fill
        return (
          <article
            key={index}
            onClick={() => handleToggle(index)}
            style={{ flexGrow: grow }}
            className={`relative overflow-hidden flex items-center justify-center transition-all duration-700 ease-in-out rounded-[36px]
              ${isActive ? "opacity-100" : "opacity-70 hover:opacity-90"}
              bg-gray-800 cursor-pointer
            `}
          >
            <img
              src={item.image}
              alt={item.header}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] object-cover grayscale-[60%] transition duration-700 z-0"
            />

            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-4 px-5 py-8 transition-all duration-500
                bg-gradient-to-b from-black/20 to-black/80 z-10
                ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
            >
              <div className="flex flex-col text-white text-center">
                <h2 className="text-lg font-semibold">{item.header}</h2>
                <p className="text-sm opacity-90">{item.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
