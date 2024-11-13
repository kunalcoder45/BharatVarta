import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="footer">
        <div className="foot-box">
          <h2>BharatVarta</h2>
          <h5>We Create Posibilities for connected World.</h5>
          <h3>Be Bold !</h3>
          <h3>Be Ready !</h3>
          <a href="/"><img src="public\logo.png" alt="logo" /></a>
        </div>
        <div className="foot-box">
          <h3>Explore</h3>
          <nav>
            <ul>
              <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/india" activeClassName="active">India</NavLink></li>
              <li><NavLink to="/world" activeClassName="active">World</NavLink></li>
              <li><NavLink to="/tech" activeClassName="active">Technology</NavLink></li>
              <li><NavLink to="/entertainment" activeClassName="active">Entertainment</NavLink></li>
              <li><NavLink to="/games" activeClassName="active">Games</NavLink></li>
              <li><NavLink to="/sports" activeClassName="active">Sports</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className="foot-box">
          <h3>Visit</h3>
          <p>Jharkhand, Jamshedpur, TataNagar, Purshudih, Sopodera</p>
        </div>
        <div className="foot-box">
          <h3>Follow</h3>
          <a href="https://www.instagram.com/kunal_sharma_45__/profilecard/?igsh=ZDNrdXVhcjA0YmNs">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=100053514034271">Facebook</a>
          <a href="https://github.com/kunalcoder45">Github</a>
          <a href="https://www.linkedin.com/in/kunal-sharma-cse-student">LinkedIn</a>
          <a href="https://x.com/KunalSharma45_">X</a>
        </div>
        <div className="foot-box">
          <h3>Legal</h3>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div className="foot-box">
          <h4><a href="#">Contact</a></h4>
          <p>Email: kunalcoder45@gmail.com</p>
          <p>Phone No.: +919507966158</p>
          <h5><a href="https://kunalsharma45portfolio.netlify.app/">Developer Portfolio</a></h5>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 BharatVarta, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer