import React from 'react';
import constructionDrawings1 from '../images/constructionDrawings1.png';
import constructionDrawings2 from '../images/constructionDrawings2.png';
import constructionDrawings3 from '../images/constructionDrawings3.png';
import constructionDrawings4 from '../images/constructionDrawings4.png';
import constructionDrawings5 from '../images/constructionDrawings5.png';
import constructionDrawings6 from '../images/constructionDrawings6.png';
import constructionDrawings7 from '../images/constructionDrawings7.png';
import constructionDrawings8 from '../images/constructionDrawings8.png';

function ConstructionDrawings() {
  const images = [
    constructionDrawings1,
    constructionDrawings2,
    constructionDrawings3,
    constructionDrawings4,
    constructionDrawings5,
    constructionDrawings6,
    constructionDrawings7,
    constructionDrawings8,
  ];

  return (
    <div className="container mx-auto p-4">
      <div className='ml-10 mb-20'>
        <h1 className="text-3xl mb-4">Construction Drawings</h1>
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

export default ConstructionDrawings;
