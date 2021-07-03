import NavBar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import DescMain from '../../components/description/DescMain'
import DescBrief from '../../components/description/DescBrief'
import DescResume from '../../components/description/DescResume'

const mainDesc = {
  "title": "Link Up",
  "desc": "Hack the North 2021 Hackathon Submission",
  "imgLoc": "./images/desc/linkUp.jpeg"
}

const briefDesc = {
  "brief": {
    "title": "Brief",
    "desc": "LinkUP is a social media platform that allows users to instantly and effortlessly join friends through shared hobbies or activities, encouraging genuine social connection and meaningful interactions.",
  },
  "item1": {
    "title": "Topic",
    "desc": "A prototype for a platform that allows users to perform activities with friends in real time",
  },
  "item2": {
    "title": "Role",
    "desc": "Hacker",
  },
  "item3": {
    "title": "Type & Timeline",
    "desc": "Ideation, Figma, Development",
    "date": "February 2021"
  },
  "item4": {
    "title": "Tools",
    "desc": "Figma, HTML, CSS, Bootstrap, Node.js, express.js, CockroachDB, Vonage API, Domain.com, Heroku",
  },
}

const resumeDesc = {
  "resumePoints": [
    "Created front-end with HTML, CSS, & Bootstrap using the Figma templates",
    "Assisted in the development of presentation and script",
  ],
  "links": [
    {
      "ref": "https://github.com/Chr-N/linkup",
      "title": "Devpost",
    },
    {
      "ref": "https://devpost.com/software/linkup-ptbr2k",
      "title": "GitHub",
    },
  ]
}

function linkUp(){
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

export default linkUp;