export default function HeroBlock({ data }: any) {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Subtle emerald glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 text-center">
        {/* Accent badge */}
        {/* <span className="inline-block mb-6 rounded-full border border-emerald-500/40 px-4 py-1 text-sm text-emerald-400">
          Trusted by professionals
        </span> */}

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {data.heading}
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          {data.subheading}
        </p>

        {/* CTAs */}
        {/* <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-3 rounded-lg transition">
            Get Started
          </button>

          <button className="border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg transition">
            Learn More
          </button>
        </div> */}
      </div>
    </section>
  );
}
