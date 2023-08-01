import React from 'react'
import search from '../assets/portfolio/search.png'
import w_chat from '../assets/portfolio/w_chat.png'
import blog from '../assets/portfolio/blog.png'
import weather from '../assets/portfolio/weather.png'
import CWP from '../assets/portfolio/CWP.png'
import MRS from '../assets/portfolio/MRS.png'
import cwpd from '../assets/cwpd.png'

function LinkButton(props) {
  const handleLinkClick = () => {
    window.open(props.link, '_blank'); // using _blank to open in a new tab
  };

  return (
    <button onClick={handleLinkClick}>{props.linkText}</button>
  );
}

const Portfolio = () => {
  
    const portfolios =[
  {
    id: 1,
    src: search,
    demo: "https://regnna-semantic-search-using-gpt-main-op2cli.streamlit.app/",
    code: "https://github.com/regnna/semantic-search-using-GPT"
  },
  {
    id: 2,
    src: w_chat,
    demo: "https://regnna-semantic-search-using-gpt-main-op2cli.streamlit.app/",
    code: "https://github.com/regnna/semantic-search-using-GPT"

  },
  {
    id: 3,
    src: blog,
    demo: "https://flask-social.onrender.com",
    code: "https://github.com/regnna/blog"

  },
  {
    id: 4,
    src: weather,
    demo: "https://weathers-r142.onrender.com",
    code: "https://github.com/regnna/react-weather-reports"
  },
  {
    id: 5,
    src: cwpd,
    demo: "https://huggingface.co/spaces/Regnna/CHAT-WITH-PDFs",
    code: "https://github.com/regnna/chat-with-PDFs"

  },
  {
    id: 6,
    src: MRS,
    demo: "https://github.com/regnna/movies_recommendation",
    code: "https://github.com/regnna/movies_recommendation"

  },
  
]
  return (
    <div name="portfolio" className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
  <div className='pb-5'> 
    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>portfolio</p>
    <p className='py-6'>Check out some of my work, right here :-)</p>
  </div>

  <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-8 mb-12'>
{
portfolios.map(({id,src,demo,code})=>(
  

    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
  <img  src={src}  alt="" className='rounded-md duration-200 hover:scale-105'/>
<div className='flex items-center justify-center'>
<button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' ><LinkButton link={demo} linkText='Demo' /> </button>
<button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' ><LinkButton link={code} linkText='Code' /></button>
            
            
</div>
    </div>
    
 
))
}

</div>
</div>
</div>
  )
}

export default Portfolio