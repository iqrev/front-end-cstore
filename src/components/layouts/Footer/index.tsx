import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#0A2C69] text-white'>
      <div className=' container mx-auto flex-row items-center'>
        {/* menu */}
        <div className='container flex justify-between items-center'>
          <Image
            className='mr-10'
            src="/assets/logo-cakapindstore.png"
            alt="login"
            width={100}
            height={100}
          />
          <div className='ml-10'>
            <h2 className='my-10  text-[24px]'>Citra Raya No.11 Blok A8, Mendalo Darat, kec. Jambi Luar Kota, Kabupaten Muaro Jambi, Jambi.</h2>
            <p className=''>(+62)85179861104</p>
          </div>
          {/* socials */}
          <div className='flex gap-5'>
            <Image
              src="/assets/facebook.svg"
              alt="login"
              width={32}
              height={32}
            />
            <Image
              src="/assets/instagram.svg"
              alt="login"
              width={32}
              height={32}
            />
          </div>
        </div>
        {/* copyright */}
        <div className='flex justify-center items-center py-5'>
          <p>© 2021 PT Cipta Kreatif Berkarya</p>
        </div>
      </div>
    </div>
  )
}

export default Footer