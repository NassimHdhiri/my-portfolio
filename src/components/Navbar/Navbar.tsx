

export default function Navbar() {
  return (
    <nav className=' sticky top-2 flex items-center justify-between  p-4 pt-0 z-50 bg-white h-14 '> 
        <h1 className='lg:ml-12 xs:-ml-2 font-bold lg:text-2xl xs:text-sm hover:cursor-pointer mt-2  whitespace-nowrap'>Hdhiri Med Nassim</h1>
          <ul className=' xs:hidden lg:absolute md:absolute lg:-right-5 lg:pr-2 lg:flex lg:justify-around w-2/6 lg:top-3'>
              <li className='hover:font-semibold hover:underline hover:cursor-pointer -ml-2'>home</li>
              <li className='hover:font-semibold hover:underline hover:cursor-pointer'>about</li>
              <li className='hover:font-semibold hover:underline hover:cursor-pointer'>portfolio</li>
              <li className='hover:font-semibold hover:underline hover:cursor-pointer'>contact</li>
          </ul>
    </nav>
  )
}
