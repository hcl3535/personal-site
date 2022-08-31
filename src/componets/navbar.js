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
            <li className='navItem'>home</li>
            <li className='navItem'>item 2</li>
            <li className='navItem'>item 3</li>
          </ul>
        </nav>
      </header>
    )
}

export default NavBar;