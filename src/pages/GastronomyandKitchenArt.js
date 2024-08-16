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
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Gastronomy and Kitchen Art</h1>
        <div>
          <span className="text-sm font-normal cursor-pointer mr-2">Project Overview</span>
          <span className="text-lg font-semibold">→</span>
        </div>  
        <div className="flex justify-center items-center">
          <span className="text-xs font-normal cursor-pointer mr-2">To address the scarcity and high cost of Asian cuisine 
            locally, we designed a space featuring four tasting areas in two sections, with different dishes in each. Guests 
            can sample food on the ground floor and continue dining on the first floor, where dishes are transported by 
            elevators and served by waitstaff. The project aims to create a festival-like environment celebrating gastronomy 
            and kitchen arts, offering a unique experience for the public, experts, and students, with a central axis guiding 
            visitors through key areas.</span>
        </div>
      </div>
      
      <div className="flex flex-col space-y-4">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img src={image} alt={`Gastronomy ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GastronomyandKitchenArt;
