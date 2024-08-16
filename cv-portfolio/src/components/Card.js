import React from 'react';

function Card({ image, title, onClick }) { // onClick prop'unu ekliyoruz
  return (
    <div 
      className="your-card-class hover:your-hover-class cursor-pointer"
      onClick={onClick} // onClick'i buraya ekliyoruz
    >
      <img src={image} alt={title} className="w-full h-auto" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
}

export default Card;
