import NavBar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import DescMain from '../../components/description/DescMain'
import DescBrief from '../../components/description/DescBrief'
import DescResume from '../../components/description/DescResume'

const mainDesc = {
  "title": "WFN",
  "desc": "Former Director & Co-VP of Projects at Western Founders Network",
  "imgLoc": "./images/desc/WFN.jpeg"
}

const briefDesc = {
  "brief": {
    "title": "Brief",
    "desc": "Worked on and later led a team of 6 directors focused on an MVP using Flutter & Dart.",
  },
  "item1": {
    "title": "Topics",
    "desc": `Student Meal Plan Accessor → Gamifying 'Cheese Touch' from Diary of a Whimpy Kid`,
  },
  "item2": {
    "title": "Roles",
    "desc": "Director of Projects → Co-VP of Projects",
  },
  "item3": {
    "title": "Type & Timeline",
    "desc": "Idea Generation, Task Division, Feature Creation, Page Merge",
    "date": "Sept 2019 to March 2021"
  },
  "item4": {
    "title": "Skills Gained",
    "desc": "Git, Flutter, Dart → Product Management",
  },
}

const resumeDesc = {
  "resumePoints": [
    "Organized various meetings including but not limited to: idea generation, task/deadline assignment, progress updates, and team bonding activities",
    "Ran entry level tutorials on Figma, VS Code, and GitHub to provide a foundation for the directors to build upon",
    "Responsible for generating the settings page which received feedback, logged out, and visited the official UWO page",
    "Completed a 40 hour Udemy course that taught the fundamentals of app development in Dart, and completed multiple high fidelity apps involving a meal plan, an expense tracker, and online data storage with Google Firestore",
  ],
  "links": [
    {
      "ref": "https://www.foundersnetwork.ca/",
      "title": "Club Website",
    },
    {
      "ref": "https://github.com/joshrabovsky/CheeseTouch",
      "title": "Cheese Touch",
    },
    {
      "ref": "https://github.com/joshrabovsky/WesternFood",
      "title": "Western Meal Plan",
    },
  ]
}

function WFN(){
  return (
    <div>
      <NavBar />
      <DescMain {...mainDesc}/>
      <DescBrief {...briefDesc}/>
      <DescResume {...resumeDesc}/>
      <Footer />
    </div>
  );
}

export default WFN;