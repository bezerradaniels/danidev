import PageHero from '../../components/layout/PageHero.tsx'

const nichos = [
  { icon: 'business', name: 'Pequenas Empresas', description: 'Sites e marketing para negócios locais que querem crescer online.' },
  { icon: 'local_hospital', name: 'Clínicas', description: 'Presença digital para clínicas médicas, odontológicas e estéticas.' },
  { icon: 'storefront', name: 'E-commerce', description: 'Lojas virtuais otimizadas para conversão e vendas.' },
  { icon: 'restaurant', name: 'Restaurantes', description: 'Cardápios digitais, delivery e presença nas redes sociais.' },
  { icon: 'fitness_center', name: 'Academias', description: 'Sites e campanhas para atrair e reter alunos.' },
  { icon: 'school', name: 'Educação', description: 'Plataformas e marketing para escolas e cursos.' },
  { icon: 'gavel', name: 'Advogados', description: 'Sites institucionais e captação de clientes qualificados.' },
  { icon: 'architecture', name: 'Arquitetura', description: 'Portfólios e presença digital para arquitetos e designers.' },
]

export default function NichosPage() {
  return (
    <>
      <PageHero 
        title="Nichos de Atuação" 
        subtitle="Especialidades"
        backgroundImage="/images/portfolio/casa-bebe.png"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Segmentos que atendemos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Experiência comprovada em diversos setores, com soluções personalizadas para cada tipo de negócio.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nichos.map((nicho) => (
              <div
                key={nicho.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:border-[#14CC45]/30 hover:shadow-lg"
              >
                <span className="icon text-4xl text-[#14CC45]">{nicho.icon}</span>
                <h3 className="mt-4 font-bold text-slate-900">{nicho.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{nicho.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
