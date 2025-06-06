'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { KeyframeOptions } from 'framer-motion'

import diagnosticoIcon from '@/images/icons/diagnostico.png'
import reducaoIcon from '@/images/icons/reducao.png'
import planejamentoIcon from '@/images/icons/planejamento.png'
import { Button } from './Button'

const services = [
 [
    {
        title:'Diagnostico Tributário',
        image: diagnosticoIcon ,
        description:'O diagnóstico tributário é um recurso analítico e estratégico realizado por profissional para identificar se existe a possibilidade de redução na carga tributária incidente sobe a empresa e até mesmo a possibilidade de benefícios de créditos tributários dos últimos 05 (cinco) anos.',
    },
    {
        title:'Planejamento Tributário',
        image: planejamentoIcon ,
        description:'Revisa os últimos 12 meses de atividade fiscal e contábil de um negócio. A fim de identificar qual o melhor e mais econõmico regime tributário deito de forma toalmente legal.',
    },
    {
        title:'Redução Tributária',
        image: reducaoIcon ,
        description:'Redução e aproveitamento de crédito de despesas de serviços não considerados no diagnósticos tributário (PIS, CONFINS, ipi, iss, ICMS), se torna uma necessidade vantajosa para as empresas.',
    }

 ]
]


export function Services() {
    return (
        <section id='services'>
            <div>
                <div className='bg-black/50 flex gap-10 py-28 flex-col'>
                <motion.div
                initial= {{ opacity: 0 }}
                whileInView= {{ opacity: 1}}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                >
                    <h1 className='text-center text-white text-4xl font-bold mb-8'>Nossos serviços</h1>
                </motion.div>
                {services.map((column, columnIndex) => (
                    <div key={columnIndex} className='gap-10 w-full flex items-center justify-center'>
                        <div role="list" className="gap-y-8 md:w-9/12 w-11/12 gap-x-10 flex md:flex-row flex-col md:ml-0 ml-10">
                            {column.map((services, serviceIndex) => (
                            <motion.div key={serviceIndex}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.3, delay: serviceIndex * 0.3 }}
                            viewport={{ once: true }}
                            className='md:w-1/3 w-11/12 h-[35rem] bg-black/95 p-10 rounded-lg shadow-md shadow-black drop-shadow-2xl justify-between flex flex-col gap-y-10'>

                                <nav>
                                    <div className='flex items-center justify-center my-6'><Image src={services.image} alt='icone tributario' width={70} height={100}></Image></div>

                                    <h3 className="font-display text-lg leading-7 text-gray-100 text-center">
                                    {services.title}
                                    </h3>

                                    <p className="mt-4 text-sm text-gray-300">{services.description}</p>
                                </nav>

                                

                                <Button href="https://wa.me/554892036767" target="_blank" color="blue">
                                    <span >
                                        Falar Sobre
                                    </span>
                                </Button>

                            </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}