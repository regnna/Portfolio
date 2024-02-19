import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from "react-scroll"


const NavBar = () => {
    const [nav,setNav]=useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "experience",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "about",
        },
        {
            id: 5,
            link: "contact",
        },
    ];
  return (
    <div className="flex pt-15 justify-between items-center  w-full h-[5vw] px-[3vw]  md:pt-[3dvh] lg:pt-[1dvh] w-screen-30:pt-[1dvh] bg-black fixed">
        <div >
            <div className="text-5xl pt-15 font-signature  text-yellow-100">
                <h1 className='animate-pulse  md:mt-0 lg:mt-0'>Ritam Chatterjee</h1>
            </div>
        </div>
        
            <ul className='hidden md:flex'>
            {links.map(({id,link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-yellow-200 hover:scale-125 duration-200 hover:text-orange-300'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))} 
            </ul>
            
            <div onClick={()=> setNav(!nav)} className='cursor-pointer mt-11 pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
            </div>
           {nav && (
            <ul className=' flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {links.map(({ id,link }) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-8 text-4xl'>
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-yellow-200 hover:scale-105 duration-200'>
                    <Link onClick={()=>setNav(false)} to={link} smooth duration={500}>{link}</Link>
                </li>
                </li>
            ))} 
            </ul>
            )}

            
            
        
    </div>
  );
};

export default NavBar