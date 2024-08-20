import React, { useState, useEffect } from 'react';
import homePageProject from '../images/homePageProject.jpg';

const Home = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = 'cc9069b1d3684866924fc641430eba85';  // API key
      const query = 'architecture';  // Mimarlık ile ilgili haberler
      const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setArticles(data.articles); // Gelen haberleri state'e kaydet
      } catch (error) {
        console.error('Haberler çekilirken hata oluştu:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">Architectural Portfolio</h1>
      <div className="opacity-80 mb-6">
        <img src={homePageProject} alt="Proje Resmi 1" className="w-full h-auto" />
      </div>

      <div className="text-sm space-y-4 leading-relaxed mb-8">
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

       <h2 className="text-2xl font-bold mb-4">Latest Architectural News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles ? (
          articles.slice(0, 8).map((article, index) => {
            const placeholderImage = 'https://via.placeholder.com/400x300?text=No+Image';

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={article.urlToImage || placeholderImage}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-700 mb-4">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
