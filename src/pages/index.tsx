import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layouts/Navbar'


const poppins = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar  />
    </>
  )
}
