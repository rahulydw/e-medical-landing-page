import React from 'react'

const Footer = () => {
    return (
        <div className=' absolutew-screen bg-indigo-700 h-[40px] flex justify-center items-center'>
            <span className='text-white flex justify-center gap-1 items-center'>Designed & Developed by <a href="https://linkedin.com/in/iamrahulydw" target="_blank" rel="noopener noreferrer" className='text-white hover:underline'>Rahul Kumar</a> © {new Date().getFullYear()}</span>   
        </div>
    )
}

export default Footer