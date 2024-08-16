import React from 'react';
import shellStructure1 from '../images/shellStructure1.png';
import shellStructure2 from '../images/shellStructure2.png';

function ShellStructure() {
  const images = [
    shellStructure1,
    shellStructure2,
  ];

  return (
    <div className="container mx-auto p-4">
    <div className="mb-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Shell Structure</h1>
      <div>
        <span className="text-sm font-normal cursor-pointer mr-2">Project Overview</span>
        <span className="text-lg font-semibold">→</span>
      </div>  
      <div className="flex justify-center items-center">
        <span className="text-xs font-normal cursor-pointer mr-2">Grasshopper is a visual programming language integrated 
          with Rhino, enabling parametric design. Users can create algorithms to adjust the form of shell structures based 
          on various parameters such as curvature, material thickness, or load distribution. Plugins like Ladybug can be 
          used within Grasshopper for structural analysis and environmental simulations. In the computational design course, 
          I utilized Grasshopper’s flexible design capabilities to create a shell that provides outdoor spaces for people to 
          enjoy sunlight from specific angles. This project also demonstrated the flexibility and creativity of Grasshopper 
          in design.</span>
      </div>
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

export default ShellStructure;
