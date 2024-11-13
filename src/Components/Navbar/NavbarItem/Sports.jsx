import { useState, useEffect } from "react";
import { fetchSportsNews } from "../services/sportsApi"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const Sports = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getSportsNews = async () => {
      const articles = await fetchSportsNews();
      setNews(articles);
    };

    getSportsNews();
  }, []);


  useEffect(() => {
    const getNews = async () => {
      const articles = await fetchSportsNews();
      console.log("Fetched articles:", articles);
      setNews(articles);
    };
  
    getNews();
  }, []);
  
  useEffect(() => {
    console.log("News state updated:", news);  // Check if `news` state updates
  }, [news]);
  

  return (
    <div className="container">
      {news && news.length > 0 ? (
        news.map((article, index) => (
          <div className="box" key={index} data-aos="fade-up">
            <img src={article.urlToImage || "https://via.placeholder.com/150"} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More..
            </a>
          </div>
        ))
      ) : (
        <div className='spinner'>
          <p><FontAwesomeIcon icon={faSpinner} spin style={{ marginRight: '5px', fontSize: '15px' }} /> Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Sports;
