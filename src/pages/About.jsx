import React from 'react';
import about from '../assets/img/about.png';

const About = ({ sectionRef }) => {
  return (
    <section id="about" ref={sectionRef} data-section="About" className='w-screen md:h-screen flex justify-center bg-[#fff]'>
        <div className='w-[90%] h-full '>
            {/* Top */}
            <div className='mt-35 h-[40%] flex flex-col md:flex-row justify-between items-center font-tinos'>
                {/* Left */}
                <div className='w-full h-full'>
                    <p className='text-3xl md:text-5xl font-bold'>The Future Of <span className=' md:hidden text-indigo-500'>Quality Health</span></p>
                    <p className='hidden md:block text-3xl md:text-5xl font-bold text-indigo-500'>Quality Health</p>
                    <p className='text-sm md:text-lg text-wrap mt-5 w-full md:w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae ipsa aspernatur eligendi odit iusto aperiam, dolorum perferendis! Itaque ullam provident repudiandae?</p>
                    <p className='text-sm md:text-lg text-wrap mt-5 w-full md:w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quam id sed in porro esse. Perspiciatis accusantium ipsam, possimus at odio optio ratione architecto?</p>
                </div>
                {/* Right */}
                <div className='w-full h-full overflow-hidden flex justify-center mt-5 md:mt-0'>
                    <img src={about} alt="Image" className='max-w-full max-h-full rounded-2xl'/>
                </div>
            </div>
            {/* Down */}
            <div className='mt-5 mb-5 md:mb-0 md:mt-10 h-[30%] py-2 md:py-0 rounded-2xl bg-indigo-500 flex flex-col items-center justify-center'>
               <div className=''>
                 <p className='text-xl md:text-4xl text-white text-center font-bold mb-2 md:mb-5'>Subscribe To Our Newsletter</p>
               </div>
               <div className='w-[85%] md:w-[50%] bg-[#fff] rounded-2xl flex items-center px-2 md:px-5'>
                <input type="email" placeholder='example@email.com' className='w-full p-1 md:py-2 outline-none border-none' />
                <button className='border-none outline-none text-xl md:text-2xl cursor-pointer'>➡️</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About