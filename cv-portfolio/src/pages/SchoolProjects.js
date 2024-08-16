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

  const leftCards = cardData.slice(0, 4); // Sol tarafta 4 kart
  const rightCards = cardData.slice(4);    // Sağ tarafta 3 kart

  return (
    <div className="container mx-auto p-4 pl-20">
      <div className='ml-32'>
        <h1 className="text-3xl mb-4">Freelance Projects</h1>
        <span className="text-sm font-normal cursor-pointer">
          My freelance work was designed to meet different client needs and the unique requirements of projects. 
          These projects allowed me to work on providing flexible and creative solutions.
        </span>
        <br />
        <span className="text-md font-semibold cursor-pointer">View everything</span>
        <span className="text-lg font-semibold ml-2">→</span>
      </div>

      <div className="flex justify-center">
        <div className="flex w-full max-w-6xl">
          {/* Sol Taraf (4 Kart) */}
          <div className="w-1/2 pr-4 mt-20">
            {leftCards.map((card, index) => (
              <Link to={card.link} key={index}>
                <div className="border border-transparent hover:border-gray-300 hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-lg shadow-lg mb-4 h-96">
                  <img src={card.image} alt={card.title} className="w-full h-72 object-cover rounded-lg" />
                  <div className="flex justify-between mt-2">
                    <h2 className="text-xl font-semibold">{card.title}</h2>
                    <span className="text-sm text-gray-500">View project</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Sağ Taraf (3 Kart) */}
          <div className="w-1/2 pl-4">
            {rightCards.map((card, index) => (
              <Link to={card.link} key={index}>
                <div className="border border-transparent hover:border-gray-300 hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-lg shadow-lg mb-4 h-96">
                  <img src={card.image} alt={card.title} className="w-full h-72 object-cover rounded-lg" />
                  <div className="flex justify-between mt-2">
                    <h2 className="text-xl font-semibold">{card.title}</h2>
                    <span className="text-sm text-gray-500">View project</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolProjects;
