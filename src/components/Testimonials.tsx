import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.jpg'

const testimonials = [
  [
    {
      content:
        'Recomendo fortemente! A abordagem personalizada e o profundo conhecimento em direito tributário do Dr. Jorge Maia fizeram toda a diferença para o meu caso.',
      author: {
        name: 'Fernanda Costa',
        role: 'Administradora',
        image: avatarImage1,
      },
    },
    {
      content:
        'Advogado incrível! O Dr. Jorge Maia resolveu meu caso com muita competência e sempre estava disponível para ajudar. Confiança total no trabalho dele.',
      author: {
        name: 'Luciana Almeida',
        role: 'Arquiteta',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'Serviço excepcional! O Dr. Jorge Maia foi extremamente competente e solucionou minhas questões tributárias de forma rápida e eficiente.',
      author: {
        name: 'João Pereira',
        role: 'Empresário',
        image: avatarImage5,
      },
    },
    {
      content:
        'Profissional dedicado e atencioso. O Maia esclareceu todas as minhas dúvidas e me ajudou a economizar significativamente nos impostos.',
      author: {
        name: 'Renata Oliveira',
        role: 'Artista',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'Excelente experiência! O suporte contínuo e a habilidade técnica do Jorge Maia foram fundamentais para resolver meus problemas tributários.',
      author: {
        name: 'Ricardos Santos',
        role: 'Médico',
        image: avatarImage3,
      },
    },
    {
      content:
        'Muito satisfeita com o atendimento! O profissional é altamente qualificado e me proporcionou uma excelente consultoria fiscal.',
      author: {
        name: 'Maria Oliveira',
        role: 'Empresaria',
        image: avatarImage6,
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-black py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-yellow-500 sm:text-4xl">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-400">
            Clientes de diversas partes do país compartilharam suas experiências positivas com nosso escritório de advocacia. Veja o que eles têm a dizer.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="flex flex-col relative rounded-2xl bg-black p-6 shadow-xl shadow-slate-900/10 border-4 border-yellow-500 border-solid">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6 flex-col">
                       <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-24 w-24 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-base m-2 text-slate-300 text-center">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-center text-sm text-slate-400">
                            {testimonial.author.role}
                          </div>
                        </div>
                      <blockquote className="relative">
                        <p className="text-sm tracking-tight text-slate-500">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
