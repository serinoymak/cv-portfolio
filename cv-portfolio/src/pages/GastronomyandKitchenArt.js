import React from 'react';
import gastronomy1 from '../images/gastronomy1.png';
import gastronomy2 from '../images/gastronomy2.png';
import gastronomy3 from '../images/gastronomy3.png';
import gastronomy4 from '../images/gastronomy4.png';
import gastronomy5 from '../images/gastronomy5.png';
import gastronomy6 from '../images/gastronomy6.png';
import gastronomy7 from '../images/gastronomy7.png';
import gastronomy8 from '../images/gastronomy8.png';

function GastronomyandKitchenArt() {
  const images = [
    gastronomy1,
    gastronomy2,
    gastronomy3,
    gastronomy4,
    gastronomy5,
    gastronomy6,
    gastronomy7,
    gastronomy8,
  ];

  return (
    <div className="container mx-auto p-4">
      <div className='ml-10 mb-20'>
        <h1 className="text-3xl mb-4">Gastronomy and Kitchen Art</h1>
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

export default GastronomyandKitchenArt;
