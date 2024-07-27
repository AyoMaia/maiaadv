import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import Background from '@/images/background-hero.jpg'

export function Hero() {
  return (
    <Container className="pb-36 pt-10 text-center lg:pt-12">
      
      <h1 className="mx-auto max-w-4xl font-display text-2xl font-medium tracking-tight text-gray-100 sm:text-6xl">
        Defendendo Seus Interesses Tributários com Conhecimento e Compromisso.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-300 font-semibold">
        Defendendo seus interesses tributários com a mais alta competência e atenção
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register" className='text-xl'>Solicitar Consultoria </Button>
      </div>
      
    </Container>
  )
}
