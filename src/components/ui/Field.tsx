type FieldProps = {
  label: string
  value: string
}

export default function Field({ label, value }: FieldProps) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-wide text-white/50">{label}</p>
      <p className="text-base text-white">{value}</p>
    </div>
  )
}
