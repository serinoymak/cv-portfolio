import React from 'react';
import ImageCard from '../components/ImageCard';
import housingFloor0 from '../images/housingFloor0.png';
import housingFloor1 from '../images/housingFloor1.png';
import housingFloor2 from '../images/housingFloor2.png';
import housing1 from '../images/housing1.jpg';
import housing2 from '../images/housing2.jpg';
import housing3 from '../images/housing3.jpg';
import housing4 from '../images/housing4.jpg';
import housing5 from '../images/housing5.jpg';

function HousingNazilli() {
  const cardData = [
    { image: housingFloor0, description: '3D Plan - Ground Floor' },
    { image: housingFloor1, description: '3D Plan - First Floor' },
    { image: housingFloor2, description: '3D Plan - Second Floor' },
    { image: housing1, description: '3D Model' },
    { image: housing2, description: '3D Model' },
    { image: housing3, description: '3D Model' },
    { image: housing4, description: '3D Model' },
    { image: housing5, description: '3D Model' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Housing, Nazilli</h1>
        <div className="flex items-center">
          <span className="text-sm font-normal cursor-pointer mr-2">Project Renders</span>
          <span className="text-lg font-semibold">→</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <ImageCard key={index} image={card.image} description={card.description} />
        ))}
      </div>
    </div>
  );
}

export default HousingNazilli;
