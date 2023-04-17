import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AboutSection () {
  return (
    <section className='min-h-screen grid place-items-center' id='about'>
      <header>
        <h1 className={`${inter.className} font-bold text-2xl`}>¿Qué es un Terapeuta de IA?</h1>
        <p>Un Terapeuta de IA es una aplicación que utiliza tecnología de inteligencia artificial para ofrecer servicios de apoyo psicológico y terapéutico.</p>
      </header>
    </section>
  )
}
