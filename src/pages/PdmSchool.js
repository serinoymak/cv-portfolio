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
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Pdm School</h1>
        <div>
          <span className="text-sm font-normal cursor-pointer mr-2">Project Overview</span>
          <span className="text-lg font-semibold">→</span>
        </div>  
        <div className="flex justify-center items-center">
          <span className="text-xs font-normal cursor-pointer mr-2">The primary objective of this project was to renovate 
            Mustafa Kemal Anatolian High School to better serve students. Initially, the project was intended as a 
            comprehensive effort, but it later evolved to include distinct educational and social aspects. This section 
            emphasizes the social areas of the project. The subsequent phase aimed to adapt the school for use as a PDM 
            center in emergencies. After the İzmir earthquake during the construction phase, the focus shifted more towards 
            enhancing the structural aspects and integrating PDM center functionalities. The design concept is to develop a 
            high school that clearly separates social areas from educational ones, improving efficiency and focus by aligning 
            these spaces along the main axis and connecting them with adjacent lines.</span>
        </div>
      </div>
      
      <div className="flex flex-col space-y-4">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img src={image} alt={`Pdm School ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PdmSchool;
