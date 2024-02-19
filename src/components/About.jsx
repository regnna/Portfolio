import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='flex justify-center pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-yellow-200'>
                    About
                </p>
            </div>
            <div className='items-center'>
            <p className='text-xl mt-15 '>
              I am Ritam Chatterjee from West Bengal, India
              <br/>
              {/* <br/><div class="w-screen-35 bg-blue-300">
 <p>Hello world its slg</p>
</div> */}

              I'm persuing my Btech from Haldia Institute of Technlogy in the field of Cmputer Science Engineering with 9.41 CGPA
              <br/>
              I have complited my Higher Secondary from Bankura Goenka vidyayatan with 87.8% with PCM background
              <br/>
              And I obtained 91.9% on my 10th from the same 
              <br/>
              My goto language is Python, I'm currently passonate on the field of Machine learning, Deep Learning and Data analysis
              <br/> 
              Playing chess,updating myself with latest Technlogy, latest entertainment are among my hobbies .
              
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum */}
            </p>
            </div>
            {/* <br/>
            <p className='text-xl '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p> */}
        </div>

    </div>
  )
}

export default About