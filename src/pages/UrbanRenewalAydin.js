import React from 'react';
import ImageCard from '../components/ImageCard';
import urbanRenewal1 from '../images/urbanRenewal1.jpg';
import urbanRenewal2 from '../images/urbanRenewal2.jpg';
import urbanRenewal3 from '../images/urbanRenewal3.jpg';
import urbanRenewal4 from '../images/urbanRenewal4.jpg';
import urbanRenewal5 from '../images/urbanRenewal5.jpg';
import urbanRenewal6 from '../images/urbanRenewal6.jpg';
import urbanRenewal7 from '../images/urbanRenewal7.jpg';
import urbanRenewal8 from '../images/urbanRenewal8.jpg';

function UrbanRenewalAydin() {
  const cardData = [
    { image: urbanRenewal1, description: '' },
    { image: urbanRenewal2, description: '' },
    { image: urbanRenewal3, description: '' },
    { image: urbanRenewal4, description: '' },
    { image: urbanRenewal5, description: '' },
    { image: urbanRenewal6, description: '' },
    { image: urbanRenewal7, description: '' },
    { image: urbanRenewal8, description: '' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Urban Renewal Project, Aydın</h1>
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

export default UrbanRenewalAydin;
