import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (

    /*
      O Layout foi dividido em 3 partes: Main (onde fica o visual das playlists), 
      Asisde (onde fica o nome das playlist e dados do assinante do spotify), e o Footer. 
    */

   <div className='h-screen flex flex-col'>

    <div className='flex flex-1'>
      <aside className='w-72 bg-zinc-950 p-6'>

        <div className='flex flex-1 items-center gap-2'>
          <div className='w-3 h-3 bg-red-500 rounded-full'/>
          <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
          <div className='w-3 h-3 bg-green-500 rounded-full'/>
        </div>

        <nav className='space-y-5 mt-10'>
          <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
            <HomeIcon />
            Home
          </a>
          <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'> 
            <Search  />
            Search
          </a>
          <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
            <Library />
            Library
          </a>
        </nav>

        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>

          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>Solta o House</a>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>Marília Mendonça</a>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>Reggae</a>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>2019</a>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>2018</a>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>Mariah Carey</a>
          <a href=''className='text-sm text-zinc-400 hover:text-zinc-100'>Variadinhos 1</a>

        </nav>

      </aside>
      <main className='flex-1 p-6'>
        <div className='flex items-center gap-2'>

          <button className='rounded-full bg-black/40 p-2'>
            <ChevronLeft /> 
          </button>

          <button className='rounded-full bg-black/40 p-2'>
            <ChevronRight />
          </button>

        </div>

        <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

        <div className='grid grid-cols-3 gap-4 mt-4'>

          <a href="#" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
            <Image src='/playlist.jpg' alt='Playlist' width={104} height={104} />
            <strong>Hits around the world</strong>
            <button className='w-12 h-12 items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible '>
              <Play />
            </button>
          </a>
          <a href="#" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
            <Image src='/playlist.jpg' alt='Playlist' width={104} height={104} />
            <strong>Hits around the world</strong>
            <button className='w-12 h-12 items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible '>
              <Play />
            </button>
          </a>
          <a href="#" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
            <Image src='/playlist.jpg' alt='Playlist' width={104} height={104} />
            <strong>Hits around the world</strong>
            <button className='w-12 h-12 items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible '>
              <Play />
            </button>
          </a>
          <a href="#" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
            <Image src='/playlist.jpg' alt='Playlist' width={104} height={104} />
            <strong>Hits around the world</strong>
            <button className='w-12 h-12 items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible '>
              <Play />
            </button>
          </a>
          <a href="#" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
            <Image src='/playlist.jpg' alt='Playlist' width={104} height={104} />
            <strong>Hits around the world</strong>
            <button className='w-12 h-12 items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible '>
              <Play />
            </button>
          </a>
          <a href="#" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
            <Image src='/playlist.jpg' alt='Playlist' width={104} height={104} />
            <strong>Hits around the world</strong>
            <button className='w-12 h-12 items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible'>
              <Play />
            </button>
          </a>

        </div>

        <h2 className='font-semibold text-2xl mt-10'>Made for Jônatas Camelo</h2>

        <div className='grid grid-cols-8 gap-4 mt-4'> 
          <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src='/playlist.jpg' className='w-full' alt='Playlist' width={120} height={120} />
            <strong>Daily Mix</strong>
            <span className='text-xs text-zinc-400'>Jessi Ware, Taylor Swift, Ariana Grande and more</span>
          </a>
          <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src='/playlist.jpg' className='w-full' alt='Playlist' width={120} height={120} />
            <strong className='font-semibold' >Daily Mix</strong>
            <span className='text-xs text-zinc-400'>Jessi Ware, Taylor Swift, Ariana Grande and more</span>
          </a>
          <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src='/playlist.jpg' className='w-full' alt='Playlist' width={120} height={120} />
            <strong>Daily Mix</strong>
            <span className='text-xs text-zinc-400'>Jessi Ware, Taylor Swift, Ariana Grande and more</span>
          </a>
          <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src='/playlist.jpg' className='w-full' alt='Playlist' width={120} height={120} />
            <strong>Daily Mix</strong>
            <span className='text-xs text-zinc-400'>Jessi Ware, Taylor Swift, Ariana Grande and more</span>
          </a>
          <a className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src='/playlist.jpg' className='w-full' alt='Playlist' width={120} height={120} />
            <strong>Daily Mix</strong>
            <span className='text-xs text-zinc-400'>Jessi Ware, Taylor Swift, Ariana Grande and more</span>
          </a>
        </div>
      </main>
    </div>

    <footer className='bg-zinc-800 border-zinc-700 p-6 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <Image src='/playlist.jpg' alt='Playlist' width={80} height={80} />
        <div className='flex flex-col'>
          <strong>What's your pleasure?</strong>
          <span>Jessie Ware</span>
        </div>
      </div>

      <div>

      </div>

      <div>

      </div>
    </footer>

   </div>
  )
}
