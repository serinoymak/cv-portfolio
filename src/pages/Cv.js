import React from 'react';
import cv from '../images/cv.jpg';

function Cv() {
  return (
    <div className="container mx-auto p-4">
      <div className='ml-0 md:ml-32'>
        <h1 className="text-2xl md:text-3xl mb-4">CV</h1>
        <span className="text-xs md:text-sm font-normal cursor-pointer">
          Here you can find information about my educational background and professional experiences. This section will 
          provide details on the projects I have worked on and the skills I have acquired.
        </span>
      </div>
      <div className="mt-4 md:mt-8 flex justify-center md:justify-start">
        <img src={cv} alt="cv" className="h-auto w-full md:w-auto md:ml-40" />
      </div>
    </div>
  );
}

export default Cv;
