// Registre explicite des icônes iconsax utilisées dans les données.
// On importe seulement ce dont on a besoin pour garder le bundle léger
// (un `import * as` chargerait toute la librairie).
import {
  Designtools,
  Printer,
  Card,
  Heart,
  Brush2,
  Monitor,
  Whatsapp,
  Instagram,
  Facebook,
  Sms,
  type Icon,
} from '../icons'

export const iconRegistry: Record<string, Icon> = {
  Designtools,
  Printer,
  Card,
  Heart,
  Brush2,
  Monitor,
  Whatsapp,
  Instagram,
  Facebook,
  Sms,
}

/** Renvoie l'icône correspondant au nom, avec un repli sûr. */
export function getIcon(name: string): Icon {
  return iconRegistry[name] ?? Brush2
}
