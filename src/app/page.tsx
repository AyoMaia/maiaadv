import Image from 'next/image'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import background from '@/images/background-hero.jpg'
import { Services } from '@/components/Services'


export default function Home() {
  return (
    <>
      <Header />
      <div className='fixed w-full h-full -z-10'>
        <Image src={background} alt='Background' fill className='relative -z-10'></Image>
      </div>
      
      <Hero />
      <main>
       
        
        
        <Services />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
