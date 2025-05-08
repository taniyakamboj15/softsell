import React from 'react'
import ThemeChanger from './ThemeChanger'

const Header = () => {
  return (
    <div className='w-full flex flex-row justify-between px-6 md:px-18 bg-gradient-to-b h-14 md:h-20  from-black z-10 top-0 fixed items-center '><div>logo</div><div><ThemeChanger /></div></div>
  )
}

export default Header