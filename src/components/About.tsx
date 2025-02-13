'use client'

import Image from "next/image"
import jorge from "@/images/avatars/jorge-maia.jpg"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ from = 0, to = 100, duration = 2 }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  useEffect(() => {
if (!isInView) return;

    let start = from;
    const increment = (to - from) / (duration * 60);

    const interval = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [from, to, duration, isInView]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-white"
    >
      {count}
    </motion.span>
  );
}

export function About() {
  return (
    <section className="bg-black" id="about">
      <div className="md:flex items-center justify-center border-yellow-700 border-4">
        <motion.div
          className="md:w-2/5 p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src={jorge} alt="Jorge Maia" width={450} height={400} className="rounded-2xl" />
        </motion.div>
        <div className="md:w-2/5 p-6">
          <motion.h2
            className="text-yellow-600 font-serif text-5xl font-semibold my-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Quem é Jorge Maia?
          </motion.h2>
          <motion.h1
            className="text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Sou advogado especializado em solucionar problemas tributários, sou dedicado em garantir os direitos dos meus clientes. Com foco nos Direitos Tributários e mais de 15 cursos especializados, meu objetivo é recuperar aquilo que o cliente tem direito. Somado a isso, como entusiasta da tecnologia, utilizo recursos avançados para agilizar processos e oferecer um serviço personalizado e transparente aos meus clientes. Conte comigo e com minha equipe para enfrentar os desafios, buscar a Justiça e obter a compensação adequada para o seu problema tributário.
          </motion.h1>
        </div>
      </div>

      <div className="flex items-center justify-center mt-20 gap-x-36 flex-wrap gap-y-20">
        <div className="border-4 border-solid border-yellow-600 w-72 h-48 rounded-2xl flex items-center justify-center flex-col">
        <div className="flex items-center gap-2 justify-center">
                <h2 className="text-white text-4xl text-center flex mb-2">+</h2>
                <AnimatedCounter from={0} to={15} duration={2.} />
            </div>
          <p className="text-slate-200 text-2xl">anos de experiência</p>
        </div>
        <div className="border-4 border-solid border-yellow-600 w-72 h-48 rounded-2xl flex items-center justify-center flex-col">
            <div className="flex items-center gap-2 justify-center">
                <h2 className="text-white text-4xl text-center flex mb-2">+</h2>
                <AnimatedCounter from={0} to={50} duration={2.5} />
            </div>
          <p className="text-slate-200 text-2xl">certificados</p>
        </div>
        <div className="border-4 border-solid border-yellow-600 w-72 h-48 rounded-2xl flex items-center justify-center flex-col">
            <div className="flex items-center gap-2 justify-center">
                <h2 className="text-white text-4xl text-center flex mb-2">+</h2>
                <AnimatedCounter from={0} to={100} duration={2.5} />
            </div>
          <p className="text-slate-200 text-2xl">clientes atendidos</p>
        </div>
      </div>
    </section>
  );
}
