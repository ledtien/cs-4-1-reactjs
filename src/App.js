import "./App.css";
import logo from "./logo.png";
import sociallogo from "./sociallogo.png";

function SNavbar() {
  return (
    <div className="navbar ">
      <nav className="container">
        <div className="logo">
          <img className="photo" src={logo} alt="Logo" />
        </div>
        <ul className="links">
          <li>
            <a href="#">Premium</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            {" "}
            <span>|</span>
          </li>
          <li>
            {" "}
            <a href="#">Sign up</a>
          </li>
          <li>
            {" "}
            <a href="#">Log in</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function SContent() {
  return (
    <div className="content">
      <div className="middle">
        <div className="backgroundImg">
          <div className="text">
            <h1>Music for everyone</h1>
            <h5>Milions of songs. No Credit Card need</h5>
            <button>Get Spotify Free</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SFooter() {
  return (
    <footer>
      <div className="container">
        <div className="column ">
          <img className="footer-logo" src={logo} alt="Logo" />
        </div>
        <div className="column">
          <h1>Company</h1>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </div>
        <div className="column">
          <h1>Communities</h1>
          <p>For Artists</p>
          <p>Developers</p>
          <p>Brands</p>
          <p>Investors</p>
          <p>Vendors</p>
        </div>
        <div className="column">
          <h1>Useful Links</h1>
          <p>Help</p>
          <p>Web Player</p>
          <p>Free Mobile App</p>
        </div>
        <div className="column flex">
          <img className="footer-logo" src={sociallogo} alt="Logo" />
        </div>
      </div>
    </footer>
  );
}

function SBottom() {
  return (
    <div className="bottom">
      <div className="container">
        <div className="left">
          <p>Legal</p>
          <p>Privacy Center</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>About Ads</p>
        </div>
        <div className="right">
          <a href="#">Vietnam</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SNavbar />
      <SContent />
      <SFooter />
      <SBottom />
    </div>
  );
}

export default App;
