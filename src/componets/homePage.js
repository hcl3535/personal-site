import '../style/index.css';
import Footer from './Footer';
import NavBar from './navbar';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './Section3';


function HomePage() {
  return (
    <div className='body'>
      <NavBar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </div>
  );
}

export default HomePage;
