export default function Layout ({ children }) {
  return (
    <>
      <nav className='w-full text-white fixed top-0 mt-8'>
        <ul className='font-bold text-xl flex gap-7 justify-center'>
          <li>
            <a href='#home'>Terapeuta IA</a>
          </li>
          <li>
            <a href='#about'>¿Qué es?</a>
          </li>
          <li>Contacto</li>
        </ul>
      </nav>
      <main className='max-h-screen overflow-auto'>
        <div className='max-w-xl mx-auto'>
          {children}
        </div>
      </main>
      <footer>
        <p className='text-center text-gray-500 text-sm'>
          © {new Date().getFullYear()} - Made with love by{' '}
          <a
            className='text-blue-500 hover:text-blue-600'
            href='https://andresflorez.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Andrés Florez
          </a>
        </p>
      </footer>
    </>
  )
}
