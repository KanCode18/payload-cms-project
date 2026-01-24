export default function FeaturesBlock({ data }: any) {
  if (!data?.features?.length) return null;

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            {data.title}
          </h2>
          <p className="mt-4 text-gray-400">
            {data.description}
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.features.map((item: any, i: number) => (
            <div
              key={i}
              className="
                group relative rounded-xl border border-white/10
                bg-white/5 p-6
                transition-all duration-300
                hover:-translate-y-2 hover:border-emerald-500/50
              "
            >
              {/* Accent bar */}
              <span className="absolute top-0 left-0 h-1 w-12 bg-emerald-500 rounded-full" />

              {/* Content */}
              <h3 className="mt-4 font-semibold text-lg">
                {item.heading}
              </h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
