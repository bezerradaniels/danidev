import { useEffect, useRef, useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'

const experiences = [
  { year: 'Atual', company: 'RediRedi', role: 'Digital Performance', side: 'right' },
  { year: '2024', company: 'Agência Storica', role: 'Analista de Dados', side: 'left' },
  { year: '2023', company: 'Full Cycle', role: 'Growth & Analytics', side: 'right' },
  { year: '2021 a 2024', company: 'Conta Azul', role: 'Estrategista de Marketing', side: 'left' },
  { year: '2019 a 2021', company: 'Fusão Online', role: 'Head de Performance', side: 'right' },
  { year: '2016 a 2017', company: 'Intuit', role: 'Especialista Digital', side: 'left' },
  { year: '2015', company: 'Agência LinkBiz', role: 'Planejamento Digital', side: 'right' },
  { year: '2012 a 2014', company: 'Agência 7 Pontos', role: 'Social Media & Jobs', side: 'left' },
  { year: '2010 a 2012', company: 'Brasília Mídia', role: 'Gestão de Tráfego', side: 'right' },
  { year: '2006 a 2009', company: 'Codevasf', role: 'Início de Carreira', side: 'left' },
]

function TimelineItem({ 
  experience, 
  index 
}: { 
  experience: typeof experiences[0]
  index: number 
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const isLeft = experience.side === 'left'

  return (
    <div
      ref={ref}
      className={`relative flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      {/* Linha central */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-200" />
      
      {/* Ponto na linha */}
      <div className="absolute left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#14CC45] bg-white" />

      {/* Card */}
      <div
        className={`w-[45%] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-700 ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : `translate-y-8 opacity-0`
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <span className="text-xs font-semibold text-[#14CC45]">{experience.year}</span>
        <h4 className="mt-1 font-bold text-slate-900">{experience.company}</h4>
        <p className="text-sm text-slate-500">{experience.role}</p>
      </div>
    </div>
  )
}

export default function AboutMe() {
  const { ref: headerRef, isVisible: headerVisible } = useFadeIn()
  const { ref: photoRef, isVisible: photoVisible } = useFadeIn({ threshold: 0.2 })

  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={headerRef}
          className={`fade-in mb-12 text-center ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[#14CC45]">
            Sobre mim
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Quem sou eu
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Coluna 1 - Foto e Bio */}
          <div
            ref={photoRef}
            className={`fade-in-left flex flex-col items-center lg:sticky lg:top-32 ${photoVisible ? 'visible' : ''}`}
          >
            <div className="relative">
              {/* Moldura decorativa */}
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-[#14CC45]/20 to-[#14CC45]/5" />
              <div className="absolute -inset-2 rounded-2xl bg-white shadow-lg" />
              
              {/* Foto de perfil */}
              <div className="relative h-80 w-64 overflow-hidden rounded-2xl bg-slate-200 sm:h-96 sm:w-80">
                <img 
                  src="/images/danibezerra-avatar.jpg" 
                  alt="Dani Bezerra" 
                  className="h-full w-full scale-125 object-cover" 
                />
              </div>
            </div>

            {/* Mini biografia */}
            <div className="mt-12 max-w-sm text-center">
              <p className="text-slate-600">
                Profissional de marketing digital com mais de 15 anos de experiência em estratégias de growth, performance e análise de dados. Apaixonado por transformar negócios através da tecnologia.
              </p>
              <p className="mt-4 text-slate-600">
                Já ajudei dezenas de empresas a alcançarem resultados expressivos, desde startups até grandes corporações. Minha missão é democratizar o acesso a soluções digitais de qualidade.
              </p>
            </div>
          </div>

          {/* Coluna 2 - Timeline */}
          <div className="relative">
            <div className=" text-center lg:text-left">

            </div>

            <div className="relative space-y-6">
              {experiences.map((exp, idx) => (
                <TimelineItem key={exp.company} experience={exp} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
