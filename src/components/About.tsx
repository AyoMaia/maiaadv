'use client'

import Image from "next/image"
import jorge from "@/images/avatars/jorge-maia.jpg"

export function About(){
    return(
        <section className="bg-black" id="about">

            <h1 className="text-white font-semibold text-center text-2xl md:text-4xl p-10 md:p-20">Prazer Jorge Maia!</h1>

            <div className="md:flex items-center justify-center">
                 <div className="md:w-2/5 p-6">
                    <Image src={jorge} alt="Jorge Maia" width={400} height={300}></Image>
                </div>
                <div className="md:w-2/5 p-6">
                    <h2 className="text-yellow-600 font-serif text-3xl font-semibold my-10">Quem é Jorge Maia?</h2>
                    <h1 className="text-white">Sou advogado especializado em solucionar problemas tributarios, sou dedicado em garantir os direitos dos meu clientes. Com foco nos Direitos tributarios e mais de 15 cursos especializado, meu objetivo é recuperar aquilo que o cliente tem direito.
                    Somado a isso, como entusiasta da tecnologia, utilizo recursos avançados para agilizar processos e oferecer um serviço personalizado e transparente aos meus clientes. Conte comigo e com minha equipe para enfrentar os desafios, buscar a Justiça e obter a compensação adequada para o seu problema tributario.</h1>
                </div>
            </div>

            <div className="flex items-center justify-center mt-20 gap-x-36 flex-wrap gap-y-20 ">
                <div className="border-4 border-solid border-yellow-600 w-72 h-48 rounded-2xl flex items-center justify-center flex-col">
                    <h1 className="text-white text-4xl font-bold">+ 15</h1>
                    <p className="text-slate-200 text-2xl">anos de experiência</p>
                </div>
                <div className="border-4 border-solid border-yellow-600 w-72 h-48 rounded-2xl flex items-center justify-center flex-col">
                    <h1 className="text-white text-4xl font-bold">+ 50</h1>
                    <p className="text-slate-200 text-2xl">certificados</p>
                </div>
                <div className="border-4 border-solid border-yellow-600 w-72 h-48 rounded-2xl flex items-center justify-center flex-col">
                    <h1 className="text-white text-4xl font-bold">+ 100</h1>
                    <p className="text-slate-200 text-2xl">clientes atendidos</p>
                </div>
            </div>
           

        </section>
    )
}