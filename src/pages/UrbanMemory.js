import React from 'react';
import urbanMemory1 from '../images/urbanMemory1.png';
import urbanMemory2 from '../images/urbanMemory2.png';
import urbanMemory3 from '../images/urbanMemory3.png';
import urbanMemory4 from '../images/urbanMemory4.png';
import urbanMemory5 from '../images/urbanMemory5.png';
import urbanMemory6 from '../images/urbanMemory6.png';
import urbanMemory7 from '../images/urbanMemory7.png';
import urbanMemory8 from '../images/urbanMemory8.png';

function UrbanMemory() {
  const images = [
    urbanMemory1,
    urbanMemory2,
    urbanMemory3,
    urbanMemory4,
    urbanMemory5,
    urbanMemory6,
    urbanMemory7,
    urbanMemory8,
  ];

  

  return (
    <div className="container mx-auto p-4">
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Deconstruction the Urban Memory</h1>
        <div>
          <span className="text-sm font-normal cursor-pointer mr-2">Project Overview</span>
          <span className="text-lg font-semibold">→</span>
        </div>  
        <div className="flex justify-center items-center">
          <span className="text-xs font-normal cursor-pointer mr-2">The objective of the project is to renovate the former 
            prison site in Buca and transform it into a social space. The existing atmosphere of the prison is oppressive 
            and somber, creating a sense of confinement. Our goal is to convert this location into an inviting and enjoyable 
            space for the community, rather than a place people wish to escape from. Integrating the new design with the 
            urban fabric of the city is also a key consideration. The aim is to develop this area into a social space that 
            aligns with the existing urban structure. Additionally, preserving a substantial amount of green space is 
            important to the public and will be taken into account during the redevelopment.</span>
        </div>
      </div> 
      
      <div className="flex flex-col space-y-4">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img src={image} alt={`Urban Memory ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UrbanMemory;
