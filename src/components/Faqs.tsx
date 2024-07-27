import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/dark-background.jpg'

const faqs = [
  [
    {
      question: 'O que é Direito Tributário?',
      answer:
        'O Direito Tributário é a área do Direito que se ocupa das normas e regras que regulam a arrecadação de tributos pelo Estado e a relação entre contribuintes e o fisco. Ele abrange questões sobre impostos, taxas, contribuições e todas as obrigações fiscais dos cidadãos e empresas.',
    },
    {
      question: 'O que fazer se eu recebi uma notificação de dívida tributária?',
      answer: 'Se você receber uma notificação de dívida tributária, é importante consultar um advogado especializado para entender a natureza da dívida e as opções disponíveis. Muitas vezes, é possível negociar um parcelamento ou contestar a dívida com base em erros ou irregularidades',
    },
    {
      question: 'Como posso reduzir a carga tributária de minha empresa de forma legal?',
      answer:
        'A redução da carga tributária deve ser feita de acordo com a legislação vigente. Um advogado tributário pode ajudar a identificar oportunidades de planejamento tributário, como optar por regimes fiscais mais vantajosos, explorar incentivos fiscais e revisar a estrutura tributária da empresa.',
    },
  ],
  [
    {
      question: 'Qual a diferença entre planejamento tributário e sonegação fiscal?',
      answer:
        'O planejamento tributário é uma prática legal que visa organizar a estrutura fiscal para pagar menos impostos, respeitando a legislação. A sonegação fiscal, por outro lado, é ilegal e envolve a omissão ou falsificação de informações para evitar o pagamento de tributos.',
    },
    {
      question:
        'O que é a prescrição tributária e como ela afeta minhas obrigações fiscais?',
      answer:
        ' A prescrição tributária é o prazo legal após o qual o Estado perde o direito de cobrar uma dívida tributária. Esse prazo varia de acordo com o tipo de tributo, mas geralmente é de 5 anos. É importante monitorar os prazos para garantir que seus direitos sejam respeitados.',
    },
    {
      question:
        'Posso contestar uma decisão administrativa do fisco?',
      answer:
        ' Sim, você pode contestar uma decisão administrativa do fisco por meio de recursos administrativos e, se necessário, judicialmente. Um advogado especializado pode orientá-lo sobre os melhores passos e estratégias para defender seus interesses.',
    },
  ],
  [
    {
      question: 'O que é a compensação de tributos?',
      answer:
        ' A compensação de tributos é um mecanismo que permite que créditos tributários sejam utilizados para pagar débitos tributários. Isso pode ocorrer quando uma empresa ou contribuinte tem valores a receber do fisco que podem ser utilizados para quitar outras obrigações fiscais.',
    },
    {
      question: 'Quais são os direitos dos contribuintes em uma fiscalização tributária?',
      answer: 'Durante uma fiscalização tributária, os contribuintes têm direitos como ser informado sobre o motivo da fiscalização, ter acesso aos documentos e informações coletadas, e ser ouvido antes de qualquer decisão que afete suas obrigações tributárias. É fundamental que um advogado esteja presente para garantir que seus direitos sejam respeitados.',
    },
    {
      question: 'Como um advogado tributário pode ajudar a minha empresa?',
      answer:
        'Um advogado tributário pode ajudar sua empresa a garantir conformidade com a legislação fiscal, planejar e estruturar a carga tributária de forma eficiente, representar a empresa em litígios fiscais, e fornecer consultoria para a melhor estratégia tributária. A assistência profissional pode evitar problemas legais e otimizar os custos tributários.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-black py-20 sm:py-32"
    >
      
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-yellow-400 sm:text-4xl"
          >
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-500">
            Clientes de diversas partes do país compartilharam suas experiências positivas com nosso escritório de advocacia. Veja o que eles têm a dizer.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-yellow-500">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-400">{faq.answer}</p>
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
