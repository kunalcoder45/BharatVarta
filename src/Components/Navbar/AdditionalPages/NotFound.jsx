import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faSatellite, 
  faStar, 
  faHome 
} from '@fortawesome/free-solid-svg-icons';
import './NotFound.css';

export function NotFound() {
  return (
    <div className="error-container">
      <div className="stars-container">
        <FontAwesomeIcon icon={faStar} className="star star-1" />
        <FontAwesomeIcon icon={faStar} className="star star-2" />
        <FontAwesomeIcon icon={faStar} className="star star-3" />
      </div>
      
      <div className="content">
        <div className="card">
          <div className="icons">
            <FontAwesomeIcon icon={faSatellite} className="icon satellite" />
            <FontAwesomeIcon icon={faRocket} className="icon rocket" />
          </div>
          
          <h1 className="title">404</h1>
          <h2 className="subtitle">Houston, we have a problem!</h2>
          <p className="message">
            The page youre looking for has drifted into deep space or never existed in the first place.
          </p>
          
          <a href="/" className="button">
            <FontAwesomeIcon icon={faHome} />
            Return Home
          </a>
        </div>
        
        <div className="error-code">
          <p>Error Code: SPACE_404</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound