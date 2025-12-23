import { useFadeIn } from '../../hooks/useFadeIn'

const clients = [
  { name: 'Academia Hazak Fit', logo: '/images/logos/academia-hazak-fit.png' },
  { name: 'Adrielle Moreira', logo: '/images/logos/adrielle-moreira.png' },
  { name: 'Amenities', logo: '/images/logos/amenities.png' },
  { name: 'Benu ERP', logo: '/images/logos/benu-erp.png' },
  { name: 'Bike Registrada', logo: '/images/logos/bike-registrada.png' },
  { name: 'Cabeed', logo: '/images/logos/cabeed.png' },
  { name: 'Casa e Bebê', logo: '/images/logos/casa-e-bebe.png' },
  { name: 'Clínica Neurob', logo: '/images/logos/clinica-neurob.png' },
  { name: 'Divs Segurança', logo: '/images/logos/divs-seguranca.png' },
  { name: 'Engenheiro Victor Manuel', logo: '/images/logos/engenheiro-victor-manuel.png' },
  { name: 'Escola Eibneti', logo: '/images/logos/escola-eibneti.png' },
  { name: 'Faculdade JK', logo: '/images/logos/faculdade-jk.png' },
  { name: 'Gráfica Inova Print', logo: '/images/logos/grafica-inova-print.png' },
  { name: 'Igreja Comunidade das Nações', logo: '/images/logos/igreja-comunidade-das-nacoes.png' },
  { name: 'Juninho Personal', logo: '/images/logos/juninho-personal.png' },
  { name: 'Solar Haus', logo: '/images/logos/solar-haus.png' },
]

export default function ClientLogos() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="overflow-hidden border-y border-slate-200/50 bg-white py-10">
      <div
        ref={ref}
        className={`fade-in mb-6 text-center ${isVisible ? 'visible' : ''}`}
      >
        <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
          Empresas que confiam no nosso trabalho
        </p>
      </div>

      <div className="relative">
        {/* Gradiente esquerdo */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />
        {/* Gradiente direito */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

        {/* Esteira de logos */}
        <div className="flex animate-marquee">
          {/* Primeiro conjunto */}
          {clients.map((client, idx) => (
            <div
              key={`first-${idx}`}
              className="mx-8 flex shrink-0 items-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
          {/* Segundo conjunto (duplicado para loop contínuo) */}
          {clients.map((client, idx) => (
            <div
              key={`second-${idx}`}
              className="mx-8 flex shrink-0 items-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
