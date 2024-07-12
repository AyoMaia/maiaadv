'use client'

import Image from "next/image"
import jorge from "@/images/avatars/jorge-maia.jpg"

export function About(){
    return(
        <section className="bg-black">

            <h1 className="text-white font-semibold text-center text-2xl md:text-4xl p-10 md:p-20">Prazer Jorge Maia!</h1>

            <div className="md:flex items-center justify-center">
                 <div className="md:w-2/5 p-6">
                    <Image src={jorge} alt="Jorge Maia" width={400} height={300}></Image>
                </div>
                <div className="md:w-2/5 p-6">
                    <h1 className="text-white">Sou advogado especializado em solucionar problemas tributarios, sou dedicado em garantir os direitos dos meu clientes. Com foco nos Direitos tributarios e mais de 15 cursos especializado, meu objetivo é recuperar aquilo que o cliente tem direito.
                    Somado a isso, como entusiasta da tecnologia, utilizo recursos avançados para agilizar processos e oferecer um serviço personalizado e transparente aos meus clientes. Conte comigo e com minha equipe para enfrentar os desafios, buscar a Justiça e obter a compensação adequada para o seu problema tributario.</h1>
                </div>
            </div>
           

        </section>
    )
}