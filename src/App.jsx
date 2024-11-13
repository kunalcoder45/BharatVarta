import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./Components/Navbar/NavbarItem/Home";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/Navbar/AdditionalPages/NotFound";
import Entertainment from "./Components/Navbar/NavbarItem/Entertainment";
import Tech from "./Components/Navbar/NavbarItem/Tech";
import World from "./Components/Navbar/NavbarItem/World"
import India from "./Components/Navbar/NavbarItem/India";
import Games from "./Components/Navbar/NavbarItem/Games";
import Sports from "./Components/Navbar/NavbarItem/Sports";
import Tesla from "./Components/Navbar/NavbarItem/Tesla";
import Footer from "./Components/Footer/Footer";
import Business from "./Components/Navbar/NavbarItem/Business";
import Science from "./Components/Navbar/NavbarItem/Science";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/india",
      element: (
        <div>
          <Navbar />
          <India />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/world",
      element: (
        <div>
          <Navbar />
          <World />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/tech",
      element: (
        <div>
          <Navbar />
          <Tech />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/entertainment",
      element: (
        <div>
          <Navbar />
          <Entertainment />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/games",
      element: (
        <div>
          <Navbar />
          <Games />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/sports",
      element: (
        <div>
          <Navbar />
          <Sports />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/tesla",
      element: (
        <div>
          <Navbar />
          <Tesla />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/business",
      element: (
        <div>
          <Navbar />
          <Business/>
          <Footer/>
        </div>
      ),
    },
    {
      path: "/science",
      element: (
        <div>
          <Navbar />
          <Science/>
          <Footer/>
        </div>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <div className="top-bar">
        <a className="scroll-button" href="#">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
