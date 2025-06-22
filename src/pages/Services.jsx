import React from 'react'
import operation from '../assets/img/operation.png';

const Services = ({ sectionRef }) => {
  const cards = [
    { icon: "🤧", title: "Covid-19 Test", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { icon: "🧠", title: "Mental Health", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { icon: "💝", title: "Heart Lungs", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { icon: "💪", title: "Workout Product", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  ]
  return (
    <section id='services' ref={sectionRef} data-section="Services" className='bg-[#fff] w-screen md:h-screen'>
      {/* Wrapper */}
      <div className='w-[90%] mx-auto border border-transparent h-full'>
        {/* Heading */}
        <h1 className='text-2xl md:text-4xl font-bold mt-10 md:mt-8 text-gray-800 font-tinos'>Our Consulting Specialists</h1>

        {/* Cards */}
        <div className='grid grid-cols-2 md:grid-cols-4 items-center justify-between gap-4 my-10 font-playfair'>
          {cards.map((items, index) => (
            // cards Container
            <div key={index} className='border border-indigo-500 rounded-2xl py-4 group hover:bg-indigo-400'>
              {/* Cards Body */}
              <div className='px-4'>
                {/* Icons */}
                <div className='text-5xl flex justify-self-start items-center p-5 my-2 rounded-full bg-sky-300'>{items.icon}</div>
                {/* title */}
                <div className='text-2xl flex justify-start font-bold group-hover:text-white'>{items.title}</div>
                {/* description */}
                <div className='text-sm flex justify-start truncate md:text-wrap w-full md:w-[80%] pb-4 pt-2 group-hover:text-white'>{items.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Why You Choose Us? */}
        <div className='w-full justify-between md:gap-10 flex flex-col md:flex-row'>
            {/* Left Box */}
            <div className='w-full md:py-5'>
              <img src={operation} alt="" className='rounded-2xl' />
            </div>
            {/* Right Box */}
            <div className='w-full py-5'>
              <h1 className='text-2xl md:text-3xl font-bold text-gray-800 md:pb-5 font-tinos'>Why You Choose Us?</h1>
              <ul className='pl-10 py-5 text-sm md:text-lg list-disc font-playfair'>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              </ul>
              <a href="#"><span className='text-sky-400 hover:text-indigo-600 font-tinos'>Learn More ➡️</span></a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services