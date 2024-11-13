import { useEffect, useState } from 'react';
import './NavbarItem.css';
import { fetchScienceNews } from '../services/ScienceApi'; // Adjust the path if necessary
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Science = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    const getScienceNews = async () => {
      const data = await fetchScienceNews();
      // Filter to include only articles with a non-empty, valid image URL
      const validArticles = data.filter(
        article => article.urlToImage && article.urlToImage.startsWith('http')
      );
      setArticles(validArticles);
    };
    getScienceNews();
  }, []);

  return (
    <div className="container">
      {articles.length === 0 ? (
        <div className='spinner'>
        <p><FontAwesomeIcon icon={faSpinner} spin style={{ marginRight: '5px', fontSize: '15px' }} /> Loading...</p>
      </div>
      ) : (
        articles.map((article, index) => (
          <div className="box" key={index} data-aos="fade-up">
            <img
              src={article.urlToImage || "https://via.placeholder.com/300x200?text=No+Image"}
              alt={article.title}
              width="300"  // Set width of image
              height="200" // Set height of image
            />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More..
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default Science;
