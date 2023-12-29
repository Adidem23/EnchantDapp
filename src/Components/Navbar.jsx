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
        <li><a href={"https://enchant-docs.vercel.app/"}>Docs</a></li>
        <Link to={"/dlink"}><li><a>Demo</a></li></Link>
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