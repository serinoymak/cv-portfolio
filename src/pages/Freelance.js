import React from 'react';
import { Link } from 'react-router-dom';
import freelanceProject1 from '../images/freelanceProject1.jpg';
import freelanceProject2 from '../images/freelanceProject2.jpg';
import freelanceProject3 from '../images/freelanceProject3.jpg';

function Freelance() {
  const cardData = [
    { image: freelanceProject1, title: 'Villa Project, Urla', link: '/villa-project-urla' },
    { image: freelanceProject2, title: 'Urban Renewal Project, Aydın', link: '/urban-renewal-aydin' },
    { image: freelanceProject3, title: 'Housing, Nazilli', link: '/housing-nazilli' },
  ];

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

export default Freelance;
