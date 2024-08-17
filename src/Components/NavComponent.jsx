import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import SideMenuComponent from './SideMenuComponent';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  const [toggleMenu , setToggleMenu] = useState(false)
  const handleToggle = () =>{
    setToggleMenu((prev)=>!prev)
  }
  return (
   
 
      <nav className='p-5 flex justify-end'>
      <TiThMenu onClick={handleToggle} size={42} className='text-custom-text sm:hidden'/>
      <ul className='flex hidden sm:flex mb-10 2xl:mb-18'>
         <li className='mr-20'><Link to={'/experience'} className='text-custom-text font-semibold'>Experience</Link></li>
          <li className='mr-20'><Link className='text-custom-text font-semibold'>About</Link></li>
       </ul>
      {toggleMenu ?<SideMenuComponent handleToggle={handleToggle}/>: ""}
      
      </nav>
   

  )
}

export default NavComponent
