export default function Layout ({ children }) {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <nav className='w-full text-white'>
        <ul className='font-bold text-xl flex gap-7 justify-center'>
          <li>Terapeuta IA</li>
          <li>Sobre nosotros</li>
          <li>Contacto</li>
        </ul>
      </nav>
      {children}
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
    </main>
  )
}
