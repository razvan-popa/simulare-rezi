import Contact from '../components/Contact'
import Image from 'next/image'
import logo from '../public/logo_fsmdr.png'

export default function Home() {
  return (
    // Main Wrapper
    <div className="flex flex-col items-center justify-center w-screen h-screen p-4 text-gray-700 font-Poppins">
      
      {/* Main content - logo, titlu, creatori */}
      <main className='flex flex-col items-center justify-center flex-1 space-y-4'>

        {/* Logo - App icon format */}
        <div class="relative select-none bg-white rounded-3xl p-2 h-28 w-28 shadow-md hover:shadow-2xl flex justify-center items-center group transform hover:scale-110 hover:bg-fsmdr transition duration-500 ease-in-out cursor-pointer">
          <Image src={logo}></Image>
          <div class="absolute h-4 w-4 -top-1 -right-1 rounded-full animate-ping bg-fsmdr group-hover:bg-transparent"></div>
        </div>

        {/* Title */}
        <h1 className='text-3xl font-extrabold text-center'>
          Simularea <br/>
          <span className='text-fsmdr'>EXAMENULUI DE REZIDENȚIAT</span>
        </h1>

        {/* Subtitle */}
        <p>
          by <a className='font-bold transition ease-in-out hover:text-fsmdr' href="https://fsmdr.ro">FSMDR</a> x <a href="https://grile.ro" className='font-bold transition ease-in-out hover:text-fsmdr'>grile.ro</a>
        </p>
      </main>

      {/* Footer - contact */}
      <footer className='flex flex-col items-center p-4 space-y-3 text-xs font-light text-gray-500'>
        
        {/* Extra contact - Desktop format */}
        <p className='hidden text-center sm:block'>Pentru orice informații sau nelămuriri, ne poți scrie la <a className='underline underline-offset-4' href="mailto:contact@fsmdr">contact@fsmdr.ro</a></p>

        {/* Phone Contact */}
        <div className='flex flex-col space-y-3 sm:space-y-0 sm:space-x-4 sm:flex-row'>
          <Contact phone='+40770855191' role='COORDONATOR' name='Răzvan Popa'></Contact>
          <Contact phone='+40722501975' role='ORGANIZATOR' name='Radu Ionescu'></Contact>
        </div>

        {/* Extra contact - Mobile format */}
        <p className='text-center sm:hidden'>Pentru orice informații sau nelămuriri, ne poți scrie la <a className='underline underline-offset-4' href="mailto:contact@fsmdr">contact@fsmdr.ro</a></p>
        
      </footer>

    </div>
  )
}
