'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay } })
};

export function Hero() {
  return (
    <Container className="md:pb-36 pb-72 pt-10 text-center lg:pt-12">
      <motion.h1
        className="mx-auto max-w-4xl md:mt-2 mt-20 font-display text-2xl font-medium tracking-tight text-gray-100 sm:text-6xl"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariants}
      >
        Defendendo seus interesses tributários com conhecimento e compromisso.
      </motion.h1>
      
      <motion.p
        className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-300 font-semibold"
        initial="hidden"
        animate="visible"
        custom={0.3}
        variants={textVariants}
      >
        Defendendo seus interesses tributários com a mais alta competência e atenção
      </motion.p>
      
      <motion.div
        className="mt-10 flex justify-center gap-x-6"
        initial="hidden"
        animate="visible"
        custom={0.6}
        variants={textVariants}
      >
        <Button href="https://wa.me/554892036767" target="_blank" className='text-xl'>
          Solicitar consultoria
        </Button>
      </motion.div>
    </Container>
  );
}
