import NavBar from '../components/navbar';
import Cards from '../components/cards';
import Footer from '../components/footer';
import AboutMain from '../components/aboutMain'

import aboutMe from '../data/aboutMe';

function About(){
  return(
    <div>
      <NavBar />
      <AboutMain />
      <Cards cardItems={aboutMe} />
      <Footer />
    </div>
  );
}

export default About;
