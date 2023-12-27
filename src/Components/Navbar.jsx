import '../CSS/Navbar.css';
import LOGO from '../assets/LOGO.png';


const Navbar = () => {

  return (

    <nav className="navbar">
      <div className="logo">
        <img src={LOGO} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Docs</a></li>
        <li><a href="#">DemoDapp</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <a href={"https://github.com/Adidem23/EnchantMask"}><button className="pushable">
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front" id='munde'>
          Star Repo 🤩
        </span>
      </button></a>

    </nav>
  );

};

export default Navbar;