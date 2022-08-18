import React from 'react'

const About = () => {
  return (
    <div name = 'about' className=' w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col
         justify-center w-full h-full'>
            <div className=' pb-8' >
                <p className=' text-4xl font-bold inline border-b-4
                 border-gray-500'>About</p>
            </div>
            <p className=' text-2xl mt-20'>
                Who Am I ?
            </p>
            <br />
            <p className='text-xl'>
            My name is Lasha Giorgadze. I am 22 years old, I live in Tbilisi, Georgia, and I'm a self-taught Web developer. I was studying at 
            university for three and a half years about agriculture, but I realised that it no longer gave me a pleasure to keep on going.
            Past year I shifted my focus to front-end development, which I have developed a great passion for. I enjoy the constant change in the technologies 
            used in the area and love diving into new frameworks and technologies. Spending time customizing, improving and tinkering with my work environment 
            and tools is something I enjoy a lot, as it is something I use for many hours daily. It turned out this is the thing I want to do 
            for a very long time. 
            </p>
        </div>
    </div>
  )
}

export default About