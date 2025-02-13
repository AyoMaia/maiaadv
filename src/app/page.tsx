import Image from 'next/image'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import background from '@/images/background-hero.jpg'
import backgroundMobile from '@/images/background-mobile.png'
import { Services } from '@/components/Services'
import { About } from '@/components/About'

export default function Home() {
  return (
    <>
      <Header />
      <div className='fixed w-full h-full -z-10'>
        <Image src={background} alt='Background' fill className='relative -z-10 md:block hidden'></Image>
        <Image src={backgroundMobile} alt='Background' fill className='relative -z-10 md:hidden'></Image>
      </div>
      
      <Hero />
      <main>
        <Services />
        <About />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
