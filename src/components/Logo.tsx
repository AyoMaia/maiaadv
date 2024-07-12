import Image from "next/image"
import logoMaia from '@/images/logos/logo-maia.png'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div>
      <Image src={logoMaia} alt="logo" width={85} height={80}></Image>
    </div>
  )
}
