import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='flex justify-center pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-yellow-200 '>Contact With Me</p>
                </div>
                
                

            <div className=' flex justify-center items-center'>
                <form action='https://getform.io/f/20da7912-39d0-46fb-b4ff-d9c61e31cf7e' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type='text' name='Email' placeholder='Enter your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' required/>
                    <textarea name='message'  rows="10" placeholder='Enter your Message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' required></textarea>
                    <button className='text-slate-950 font-bold bg-gradient-to-b from-yellow-500 via-yellow-100 to-orange-600  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'> Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact