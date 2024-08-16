import React from 'react';
import shellStructure1 from '../images/shellStructure1.png';
import shellStructure2 from '../images/shellStructure2.png';

function ShellStructure() {
  const images = [
    shellStructure1,
    shellStructure2,
  ];

  return (
    <div className="container mx-auto p-4">
      <div className='ml-10 mb-20'>
        <h1 className="text-3xl mb-4">Shell Structure</h1>
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

export default ShellStructure;
