import './NavbarItem.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchNews } from '../services/allnewsApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [articles, setArticles] = useState([]);
    useEffect(() => {
      const getNews = async () => {
        const data = await fetchNews();
        // Filter out articles without image
        const validArticles = data.filter(article => article.urlToImage);
        setArticles(validArticles);
      };
      getNews();
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
            <img src={article.urlToImage || "https://via.placeholder.com/150"} alt={article.title} />
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

export default Home;
