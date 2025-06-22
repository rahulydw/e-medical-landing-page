import React from 'react'
import doctor from "../assets/img/doctor.png"

const Home = ({ sectionRef }) => {
    const MenuList = [
        { name: "Home", link: "#" },
        { name: "Services", link: "#services" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "About", link: "#about" },
    ];
    // Bottom Statics:
    const statics = [
        { value: "24/7", title: "Online Support" },
        { value: "100+", title: "Doctor" },
        { value: "1M+", title: "Active Patients" },
    ];
    return (
        <section id='#' ref={sectionRef} data-section="Home" className='relative w-screen min-h-screen flex flex-col items-center bg-sky-100 font-tinos'>
            {/* Navbar */}
            {/* Hero Section */}
            <div className='w-[90%] flex-1 flex md:flex-row'>
                {/* Left */}
                <div className='w-full md:flex-1 flex justify-start md:items-center mt-30 md:mt-0 '>
                    {/* slogan & SerachBtn */}
                    <div className='w-full'>
                        {/* Heading-Wrapper */}
                        <div className='text-4xl md:text-5xl lg:text-7xl font-bold font-stretch-100%'>
                            {/* Heading-part-1 */}
                            <h1>
                                Find & Search Your
                            </h1>
                            {/* Heading-part-2 */}
                            <h1>
                                <span className='text-sky-400 '>Favourite</span>&nbsp;Doctor
                            </h1>
                            {/* Slogan-1 */}
                        </div>
                        <p className='py-4 text-wrap w-[100%] md:w-[80%] text-sm md:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quisquam vitae accusantium doloremque iure maxime.</p>
                        {/* Search & Select */}
                        <div className='relative w-full md:py-2 mt-5 md:mt-10 rounded-4xl z-25 bg-[#fff] flex justify-between items-center px-2'>
                            {/* Select Doctors */}
                            <div className='flex items-center justify-center cursor-pointer [&>*]:cursor-pointer'>
                                <label htmlFor="name">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor"
                                        className="w-6 h-6 text-gray-700">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M4.5 20.25a8.25 8.25 0 0115 0" />
                                    </svg>

                                </label>
                                <select name="" id="name">
                                    <option value="">Doctor's Name</option>
                                    <option value="">Test1</option>
                                    <option value="">Test2</option>
                                    <option value="">Test3</option>
                                </select>
                            </div>
                            {/* Location */}
                            <div className='flex items-center justify-center cursor-pointer [&>*]:cursor-pointer'>
                                <label htmlFor="location">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor"
                                        className="w-6 h-6 text-red-500">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>

                                </label>
                                <select name="" id="location">
                                    <option value="">Location</option>
                                    <option value="">Test1</option>
                                    <option value="">Test2</option>
                                    <option value="">Test3</option>
                                </select>
                            </div>
                            {/* Search Btn */}
                            <button className='relative rounded-full border p-2 bg-sky-500 text-white cursor-pointer [&>*]:cursor-pointer hover:bg-indigo-600'>
                                🔍
                            </button>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className=' md:block lg:w-full lg:flex-1'>
                    <div className='absolute w-[60%] md:w-[55%] h-[30%] md:h-[50%] bottom-[80px] right-4 backdrop-blur-2xl bg-sky-400 rounded-t-full z-0'></div>
                    <img src={doctor} alt="doctorIcon" className='absolute right-0 bottom-25 md:bottom-0 w-[90%] md:w-[60%] h-[35%] md:h-full z-20' />
                </div>
            </div>
            {/* Bottom Section */}
            <div className='w-full h-[100px] bg-indigo-600 z-10 flex justify-center'>
                {/* Statics value */}
                <div className='w-[90%] flex justify-start h-full items-center'>
                    <div className='w-full md:w-1/2'>
                        <ul className='flex justify-between items-center'>
                            {statics.map((items, index) => (
                                <li key={index} className='text-center'>
                                    <span className='text-2xl lg:text-5xl text-white font-bold'>{items.value}</span><br />
                                    <span className='text-sky-400 text-md'>{items.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home