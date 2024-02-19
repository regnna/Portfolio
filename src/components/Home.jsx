import React from 'react'
import HeroImage from "../assets/profile-pic (1).png";
import Typed from 'react-typed';

import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
// import Portfolio from './Portfolio';
import { Link } from 'react-scroll';

const Home = () => {
  const typeDataStrings = [
    "Passionate Coder",
    "Machine Learning Enthusiast",
    "Python Developer ",
    "Problem Solver",
    "Technology Aficionado",
    "Data vigilante",
    "AI Devotee",
    "Front-End Developer"
  ];
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center   '>
                <h2 className=' lg:text-4xl text-4xl  font-bold text-yellow-50 justify-center w-screen-50:mt-[47vh] '>Hey!, Ritam here </h2>
                <h2 className=' text-2xl sm:text-2xl   text-yellow-50 justify-center  py-6'> I'm a <span><Typed
                  strings={typeDataStrings}
                  typeSpeed={100}
                  backSpeed={80}
                  backDelay={1000}
                  loop
                        /></span></h2>
                <p className='text-gray-500 py-4 max-w-md'>
                I'm a Computer Science student and here is my portfolio website. Here you'll learn about my journey till now. 
                </p>
                <div>
                
                <Link to="portfolio" smooth duration={500} className=' md:animate-bounce group  w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-yellow-500 via-yellow-100 to-orange-600 cursor-pointer text-slate-950 font-bold'>
                Portfolio
                     <span className='group-hover:rotate-90 duration-300'><MdKeyboardDoubleArrowRight size={25} className='ml-1'/></span>
                </Link>
                
                </div>
            </div>

            <div className='my-23  transition-all duration-1000 p-10 rounded-xl '>
                <img src={HeroImage} alt='my Profile' className=' rounded-2xl ml-auto mx-auto my-auto h-auto w-2/3 md:w-full md:pl-[4dvw] md:ml-[4dvw] '></img>
            </div>
            
        </div>
        
    </div>
  )
}

export default Home