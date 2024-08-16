import React from 'react';
import constructionProject1 from '../images/constructionProject1.png';
import constructionProject2 from '../images/constructionProject2.png';
import constructionProject3 from '../images/constructionProject3.png';

function ConstructionProject() {
  const images = [
    constructionProject1,
    constructionProject2,
    constructionProject3,
  ];

  return (
    <div className="container mx-auto p-4">
      <div className='ml-10 mb-20'>
        <h1 className="text-3xl mb-4">Construction Project</h1>
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

export default ConstructionProject;
