import React from 'react'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
const SideMenuComponent = ({handleToggle}) => {
  return (
    <div className='h-full w-full bg-custom-text absolute p-5 top-0 right-0'>
        <div className='w-full flex justify-end'>
        <IoClose onClick={handleToggle} size={42} className='text-custom-bg'/>
        </div>
        <ul className='h-4/6 mt-10 flex flex-col justify-center'>
            <li className='text-center my-10'><Link to={"/experiance"} className='text-6xl text-custom-bg font-bold'>Experiance</Link></li>
            <li className='text-center my-10'><Link to={"/contact"} className='text-6xl text-custom-bg font-bold'>Contact</Link></li>
            <li className='text-center my-10'><Link to={"/about"} className='text-6xl text-custom-bg font-bold'>About</Link></li>
        </ul>
        
      
    </div>
  )
}

export default SideMenuComponent
