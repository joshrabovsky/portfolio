import NavBar from '../components/global/navbar';
import Main from '../components/home/main';
import Cards from '../components/global/cards';
import Footer from '../components/global/footer';

const projects = [
  {
    "title": "Western Tech Hub",
    "desc": "Founding Developer",
    "year": "2021",
    "color": "purple",
    "link": "/WTH",
    "loc": "./images/icons/WTH.png"
  },
  {
    "title": "LinkUp",
    "desc": "Hacker",
    "year": "2021",
    "color": "green",
    "link": "/linkUp",
    "loc": "./images/icons/linkUp.png"
  },
  {
    "title": "iPublisher",
    "desc": "Student Project",
    "year": "2021",
    "color": "blue",
    "link": "/iPublisher",
    "loc": "./images/icons/iPublisher.png"
  },
  {
    "title": "Ideal Way",
    "desc": "Student Project",
    "year": "2020",
    "color": "yellow",
    "link": "/idealWay",
    "loc": "./images/icons/idealWay.png"
  },
]

function Home(){
  return(
    <div>
      <NavBar />
      <Main />
      <h3>Personal Projects</h3>
      <Cards cardItems={projects}/>
      <Footer />
    </div>
  );
}

export default Home;
