import React from 'react';
import pdmSchool1 from '../images/pdmSchool1.png';
import pdmSchool2 from '../images/pdmSchool2.png';
import pdmSchool3 from '../images/pdmSchool3.png';
import pdmSchool4 from '../images/pdmSchool4.png';
import pdmSchool5 from '../images/pdmSchool5.png';
import pdmSchool6 from '../images/pdmSchool6.png';
import pdmSchool7 from '../images/pdmSchool7.png';

function PdmSchool() {
  const images = [
    pdmSchool1,
    pdmSchool2,
    pdmSchool3,
    pdmSchool4,
    pdmSchool5,
    pdmSchool6,
    pdmSchool7,
  ];

  return (
    <div className="container mx-auto p-4">
      <div className='ml-10 mb-20'>
        <h1 className="text-3xl mb-4">Pdm School</h1>
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

export default PdmSchool;
