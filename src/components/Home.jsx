import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import { useState } from 'react';
import { Link } from 'react-scroll';
import myImage from '../assets/myImage.png';


const Home = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
    <div name='home' className='w-full h-screen  bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

           <img data-aos="fade-right" src={myImage} className='rounded-full w-[150px] h-[150px] flex justify-center' alt="my iamge" />
            <p data-aos="fade-up" data-aos-delay="100" className='text-xl text-pink-400'>Hi, my name is </p>
            <h1 data-aos="fade-up" data-aos-delay="200" className='text-4xl sm:text-6xl font-bold text-yellow-400 '>Muhammed Bello</h1>
            <h2 data-aos="fade-up" data-aos-delay="300" className='text-4xl sm:text-6xl font-bold text-[#fff]'> I`m a FullStack Developer</h2>
            <p data-aos="fade-up" data-aos-delay="400" className='text-pink-300  max-w-[700px]'>I`m a full-Stack developer fueled by a passion for crafting user-friendly and visually captivating websites. i`m a detail-oriented, collaborative, results-driven, problem-solver who thrives on creating solutions that meet both user needs and business objectives. </p>
            <p data-aos="fade-up" data-aos-delay="500" className='text-pink-300 max-w-[700px]'>
                i`ve honed myself my skills in these echnologies: "html5, CSS3, javascript, Node.js, and javascript Frameworks working with various technologies with API(REST, GraphQl...), Backend development, cloud technologies..."
            </p>
            <p data-aos="fade-up" data-aos-delay="600" className='text-pink-300 max-w-[700px]'>
                I have more than 2 years of Experience building responive websites, e-commerce platforms, and web applications, user-centered design. 
            </p>

            <div data-aos="fade-up" data-aos-delay="700">
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-yellow-600'>
            <Link onClick={handleClick}  to='work' smooth={true} duration={500}>
            View Work 
            </Link>
                <span className='group-hover:rotate-90 duration-200'><HiArrowNarrowRight className='ml-3' /></span></button>
            </div>

        </div>
      
    </div>
  )
}
    
export default Home

