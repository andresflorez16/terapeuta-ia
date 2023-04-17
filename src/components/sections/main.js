import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MainSection () {
  return (
    <section className='min-h-screen grid place-items-center' id='home'>
      <header>
        <h1 className={`${inter.className} font-bold text-2xl`}>Terapeuta IA</h1>
        <p>Un Terapeuta de IA es una aplicación que utiliza tecnología de inteligencia artificial para ofrecer servicios de apoyo psicológico y terapéutico.</p>
      </header>
      <div className='mt-10'>
        <div className='w-1/2 h-56 mx-auto p-2 bg-slate-200 rounded-sm flex flex-col justify-between items-center'>
          <h2 className='text-white bg-slate-900 p-2 rounded-sm'>Hola, voy a ser tu terapeuta IA, quisiera saber tú nombre:</h2>
          <input
            className='w-full h-10 p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black'
            type='text'
            placeholder='Escribe tu nombre'
          />
        </div>
      </div>
    </section>
  )
}
