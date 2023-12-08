import React, { useState } from 'react'
import Hamburger from '../images/icon-menu.svg'
import Close from '../images/icon-menu-close.svg'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
function Navbar() {
 const [nav, setNav] = useState(false)
const handleNav = () => {
  setNav(!nav)
}
  return (
    <div>
         <div className='flex flex-row justify-between md:ml-12 ml-0 mx-12 md:mx-0 items-center pt-6'>
    <img src={logo} alt='logo' className='ml-6 md:ml-0'/>
  <div className='flex md:flex-row flex-col md:space-x-14 md:space-y-0 space-y-12 space-x-0 text-darkGrayishBlue hidden md:flex'>
      <Link to='/'  className='hover:text-softRed'>Home</Link>
      <Link to='/'  className='hover:text-softRed'>New</Link>
      <Link to='/'  className='hover:text-softRed'>Popular</Link>
      <Link to='/'  className='hover:text-softRed'>Trending</Link>
      <Link to='/'  className='hover:text-softRed'>Categories</Link>
    </div>
    <div onClick={handleNav} className='block md:hidden md:pt-0 pt-6 ml-40 md:ml-0'>
    { !nav ? <img src={Close} alt='close' />:  <img src={Hamburger} alt='hamburger'/>}
   
    </div>
    <div className={!nav ? 'fixed left-0 top-0 w-[80%] h-full border-r p-8 border-r-gray-500 bg-offWhite md:hidden': 'fixed left-[-100%]'}>
      <ul className='flex flex-col pt-24 md:pt-0 space-y-6'>
       <Link to='/'  className='hover:text-softRed'>Home</Link>
      <Link to='/'  className='hover:text-softRed'>New</Link>
      <Link to='/'  className='hover:text-softRed'>Popular</Link>
      <Link to='/'  className='hover:text-softRed'>Trending</Link>
      <Link to='/'  className='hover:text-softRed'>Categories</Link>
      </ul>
    </div>
</div>
    </div>
  )
}

export default Navbar
