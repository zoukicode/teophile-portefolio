// iconsax-react ne fournit pas d'icône TikTok : glyphe maison compatible avec
// l'API des icônes (size, color ; le `variant` iconsax est ignoré).
import type { Icon } from 'iconsax-react'

const TiktokIcon: Icon = ({ size = 24, color = 'currentColor', variant: _variant, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3c-.94.04-2.3-.39-3.24-1.48Z" />
  </svg>
)
TiktokIcon.displayName = 'Icon(Tiktok)'

export default TiktokIcon
