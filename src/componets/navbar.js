import { Link } from 'react-router-dom';
import '../style/index.css';

function NavBar() {

    function mobileMenu() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".navMenu");
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
}
    return(
      <header className='header'>
        <h1 className='centered name'>Hunter Lindsay</h1>  
        <nav className='navbar'>
          <div className='hamburger' onClick={mobileMenu}>
            <span className='bar'></span>  
            <span className='bar'></span>
            <span className='bar'></span>         
          </div>
          <ul className='navMenu'>
            <Link to='/' className='navItem'>home</Link>
            <Link to='indiGame' className='navItem'>Indi game</Link>
            <Link to='contact' className='navItem'>contact me</Link>
          </ul>
        </nav>
      </header>
    )
}

export default NavBar;