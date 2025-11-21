export default function TeamSection({ image, title, subtitle, description, members }) {
  return (
    <section className="flex flex-col md:flex-row gap-12 items-center md:items-start py-20">

      {/* IMAGE */}
      <div className="w-full md:w-2/3 relative aspect-square md:h-[600px] rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="md:w-1/3 w-full text-left">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white">
          {title}
        </h2>

        <p className="text-white/80 text-xl mb-6">{subtitle}</p>

        <p className="text-white/70 text-lg leading-relaxed mb-8">
          {description}
        </p>

        {members && members.length > 0 && (
          <div className="mt-6">
            <h3 className="text-2xl text-white font-semibold mb-4">
              Team Members
            </h3>
            <ul className="space-y-3">
              {members.map((m, idx) => (
                <li key={idx} className="text-white/85">
                  <span className="font-medium">{m.name}</span> — {m.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

    </section>
  );
}
