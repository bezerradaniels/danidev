import type { ReactNode } from 'react'

type CardProps = {
  title: string
  description: string
  children?: ReactNode
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      {children && <div className="mt-auto pt-4">{children}</div>}
    </article>
  )
}
