import { useState } from "react";

export default function BigSectionToggle() {
  const [showSection, setShowSection] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {/* Toggle Button */}
      <button
        onClick={() => setShowSection(!showSection)}
        className="mb-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl font-semibold"
      >
        {showSection ? "Hide Details" : "Show More"}
      </button>

      {/* The Big Section */}
      <div
        className={`transition-all duration-700 overflow-hidden ${
          showSection ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <section className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-4">
          <h2 className="text-3xl font-bold">Massive Hidden Section</h2>
          <p className="text-gray-300">
            Here’s where your giant content lives — text, images, grids, whatever you like.
            You can put a whole layout here and it’ll smoothly expand or collapse.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-700 p-4 rounded-xl">Box 1</div>
            <div className="bg-gray-700 p-4 rounded-xl">Box 2</div>
          </div>
        </section>
      </div>
    </div>
  );
}
