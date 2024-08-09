import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

// flex-col md:flex-row sınıflarını kullanarak, küçük ekranlarda dikey, orta ve büyük ekranlarda yatay düzen sağladık.
// md:w-1/2 sınıfını kullanarak, orta ve büyük ekranlarda her iki bölümün eşit genişlikte olmasını sağladık.
// space-y-8 md:space-y-0 sınıfları ile küçük ekranlarda bölümler arasında dikey boşluk, orta ve büyük ekranlarda yatay boşluk bıraktık.
// flex-wrap sınıfını kullanarak küçük ekranlarda kategorilerin düzgün sarılmasını sağladık.

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        <div className="text-left md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-xs mb-4">
            Our diverse range of services is designed to cater to various architectural needs, from residential and commercial 
            projects to interior design and landscape architecture. Each service is approached with a commitment to excellence, 
            ensuring tailored solutions that reflect both functionality and aesthetics. Explore how our expertise can bring your 
            vision to life.
          </p>
          <div className="mb-4">
            <span className="text-lg font-semibold cursor-pointer">View everything</span>
            <span className="text-lg font-semibold ml-2">→</span>
          </div>
          <div className="flex flex-wrap space-x-4">
            {['Residential', 'Commercial', 'Interior', 'Landscape'].map(category => (
              <span key={category} className="text-gray-600 cursor-pointer hover:underline">{category}</span>
            ))}
          </div>
        </div>
        <div className="text-left md:w-1/2">
          <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
          <hr className="border-t border-gray-300 mb-4"/>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="text-gray-800 mr-2" />
            <span className="text-gray-800 text-sm">İzmir, Türkiye</span>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-gray-800 mr-2" />
            <span className="text-gray-800 text-sm">serinoymak98@gmail.com</span>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="text-gray-800 mr-2" />
            <span className="text-gray-800 text-sm">(+90) 5340703878 </span>
          </div>
          <div className="flex items-center mb-2">
            <FaLinkedin className="text-gray-800 mr-2" />
            <a href="https://www.linkedin.com/" className="text-gray-800 hover:underline text-sm">linkedin.com/in/serinoymak</a>
          </div>
          <div className="flex items-center">
            <FaGithub className="text-gray-800 mr-2" />
            <a href="https://github.com/" className="text-gray-800 hover:underline text-sm">github.com/serinoymak</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
