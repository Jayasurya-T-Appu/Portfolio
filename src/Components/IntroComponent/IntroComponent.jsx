import React, { useEffect, useRef, useState } from 'react'
import DotComponent from '../DotComponent/DotComponent'
import { gsap } from 'gsap';
// import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";
import './IntroComponent.css'
import FlowerShowerComponent from '../FlowerShowerComponent';
const IntroComponent = () => {

  const elementsRef = useRef([]);
  useEffect(() => {
    
    gsap.fromTo(elementsRef.current, { opacity: 0}, { opacity: 1, duration: 1.3,ease: "power2.in", stagger:{each:0.5, from:'start'} });
   
  }, [elementsRef]);

  const [toggleShower, setToggleShower] = useState(false)
  const handleShower = () =>{
    setToggleShower((prev) => !prev);

    
    setTimeout(() => {
      setToggleShower(false);
    }, 10000);

  }
 
  return (

  
    <div className="intro__container">
      <h2 ref={(el) => (elementsRef.current[0] = el)} className="text-custom-text intro__greeting">Hello , It’s me !</h2>
      <div ref={(el) => (elementsRef.current[1] = el)}  className=' flex items-center'>
      <h1 className=' text-custom-text font-bold intro__name'>Jayasurya T Appu </h1>
      <DotComponent handleShower={handleShower} setToggleShower={setToggleShower}/>
      </div>
      <p ref={(el) => (elementsRef.current[2] = el)} className='text-custom-text intro__objective'>Fueled by a genuine passion for crafting captivating digital experiences, I combine creative flair, technical skills, and a meticulous eye for detail to bring websites to life with  touch of organic magic.</p>
      <button ref={(el) => (elementsRef.current[3] = el)}  className='border-solid border-2 border-custom-text text-custom-text px-16 py-2 text-2xl font-semibold rounded-full ease-in-out  hover:bg-custom-text hover:text-white intro__button'>RESUME</button>
    
    <div className='intro__social_icons' ref={(el) => (elementsRef.current[4] = el)}>
    <a href="https://www.linkedin.com/in/jayasuryatappu" target="_blank" rel="noreferrer"><FaLinkedin className='text-custom-text cursor-pointer hover:scale-105'  size={32}  /></a>
    <a href="mailto:jayasuryawebdev@gmail.com?subject=Hello%20There&body=Hi%20Jayasurya,"><BiLogoGmail className='text-custom-text cursor-pointer hover:scale-105' size={32} /></a>
    <a href="https://github.com/Jayasurya-T-Appu" target='_blank' rel="noreferrer"><FaGithubSquare className='text-custom-text cursor-pointer hover:scale-105' size={32} /></a>

    
    </div>
    {
      toggleShower ? <FlowerShowerComponent toggle={toggleShower}/>: ""
    }
    
    </div>
  )
}

export default IntroComponent
