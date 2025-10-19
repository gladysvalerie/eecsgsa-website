import { useState } from "react";
import { orientation, orientation1, networking241, gradparty24, welpar1, welpar2 } from "@/assets";

const items = [
  { image: welpar1, header: "Inspiring Minds", text: "Connecting global EECS students through innovation, collaboration, and community." },
  { image: orientation1, header: "Beyond Circuits and Code", text: "We’re a collective of dreamers, builders, and thinkers shaping the future together." },
  { image: networking241, header: "United in Innovation", text: "Bringing together diverse minds to create, learn, and grow as one EECS community." },
  { image: gradparty24, header: "The Pulse of EECS", text: "A vibrant network of thinkers, makers, and leaders shaping what comes next." },
  { image: welpar2, header: "Tech Meets Humanity", text: "We believe innovation shines brightest when it’s powered by empathy and shared purpose." },
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
