import '../style/index.css';
import Footer from './Footer';
import NavBar from './navbar';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './Section3';


function HomePage() {
  return (
    <div className='body'>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  );
}

export default HomePage;
