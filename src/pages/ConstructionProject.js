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
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Construction Project</h1>
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
