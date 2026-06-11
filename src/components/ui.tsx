// Primitives UI partagées — remplacent les anciennes classes globales
// (.container, .section-head, .eyebrow, .btn) par des utilitaires Tailwind.
import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

/* ----- Boutons ----- */
export const btn =
  'inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[0.95rem] font-semibold cursor-pointer border border-transparent transition-[transform,box-shadow,background] duration-200'

export const btnPrimary =
  'bg-brand text-white shadow-[0_12px_30px_-10px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(139,92,246,0.7)]'

export const btnGhost =
  'bg-transparent text-text-h border-white/15 hover:bg-surface-2 hover:-translate-y-0.5'

/* ----- Titres ----- */
export const heading = 'text-text-h font-bold leading-[1.12] tracking-[-0.02em]'

/* Espacement vertical standard d'une section */
export const section = 'py-[68px] min-[720px]:py-24'

/* ----- Layout ----- */
export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1180px] px-[18px] min-[720px]:px-6', className)}>
      {children}
    </div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-accent before:h-px before:w-[26px] before:bg-accent before:content-['']">
      {children}
    </span>
  )
}

export function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="mx-auto mb-14 max-w-[620px] text-center">
      <div className="mb-4">
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className={cn(heading, 'text-[clamp(1.9rem,4vw,2.7rem)]')}>{title}</h2>
      {children && <p className="mt-3.5 text-text-dim">{children}</p>}
    </div>
  )
}
