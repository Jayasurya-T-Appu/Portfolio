import React from 'react'
import './DotComponent.css'
const DotComponent = ({handleShower}) => {
  return (
   <div onClick={handleShower} className='w-4 h-4 rounded-full bg-custom-text dot__container m-4 xl:w-6 xl:h-6'>
    <div className="circle w-4 h-4 bg-custom-text rounded-full xl:w-6 xl:h-6"></div>
    <div className="circle w-4 h-4 bg-custom-text rounded-full xl:w-6 xl:h-6"></div>
    <div className="circle w-4 h-4 bg-custom-text rounded-full xl:w-6 xl:h-6"></div>
    <div className="circle w-4 h-4 bg-custom-text rounded-full xl:w-6 xl:h-6"></div>
    <div className="circle w-4 h-4 bg-custom-text rounded-full xl:w-6 xl:h-6"></div>
    <div className='bg-white white_circle'></div>
   </div>
  )
}

export default DotComponent
