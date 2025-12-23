import type { ReactNode } from 'react'

type PageHeaderProps = {
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-white/10 pb-10 pt-16">
      <div className="flex flex-wrap items-center gap-3">{children}</div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="max-w-3xl text-lg text-white/70">{subtitle}</p>}
      </div>
    </header>
  )
}
