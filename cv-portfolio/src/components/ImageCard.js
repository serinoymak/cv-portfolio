import React from 'react';

const ImageCard = ({ image, description }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-6 w-full max-w-sm mx-auto">
      <div className="relative w-full h-48">
        <img src={image} alt={description} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
      </div>
      <p className="text-sm font-semibold mt-4 text-center">{description}</p>
    </div>
  );
};

export default ImageCard;
