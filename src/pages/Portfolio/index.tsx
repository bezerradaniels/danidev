import PageHero from '../../components/layout/PageHero.tsx'

const projetos = [
  { image: '/images/portfolio/ativa-tea.png', title: 'Ativa TEA', category: 'Site Institucional' },
  { image: '/images/portfolio/casa-bebe.png', title: 'Casa do Bebê', category: 'E-commerce' },
  { image: '/images/portfolio/clinica-sim.png', title: 'Clínica SIM', category: 'Site Institucional' },
  { image: '/images/portfolio/grafica-inova-print.png', title: 'Gráfica Inova Print', category: 'Site Institucional' },
  { image: '/images/portfolio/hazak-fit.png', title: 'Hazak Fit', category: 'Landing Page' },
  { image: '/images/portfolio/personal-juninho.png', title: 'Personal Juninho', category: 'Landing Page' },
  { image: '/images/portfolio/victor-manuel.png', title: 'Victor Manuel', category: 'Site Institucional' },
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero 
        title="Portfólio" 
        subtitle="Nossos projetos"
        backgroundImage="/images/portfolio/hazak-fit.png"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Projetos em destaque
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Conheça alguns dos projetos que desenvolvi para clientes de diversos segmentos.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projetos.map((projeto) => (
              <div
                key={projeto.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-xl"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={projeto.image}
                    alt={projeto.title}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-full bg-[#14CC45]/10 px-3 py-1 text-xs font-semibold text-[#14CC45]">
                    {projeto.category}
                  </span>
                  <h3 className="mt-2 font-bold text-slate-900">{projeto.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
