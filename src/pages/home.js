import work from '../data/work';

import NavBar from '../components/navbar';
import Main from '../components/main';
import Cards from '../components/cards';
import Footer from '../components/footer';

function Home(){
  return(
    <div>
      <NavBar />
      <Main />
      <Cards cardItems={work}/>
      <Footer />
    </div>
  );
}

export default Home;
