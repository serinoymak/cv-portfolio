import React from 'react'
import cv from '../images/cv.jpg'

function Cv() {
  return (
    <div className="container mx-auto p-4 pl-20">
        <div className='ml-32'>
            <h1 className="text-3xl mb-4">CV</h1>
            <span className="text-sm font-normal cursor-pointer">Here you can find information about my educational 
              background and professional experiences. In this section, you can see which projects I have worked on and 
              the skills I have acquired.</span>
        </div>
        <div>
        <img src={cv} alt="cv" className="mr-4 h-auto ml-40" />
        </div>
    </div>
  )
}

export default Cv
