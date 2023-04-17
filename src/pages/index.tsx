import Image from 'next/image'
import { Roboto } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})


export default function Home() {
  return (
    <><Head>
    </Head>
      <main className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen">
        <aside className='col-start-1 col-end-2 row-start-1 row-end-3 w-20 h-screen border border-colorBorder'>
          <nav>
            <ul className='flex flex-col items-center space-y-4'>
              <a className='mt-4' href="">
                <Image src={"/icons/Logo.svg"} width={28} height={28} alt={'Blue bird fly'} ></Image>
              </a>
              <a href="">
                <Image className='fill-neutral-50' src={"/icons/House.svg"} width={28} height={28} alt={'Home'} ></Image>
              </a>
              <a href="">
                <Image className='' src={"/icons/Hash.svg"} width={28} height={28} alt={'Home'} ></Image>
              </a>
              <a href="">
                <Image className='' src={"/icons/Bell.svg"} width={28} height={28} alt={'Home'} ></Image>
              </a>
              <a href="">
                <Image className='' src={"/icons/EnvelopeSimple.svg"} width={28} height={28} alt={'Home'} ></Image>
              </a>
              <a href="">
                <Image className='' src={"/icons/BookmarkSimple.svg"} width={28} height={28} alt={'Home'} ></Image>
              </a>
              <a href="">
                <Image className='' src={"/icons/FileText.svg"} width={28} height={28} alt={'Home'} ></Image>
              </a>
              <a href="">
                <Image className='' src={"/icons/User.svg"} width={28} height={28} alt={'Home'} ></Image>
              </a>
              <a href="">
                <Image className='' src={"/icons/DotsThreeCircle.svg"} width={28} height={28} alt={'Home'} ></Image>
              </a>
              <a href="">
                <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                  <Image className='' src={"/icons/Pencil.svg"} width={24} height={24} alt={'Home'} ></Image>
                </div>
              </a>
            </ul>
          </nav>
        </aside>
        <div className='h-16 w-full col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-between border border-colorBorder'>
          <h1 className='px-4 font-semibold text-xl' >Home</h1>
          <Image className='mr-4' src={"/icons/Sparkle.svg"} width={24} height={24} alt={'Home'} ></Image>
        </div>
        <div className='p-4'>
          Main
        </div>
      </main></>
  )
}
