import React from 'react'
import reactt from '../assets/reactt.png'
import streamlit from '../assets/streamlit.png'
import github from '../assets/github.png'
// import css from '../assets/css.png'
import pandas from '../assets/pandas.png'
import python from '../assets/python.png'
import html from '../assets/html.png'
import tailwind from '../assets/tailwind.png'
import flask from '../assets/flask.png'
// import { title } from 'process'

const Experience = () => {
    const techs=[
        {
            id:1,
            src:python,
            title:"Python",
            style:'shadow-yellow-500'
        },
        {
            id:2,
            src:flask,
            title:"Flask",
            style:'shadow-green-500'
        },
        {
            id:3,
            src:streamlit,
            title:"Streamlit",
            style:'shadow-red-800'
        },
        {
            id:4,
            src:pandas,
            title:"Pandas",
            style:'shadow-purple-500'
        },
        {
            id:5,
            src:html,
            title:"HTML",
            style:'shadow-orange-500'
        },
        {
            id:6,
            src:tailwind,
            title:"Tailwind",
            style:'shadow-sky-500'
        },{
            id:7,
            src:reactt,
            title:"React",
            style:'shadow-blue-600'
        },
        {
            id:8,
            src:github,
            title:"Github",
            style:'shadow-gray-500'
        }
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-1'>Experiences</p>
                <p className='py-6'>These are the technologies I have dealt with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>

                    
                </div>
                ))
            }
                
                {/* <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg '>
                    <img src={flask} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>Flask</p>

                    
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg '>
                    <img src={tailwind} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>Tailwind</p>

                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg '>
                    <img src={streamlit} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>Streamlit</p>

                    
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg '>
                    <img src={html} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>HTML</p>

                    
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Experience