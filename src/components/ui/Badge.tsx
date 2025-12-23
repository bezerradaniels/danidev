type BadgeProps = {
  children: React.ReactNode
  variant?: 'default' | 'accent'
}

const variantMap: Record<Required<BadgeProps>['variant'], string> = {
  default: 'bg-slate-100 text-slate-600',
  accent: 'bg-[#14CC45]/10 text-[#14CC45] ring-1 ring-inset ring-[#14CC45]/30',
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${variantMap[variant]}`}
    >
      {children}
    </span>
  )
}
