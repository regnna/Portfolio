import React from 'react'
import HeroImage from "../assets/HeroImage.png";
import Hero from "../assets/Hero.png";
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
// import Portfolio from './Portfolio';
import { Link } from 'react-scroll';

const Home = () => {
  const typeDataStrings = [
    "Passionate Coder",
    "Full Stack Developer",
    "Web Developer",
    "Backend Developer",
    "Learner",
    "Data vigilante",
  ];
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full my-6 '>
                <h2 className='sm:my-100 text-4xl sm:text-7xl  font-bold text-yellow-50 justify-center px-3 my-6'>HI!, Ritam here </h2>
                <h2 className=' text-2xl sm:text-2xl   text-yellow-50 justify-center px-6 my-6'> I'm a <span><Typed
          strings={typeDataStrings}
          typeSpeed={100}
          backSpeed={80}
          backDelay={1000}
          loop
        /></span></h2>
                <p className='text-gray-500 py-4 max-w-md'>
                  
                Machine Learning Enthusiast | AI Devotee | Problem Solver | Front-End Developer | Python Developer | Spring-Boot Seasoned
                </p>
                <div>
                
                <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-lime-400 to-cyan-500 cursor-pointer '>
                Portfolio
                     <span className='group-hover:rotate-90 duration-300'><MdKeyboardDoubleArrowRight size={25} className='ml-1'/></span>
                </Link>
                
                </div>
            </div>

            <div className='my-23  transition-all duration-1000 p-10 mx-9 '>
                <img src={HeroImage} alt='my Profile' className='rounded-2xl ml-auto mx-auto my-auto h-auto w-2/3 md:w-full sm:my-5'></img>
            </div>
        </div>
        
    </div>
  )
}

export default Home