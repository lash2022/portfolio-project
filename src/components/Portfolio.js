import React from 'react'
import moviefy from "../assets/portfolio/moviefy.png";
import chesssignup from "../assets/portfolio/chess-signup.png";
import game from "../assets/portfolio/game.png";
import calculator from "../assets/portfolio/calculator.png";
import agriculture from "../assets/portfolio/agriculture.png";
import reactWeather from "../assets/portfolio/reactWeather.png";

const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          src: moviefy,
          demoLink: null,
          gitLink: 'https://github.com/lash2022/movies-project',
          stacks: 'React, Redux, Axios'
        },
        {
          id: 2,
          src: game,
          demoLink: 'https://guileless-lamington-f35bf7.netlify.app',
          gitLink: 'https://github.com/lash2022/dice',
          stacks: 'HTML, CSS, JS'
        }
        ,
        {
          id: 3,
          src: chesssignup,
          demoLink: 'https://subtle-seahorse-8a0242.netlify.app',
          gitLink: 'https://github.com/lash2022/redb-assignment',
          stacks: 'React, Axios'
        },
        {
          id: 4,
          src: agriculture,
          demoLink: 'https://resonant-donut-98a391.netlify.app/',
          gitLink: 'https://github.com/lash2022/agro-project',
          stacks: 'React, React-Router'
        },
        {
          id: 5,
          src: calculator,
          demoLink: 'https://fantastic-bublanina-487832.netlify.app',
          gitLink: 'https://github.com/lash2022/Calculator',
          stacks: 'HTML, CSS, JS'
        }
        ,
        {
          id: 6,
          src: reactWeather,
          demoLink: 'https://singular-bublanina-8a118b.netlify.app',
          gitLink: 'https://github.com/lash2022/weather-forecast',
          stacks: 'React'
        },
      ];
  return (
    <div name = "portfolio" className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col
         justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold 
                inline border-b-4 border-gray-500 '>Portfolio</p>
                <p className=' py-6 '>Check some of my work here</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
                px-12 sm:px-0'>
                    {portfolios.map(({id,src,demoLink,gitLink,stacks}) => (
                        
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg cursor-pointer'>
                          <div className=' relative'>
                            <img src={src} alt=""  className='  rounded-md
                                duration-200 hover:scale-105'/>
                                <p className=' absolute top-36 left-3 font-bold text-xl '>{stacks}</p>
                          </div>
                                <div className='flex items-center justify-center'>
                                <button className=' w-1/2 px-6 m-4 duration-200
                                    hover:scale-105'><a href={demoLink}>Demo</a> </button>
                                <button className=' w-1/2 px-6 m-4 duration-200
                                    hover:scale-105'><a href={gitLink}>Code</a> </button>
                            </div>
                        </div>
                    
                     ))}
                </div>
            
        </div>
    </div>
  )
}

export default Portfolio