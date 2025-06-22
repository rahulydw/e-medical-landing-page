import React from 'react'

const Footer = () => {
    return (
        <div className=' absolutew-screen bg-indigo-700 h-[40px] flex justify-center items-center'>
            <span className='text-white flex justify-center items-center'>&copy; {new Date().getFullYear()} All Rights reserved</span>
        </div>
    )
}

export default Footer