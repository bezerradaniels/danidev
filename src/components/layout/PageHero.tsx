interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative -mt-20 flex min-h-75 items-center justify-center overflow-hidden bg-slate-900 pt-20 md:-mt-24 md:min-h-100 md:pt-24">
      {/* Background image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {subtitle && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#14CC45]">
            {subtitle}
          </p>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  )
}
