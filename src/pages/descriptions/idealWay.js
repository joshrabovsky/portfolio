import NavBar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import DescMain from '../../components/description/DescMain'
import DescBrief from '../../components/description/DescBrief'
import DescResume from '../../components/description/DescResume'

const mainDesc = {
  "title": "Ideal Way",
  "desc": "First year assignment for 1050",
  "imgLoc": "./images/desc/idealWay.jpg"
}

const briefDesc = {
  "brief": {
    "title": "Brief",
    "desc": "An educational cross-platform prototype for the non-profit Ideal Way, built for 10-12 year olds to foster leadership and inclusivity through gamification",
  },
  "item1": {
    "title": "Topic",
    "desc": "Educational gamification for students",
  },
  "item2": {
    "title": "Role",
    "desc": "Group member",
  },
  "item3": {
    "title": "Type & Timeline",
    "desc": "Problem definition, Gantt Charts, Design Creation, Front-end development",
    "date": "January to April 2020"
  },
  "item4": {
    "title": "Tools",
    "desc": "Dart, Flutter",
  },
}

const resumeDesc = {
  "resumePoints": [
    "Selected from group to directly speak with Ideal Way to better understand the organizations goals, constraints, and target audience",
    "Developed and created content for 3 difficulty levels in an emotion recognition game",
    "Wrote script and demonstrated project in the projects final showcase",
  ],
  "links": [
    {
      "ref": "https://www.ideal-way.ca/",
      "title": "Company Website",
    },
    {
      "ref": "https://github.com/joshrabovsky/ideal_way",
      "title": "Github",
    },
  ]
}

function idealWay(){
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

export default idealWay;