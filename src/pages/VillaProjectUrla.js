import React from 'react';
import ImageCard from '../components/ImageCard';
import urlaExterior1 from '../images/urlaExterior1.jpg';
import urlaExterior2 from '../images/urlaExterior2.jpg';
import urlaInterior1 from '../images/urlaInterior1.jpg';
import urlaInterior2 from '../images/urlaInterior2.jpg';
import urlaInterior3 from '../images/urlaInterior3.jpg';
import urlaInterior4 from '../images/urlaInterior4.jpg';
import urlaInterior5 from '../images/urlaInterior5.jpg';
import urlaInterior6 from '../images/urlaInterior6.jpg';

function VillaProjectUrla() {
  const cardData = [
    { image: urlaExterior1, description: 'Exterior' },
    { image: urlaExterior2, description: 'Exterior' },
    { image: urlaInterior1, description: 'Salon' },
    { image: urlaInterior2, description: 'Bedroom' },
    { image: urlaInterior3, description: 'Salon' },
    { image: urlaInterior4, description: 'Entrance' },
    { image: urlaInterior5, description: 'Bathroom' },
    { image: urlaInterior6, description: 'Kitchen' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Villa Project, Urla</h1>
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

export default VillaProjectUrla;
