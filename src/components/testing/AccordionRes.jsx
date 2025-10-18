import { useState, Children, cloneElement } from "react";

function AccordionRes({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  // Clone each child and give it props it needs
  const items = Children.map(children, (child, index) =>
    cloneElement(child, {
      isOpen: openIndex === index,
      onClick: () => setOpenIndex(openIndex === index ? null : index),
    })
  );

  return <div className="w-screen overflow-x-hidden">{items}</div>;
}

// Subcomponent
function AccordionItem({ title, children, isOpen, onClick, bgColor = "rgba(30,30,30,0.8)" }) {
  return (
    <div
      className="overflow-hidden backdrop-blur-sm transition-all"
      style={{ backgroundColor: bgColor }}
    >
      <button
        className="w-full flex justify-between items-center py-6 px-8 text-left"
        onClick={onClick}
      >
        <span className="text-3xl md:text-5xl lg:text-7xl font-bold text-white">{title}</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="px-8 pb-8 text-white">{children}</div>
      </div>
    </div>
  );
}

AccordionRes.Item = AccordionItem;

export default AccordionRes;
