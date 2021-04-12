import "./App.css";
import logo from "./logo.png";
import { Nav, Navbar, NavDropdown, Row, Col, Container } from "react-bootstrap";

function SNavbar() {
  return (
    <div>
      <div className="navbar">
        <nav>
          <img className="photo" src={logo} alt="Logo" />
        </nav>
        <div className="links">
          <a href="#">Premium</a>
          <a href="#">Support</a>
          <a href="#">Download</a>
          <span>|</span>
          <a href="#">Sign up</a>
          <a href="#">Log in</a>
        </div>
      </div>
    </div>
  );
}

function SContent() {
  return (
    <div className="content">
      <div className="middle">
        <h1>Music for everyone</h1>
        <p>Milions of songs. No Credit Card need</p>
        <button>Get Spotify Free</button>
      </div>
    </div>
  );
}

function SFooter() {
  return (
    <div>
      <footer>
        <div className="container">
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
        </div>
      </footer>
      <div className="footer">
        <div className="container">
          <div className="left">
            <p>Legal</p>
            <p>Privacy Center</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
            <p>About Ads</p>
          </div>
          <div className="right">
            <a href="group.html">Vietnam</a>
          </div>
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
    </div>
  );
}

export default App;
