import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
import Section from '@/components/layouts/Section'
import Features from '@/components/layouts/Features'
import Klien from '@/components/layouts/Klien'
import Testimoni from '@/components/layouts/Testimoni'
import Contact from '@/components/layouts/Contact'



const poppins = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar  />
      <Section />
      <Features />
      <Klien />
      <Testimoni />
      <Contact />
      <Footer />
    </>
  )
}
