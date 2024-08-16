import React from 'react';
import homePageProject from '../images/homePageProject.jpg';

// Başlık küçük ekranlarda ortalanır ve daha büyük ekranlarda sola yaslanır. 
// Metin alanına boşluklar ve satır yüksekliği eklendi.

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">Architecture Portfolio</h1>
      <div className="opacity-80 mb-6">
        <img src={homePageProject} alt="Proje Resmi 1" className="w-full h-auto"/>
      </div>

      <div className="text-sm space-y-4 leading-relaxed">
        <p>
          I graduated from Yaşar University, Department of Architecture, in 2023. Throughout my academic career,
          I gained valuable hands-on experience through multiple internships.
        </p>
        <p>
          In July 2021, I joined Ontan Group, where I contributed to diverse architectural projects, collaborating closely
          with experienced professionals. This experience provided in dealing with real-world challenges in the architectural
          field.
        </p>
        <p>
          In July 2022, I undertook an internship at Ok-Ay Plan Project Design, where I further refined my design capabilities.
          Working on various projects, I learned to balance creativity with practicality, ensuring that designs met client
          needs while adhering to industry standards.
        </p>
        <p>
          In addition to my internships, I have worked on several freelance projects, allowing me to explore my creativity
          in different contexts. I believe that design is an infinite realm that offers endless possibilities for innovation.
        </p>
        <p>
          I am currently working at Oymak İnş. Tar. Turz Hayv. Akary. Naksa. Veti. Ltd. Şti in Aydın Nazilli. I am 
          responsible for the follow-up of the work. I preferred to gain experience in this field until the next job 
          opportunity. I am excited to explore the opportunities again.
        </p>
      </div>
    </div>
  );
};

export default Home;
