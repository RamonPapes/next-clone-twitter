import Image from 'next/image'
import { Roboto } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500'
})


export default function Home() {
  return (
    <><Head>
    </Head>
      <main className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen">

        <aside className='col-start-1 col-end-2 row-start-1 row-end-3 w-20 lg:w-64 h-screen border-r border-colorBorder/25'>
          <nav>
            <ul className='flex flex-col items-center lg:items-start lg:m-4 lg:ml-6 space-y-4 lg:space-y-8'>
              <a className='mt-4' href="">
                <Image src={"/icons/Logo.svg"} width={28} height={28} alt={'Blue bird fly'} ></Image>
              </a>
              <a className='flex justify-center items-center gap-2'  href="">
                <Image className='fill-neutral-50' src={"/icons/House.svg"} width={28} height={28} alt={'Home'} ></Image>
                <p className=' hidden lg:block text-xl hover:text-primary '>Home</p>
              </a>
              <a className='flex justify-center items-center gap-2'  href="">
                <Image className='' src={"/icons/Hash.svg"} width={28} height={28} alt={'Home'} ></Image>
                <p className='hidden lg:block text-xl hover:text-primary' >Explore</p>
              </a>
              <a className='flex justify-center items-center gap-2'  href="">
                <Image className='' src={"/icons/Bell.svg"} width={28} height={28} alt={'Home'} ></Image>
                <p className='hidden lg:block text-xl hover:text-primary '>Notifications</p>
              </a>
              <a className='flex justify-center items-center gap-2'  href="">
                <Image className='' src={"/icons/EnvelopeSimple.svg"} width={28} height={28} alt={'Home'} ></Image>
                <p className='hidden lg:block text-xl  hover:text-primary'>Messages</p>
              </a>
              <a className='flex justify-center items-center gap-2'  href="">
                <Image className='' src={"/icons/BookmarkSimple.svg"} width={28} height={28} alt={'Home'} ></Image>
                <p className='hidden lg:block text-xl  hover:text-primary'>Bookmarks</p>
              </a>
              <a className='flex justify-center items-center gap-2'  href="">
                <Image className='' src={"/icons/FileText.svg"} width={28} height={28} alt={'Home'} ></Image>
                <p className='hidden lg:block text-xl hover:text-primary '>Lists</p>
              </a>
              <a className='flex justify-center items-center gap-2'  href="">
                <Image className='' src={"/icons/User.svg"} width={28} height={28} alt={'Home'} ></Image>
                <p className='hidden lg:block text-xl hover:text-primary '>Profile</p>
              </a>
              <a className='flex justify-center items-center gap-2'  href="">
                <Image className='' src={"/icons/DotsThreeCircle.svg"} width={28} height={28} alt={'Home'} ></Image>
                <p className='hidden lg:block text-xl hover:text-primary'>More</p>
              </a>
              <a className='flex justify-center items-center gap-2 lg:hidden'  href="">
                <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                  <Image className='' src={"/icons/Pencil.svg"} width={24} height={24} alt={'Home'} ></Image>
                </div>
              </a>
              <div className=''>
                <button className=' hidden lg:block w-52 h-10 bg-primary rounded-full mr-4 hover:bg-primary/80'>
                  <h1 className='font-semibold text-lg'>Tweet</h1>
                </button> 
              </div>

            </ul>
          </nav>
        </aside>

        {/* Topo */}
        <div className='h-16 w-11/12 lg:w-full col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-between border-b border-colorBorder/25'>
          <h1 className='px-4 font-semibold text-xl lg:text-2xl' >Home</h1>
          <Image className='mr-4' src={"/icons/Sparkle.svg"} width={24} height={24} alt={'Home'} ></Image>
        </div>

        {/* Main */}
        <div className='w-11/12 lg:w-full'>

          {/* Primeiro Card */}
          <div className='grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-2 border border-colorBorder/25 '>
            <div className='col-start-1 col-end-2 row-start-1 row-end-2 flex justify-center items-center m-2 mt-4'>
              <Image className='mr-4' src={'/images/perfil1.png'} width={48} height={48} alt='foto de perfil '></Image>
            </div>
            <div className='col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-start'>
              <input className='focus:outline-none bg-transparent font-semibold text-xl' type="text" placeholder='Whats happening?' />
            </div>
            <div className='flex justify-end col-start-2 col-end-3 row-start-2 row-end-3 items-center py-3'>
              <button className='w-24 h-10 bg-primary rounded-full mr-4 hover:bg-primary/80'>
                <h1 className='font-semibold text-lg'>Tweet</h1>
              </button>
            </div>
          </div>

          {/* Segundo Card */}
          <div className='grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] border border-colorBorder/25 gap-2'>
            <div className='col-start-1 col-end-2 row-start-1 row-end-3  flex justify-center items-start m-2'>
              <Image className='max-w-none' src={'/images/perfil3.png'} width={48} height={48} alt='foto de perfil '></Image>
            </div>
            <div className='text-base col-start-2 col-end-3 row-start-1 row-end-2 flex justify-start items-center gap-1 mt-2'>
              <h1> Jonh Travolta</h1>
              <a href=""><p className='text-zinc-400 hover:text-primary' >@Jonh</p></a>
            </div>
            <div className='col-start-2 col-end-3 row-start-2 row-end-3 flex justify-start flex-col gap-y-4'>
              <p>
                Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:
              </p>
              <p>
                ✅ npm start: De 32s para 400ms (sim, demorava 30s)
                ✅ npm build: De 120s para 22s
              </p>
              <p className='mb-2'>
                Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
              </p>
              <div className='flex justify-start gap-20 mb-4'>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 hover:text-zinc-50'>
                  <Image  src={'/icons/comment.svg'} width={24} height={24} alt='comentario'></Image>
                  <p>30</p>
                </div>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 hover:text-zinc-50'>
                    <Image className='hidden lg:block' src={'/icons/Heart.svg'} width={24} height={24} alt='comentario'></Image>
                    <p className='hidden lg:block'>30</p>
                </div>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 mr-2 hover:text-zinc-50'>
                  <Image src={'/icons/ArrowsClockwise.svg'} width={24} height={24} alt='comentario'></Image>
                  <p>32</p>
                </div>
              </div>
            </div>
          </div>

          {/* Terceiro Card */}
          <div className='grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] border border-colorBorder/25 gap-x-2'>
            <div className='col-start-1 col-end-2 row-start-1 row-end-3  flex justify-center items-start m-2'>
              <Image className='max-w-none' src={'/images/perfil4.png'} width={48} height={48} alt='foto de perfil '></Image>
            </div>
            <div className='text-base col-start-2 col-end-3 row-start-1 row-end-2 flex justify-start items-center gap-1 mt-2'>
              <h1>Angela Arden</h1>
              <a href=""><p className='text-zinc-400 hover:text-primary' >@angela_arden</p></a>
            </div>
            <div className='col-start-2 col-end-3 row-start-2 row-end-3 flex justify-start flex-col gap-4'>
              <p>
                Estamos vivendo um momento interessante no mercado de startups.
              </p>
              <p>
                Soluções que resolvem problemas de forma semelhante, mas com precificação mais simples, usabilidade e foco em dev first.
              </p>
              <p className='mb-2'>
                Tudo começa com um projeto open source/free 👀
              </p>
              <div className='flex justify-start gap-20 mb-4'>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 hover:text-zinc-50'>
                  <Image src={'/icons/comment.svg'} width={24} height={24} alt='comentario'></Image>
                  <p>30</p>
                </div>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 hover:text-zinc-50'>
                    <Image className='hidden lg:block' src={'/icons/Heart.svg'} width={24} height={24} alt='comentario'></Image>
                    <p className='hidden lg:block'>30</p>
                </div>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 mr-2 hover:text-zinc-50'>
                  <Image src={'/icons/ArrowsClockwise.svg'} width={24} height={24} alt='comentario'></Image>
                  <p>32</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quarto Card */}

          <div className='grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] border border-colorBorder/25 gap-x-2'>
            <div className='col-start-1 col-end-2 row-start-1 row-end-3  flex justify-center items-start m-2'>
              <Image className='max-w-none' src={'/images/perfil2.png'} width={48} height={48} alt='foto de perfil '></Image>
            </div>
            <div className='text-base col-start-2 col-end-3 row-start-1 row-end-2 flex justify-start items-center gap-1 mt-2'>
              <h1>Julia Stone</h1>
              <a href=""><p className='text-zinc-400 hover:text-primary' >@julia</p></a>
            </div>
            <div className='col-start-2 col-end-3 row-start-2 row-end-3 flex justify-start flex-col gap-4'>
              <p>
                Se você quer se destacar no universo da programação web, é importante manter-se atualizado com as últimas tendências e tecnologias.
              </p>
              <p className='mb-2'>
                Participe de conferências, siga blogs e sites de tecnologia, e junte-se a comunidades online para aprimorar suas habilidades #programação #webdev
              </p>
              <div className='flex justify-start gap-20 mb-4'>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 hover:text-zinc-50'>
                  <Image src={'/icons/comment.svg'} width={24} height={24} alt='comentario'></Image>
                  <p>30</p>
                </div>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 hover:text-zinc-50'>
                    <Image className='hidden lg:block' src={'/icons/Heart.svg'} width={24} height={24} alt='comentario'></Image>
                    <p className='hidden lg:block'>30</p>
                </div>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 mr-2 hover:text-zinc-50'>
                  <Image src={'/icons/ArrowsClockwise.svg'} width={24} height={24} alt='comentario'></Image>
                  <p>32</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quinto Card */}

          <div className='grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] border border-colorBorder/25 gap-x-2'>
            <div className='col-start-1 col-end-2 row-start-1 row-end-3  flex justify-center items-start m-2'>
              <Image className='max-w-none' src={'/images/perfil5.png'} width={48} height={48} alt='foto de perfil '></Image>
            </div>
            <div className='text-base col-start-2 col-end-3 row-start-1 row-end-2 flex justify-start items-center gap-1 mt-2'>
              <h1>Julio Robert</h1>
              <a href=""><p className='text-zinc-400 hover:text-primary' >@juliorobert12</p></a>
            </div>
            <div className='col-start-2 col-end-3 row-start-2 row-end-3 flex justify-start flex-col gap-4'>
              <p>
                lidar com datas continua sendo uma das coisas mais chatas em programação... por exemplo:
              </p>
              <p className='mb-2'>
                –o mês no JS começa em 0 (janeiro = 0)<br />–a semana começa em 0 (domingo = 0) <br />–o mês no MySQL começa em 1 (janeiro = 1) <br />–a semana no MySQL começa na segunda-feira (domingo = 6)
              </p>
              <div className='flex justify-start gap-20 mb-4'>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 hover:text-zinc-50'>
                  <Image src={'/icons/comment.svg'} width={24} height={24} alt='comentario'></Image>
                  <p>30</p>
                </div>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 hover:text-zinc-50'>
                    <Image className='hidden lg:block' src={'/icons/Heart.svg'} width={24} height={24} alt='comentario'></Image>
                    <p className='hidden lg:block'>30</p>
                </div>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 mr-2 hover:text-zinc-50'>
                  <Image src={'/icons/ArrowsClockwise.svg'} width={24} height={24} alt='comentario'></Image>
                  <p>32</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sexto Card */}
          <div className='grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] border border-colorBorder/25 gap-x-2'>
            <div className='col-start-1 col-end-2 row-start-1 row-end-3  flex justify-center items-start m-2'>
              <Image className='max-w-none' src={'/images/perfil6.png'} width={48} height={48} alt='foto de perfil '></Image>
            </div>
            <div className='text-base col-start-2 col-end-3 row-start-1 row-end-2 flex justify-start items-center gap-1 mt-2'>
              <h1>Joey Tribiani</h1>
              <a href=""><p className='text-zinc-400 hover:text-primary' >@joey</p></a>
            </div>
            <div className='col-start-2 col-end-3 row-start-2 row-end-3 flex justify-start flex-col gap-4'>
              <p className='mb-2'>
                melhor velocidade pra vídeos do youtube: 1.75x
              </p>
              <div className='flex justify-start gap-20 mb-4'>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 hover:text-zinc-50'>
                  <Image src={'/icons/comment.svg'} width={24} height={24} alt='comentario'></Image>
                  <p>30</p>
                </div>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 hover:text-zinc-50'>
                    <Image className='hidden lg:block' src={'/icons/Heart.svg'} width={24} height={24} alt='comentario'></Image>
                    <p className='hidden lg:block'>30</p>
                </div>
                <div className='flex flex-row gap-3 justify-center items-center text-zinc-400 mr-2 hover:text-zinc-50'>
                  <Image src={'/icons/ArrowsClockwise.svg'} width={24} height={24} alt='comentario'></Image>
                  <p>32</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main></>
  )
}
