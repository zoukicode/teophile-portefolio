// Wrapper iconsax pour React 19.
// iconsax-react v0.0.8 fixe ses valeurs par défaut via `defaultProps`, que
// React 19 ignore pour les composants fonction → `color` devient undefined et
// les icônes sont invisibles (les <path> héritent du fill="none" du <svg>).
// On ré-applique ici les défauts (color="currentColor", size=24) ; toute prop
// passée à l'usage (size, variant, color…) reste prioritaire.
import type { FC } from 'react'
import {
  HambergerMenu as _HambergerMenu,
  CloseCircle as _CloseCircle,
  ArrowRight as _ArrowRight,
  ArrowUp2 as _ArrowUp2,
  ArrowLeft2 as _ArrowLeft2,
  ArrowRight2 as _ArrowRight2,
  Star1 as _Star1,
  Location as _Location,
  TickCircle as _TickCircle,
  Award as _Award,
  Teacher as _Teacher,
  SearchNormal1 as _SearchNormal1,
  Sms as _Sms,
  Call as _Call,
  Designtools as _Designtools,
  Printer as _Printer,
  Card as _Card,
  Heart as _Heart,
  Brush2 as _Brush2,
  Monitor as _Monitor,
  Whatsapp as _Whatsapp,
  Facebook as _Facebook,
  type Icon,
  type IconProps,
} from 'iconsax-react'

const withDefaults = (IconCmp: Icon): Icon => {
  const Wrapped: FC<IconProps> = (props) => (
    <IconCmp color="currentColor" size={24} {...props} />
  )
  Wrapped.displayName = `Icon(${IconCmp.displayName ?? 'Iconsax'})`
  return Wrapped
}

export const HambergerMenu = withDefaults(_HambergerMenu)
export const CloseCircle = withDefaults(_CloseCircle)
export const ArrowRight = withDefaults(_ArrowRight)
export const ArrowUp2 = withDefaults(_ArrowUp2)
export const ArrowLeft2 = withDefaults(_ArrowLeft2)
export const ArrowRight2 = withDefaults(_ArrowRight2)
export const Star1 = withDefaults(_Star1)
export const Location = withDefaults(_Location)
export const TickCircle = withDefaults(_TickCircle)
export const Award = withDefaults(_Award)
export const Teacher = withDefaults(_Teacher)
export const SearchNormal1 = withDefaults(_SearchNormal1)
export const Sms = withDefaults(_Sms)
export const Call = withDefaults(_Call)
export const Designtools = withDefaults(_Designtools)
export const Printer = withDefaults(_Printer)
export const Card = withDefaults(_Card)
export const Heart = withDefaults(_Heart)
export const Brush2 = withDefaults(_Brush2)
export const Monitor = withDefaults(_Monitor)
export const Whatsapp = withDefaults(_Whatsapp)
export const Facebook = withDefaults(_Facebook)

export type { Icon, IconProps }
