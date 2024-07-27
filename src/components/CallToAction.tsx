import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden py-32 bg-black"
    >
      {/*<Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />*/}
      <Container className="relative">
        <div className="mx-auto max-w-2/3 text-center">
          <h2 className="font-display text-2xl tracking-tight text-white sm:text-4xl">
          Agende Uma Consultoria Gratuitamente e Descubra Suas Vantagens Fiscais!
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          Nossa equipe de advogados especializados oferece soluções jurídicas eficazes e personalizadas em Direito Tributário. Com experiência e compromisso com a excelência, ajudamos você a navegar pelas complexidades fiscais e garantir a segurança do seu patrimônio. Entre em contato e veja como podemos atender às suas necessidades.
          </p>
          <Button href="https://wa.me/554892036767" target="_blank" color="white" className="mt-10">
            Falar com a nossa equipe
          </Button>
        </div>
      </Container>
    </section>
  )
}
