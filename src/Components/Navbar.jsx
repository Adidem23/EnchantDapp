import '../CSS/Navbar.css';
import LOGO from '../assets/LOGO.png';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (

    <nav className="navbar">
      <div className="logo">
        <img src={LOGO} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li><a href={"https://enchant-docs.vercel.app/"} target={"_blank"}>Docs</a></li>
        <li><a href={"/Demo"}>Demo</a></li>
        <li><a href="#">Help</a></li>
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