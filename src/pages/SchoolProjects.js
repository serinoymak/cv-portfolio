import React from 'react';
import { Link } from 'react-router-dom';
import schoolProject1 from '../images/schoolProject1.jpg';
import schoolProject2 from '../images/schoolProject2.jpg';
import schoolProject3 from '../images/schoolProject3.jpg';
import schoolProject4 from '../images/schoolProject4.jpg';
import schoolProject5 from '../images/schoolProject5.jpg';
import schoolProject6 from '../images/schoolProject6.jpg';
import schoolProject7 from '../images/schoolProject7.jpg';

function SchoolProjects() {
  const cardData = [
    { image: schoolProject1, title: 'Deconstruction the Urban Memory', link:'/urban-memory' },
    { image: schoolProject2, title: 'Pdm School', link:'/pdm-school' },
    { image: schoolProject3, title: 'Gastronomy and Kitchen Art', link:'/gastronomy-and-kitchen-art' },
    { image: schoolProject4, title: 'Shell Structure', link:'/shell-structure' },
    { image: schoolProject5, title: 'Kinehex', link:'/kinehex' },
    { image: schoolProject6, title: 'Construction Project', link:'/construction-project' },
    { image: schoolProject7, title: 'Construction Drawings', link:'/construction-drawings' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">School Projects</h1>
        <div>
          <span className="text-sm font-normal cursor-pointer mr-2">View everything</span>
          <span className="text-lg font-semibold">→</span>
        </div>  
        <div>
          <span className="text-xs font-normal cursor-pointer mr-2">These are some of the projects that I have completed 
            during my academic journey. Each project is a reflection of my learning and growth.</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {cardData.map((card, index) => (
          <Link to={card.link} key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
            <div className="border border-transparent hover:border-gray-300 hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-lg shadow-lg h-full">
              <img src={card.image} alt={card.title} className="w-full h-64 object-cover rounded-lg" />
              <div className="flex justify-between mt-2">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">{card.title}</h2>
                <span className="text-sm md:text-base text-gray-500">View project</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SchoolProjects;
