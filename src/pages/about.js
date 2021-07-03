import NavBar from '../components/global/navbar';
import Cards from '../components/global/cards';
import Footer from '../components/global/footer';
import AboutMain from '../components/about/aboutMain'

const aboutMe = [
  {
    "title": "Richard Ivey Business School",
    "desc": "Honours Business Administration",
    "year": "2021-2024",
    "color": "gray",
    "link": "https://www.ivey.uwo.ca",
    "loc": "./images/icons/Ivey.png"
  },
  {
    "title": "Western University",
    "desc": "Software Engneering (4.0 GPA)",
    "year": "2019-2024",
    "color": "purple",
    "link": "https://www.uwo.ca",
    "loc": "./images/icons/Western.png"
  },
  {
      "title": "Country Names Expert",
      "desc": "100% on this quiz",
      "year": "2020",
      "color": "yellow",
      "link": "https://www.jetpunk.com/quizzes/how-many-countries-can-you-name",
      "loc": "./images/icons/Globe.png"
  },
  {
      "title": "Canadian",
      "desc": "Eh",
      "year": "2001-Current",
      "color": "red",
      "link": "https://en.wikipedia.org/wiki/Canada",
      "loc": "./images/icons/Canada.png"
  },
  {
    "title": "Toronto Raptors Fan",
    "desc": "NBA Champion Spectator",
    "year": "2019",
    "color": "light-blue",
    "link": "https://www.sportsnet.ca/wp-content/uploads/2020/05/Big-Read-Shooting-The-Shot-Feature.jpg",
    "loc": "./images/icons/Raptors.png"
  },
]

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
