import React from 'react';
import urbanMemory1 from '../images/urbanMemory1.png';
import urbanMemory2 from '../images/urbanMemory2.png';
import urbanMemory3 from '../images/urbanMemory3.png';
import urbanMemory4 from '../images/urbanMemory4.png';
import urbanMemory5 from '../images/urbanMemory5.png';
import urbanMemory6 from '../images/urbanMemory6.png';
import urbanMemory7 from '../images/urbanMemory7.png';
import urbanMemory8 from '../images/urbanMemory8.png';

function UrbanMemory() {
    const images = [
    urbanMemory1,
    urbanMemory2,
    urbanMemory3,
    urbanMemory4,
    urbanMemory5,
    urbanMemory6,
    urbanMemory7,
    urbanMemory8,
  ];

  return (
    <div className="container mx-auto p-4">
      <div className='ml-10 mb-20'>
        <h1 className="text-3xl mb-4">Deconstruction the Urban Memory</h1>
        <span className="text-sm font-normal cursor-pointer mb-24">Project Overview</span>
        <span className="text-lg font-semibold ml-2">→</span>
      </div> 
      
      <div className="flex flex-col space-y-6">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img src={image} alt={`Urban Memory ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UrbanMemory;
