import NavBar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import DescMain from '../../components/description/DescMain'
import DescBrief from '../../components/description/DescBrief'
import DescResume from '../../components/description/DescResume'

const mainDesc = {
  "title": "IRC",
  "desc": "Software Developer Intern at Instant Record Check",
  "imgLoc": "./images/desc/IRC.png"
}

const briefDesc = {
  "brief": {
    "title": "Brief",
    "desc": "Worked on a team of 4 developers to build the platform that digitizes the record checking process",
  },
  "item1": {
    "title": "Topic",
    "desc": "Optimized production code through file refactoring, component refactoring, in addition to creating components for website and email templates with UI",
  },
  "item2": {
    "title": "Role",
    "desc": "Software Developer",
  },
  "item3": {
    "title": "Type & Timeline",
    "desc": "Language Introduction, Code Refactor, File Restructure, Email Creation, UI Adjustments",
    "date": "May to August 2021"
  },
  "item4": {
    "title": "Tools",
    "desc": "ClojureScript, SCSS, MJML, MixPanel, Figma",
  },
}

const resumeDesc = {
  "resumePoints": [
    "Refactored ClojureScript code to improve future maintaibility, reduced total code written by 19%",
    "Created 6 email templates using MJML to send to clients as push alerts",
    "Reorganized the entirety of the front-end client into a new file structure, enabling more readable code for future maintenence",
  ],
  "links": [
    {
      "ref": "https://www.instantrecordcheck.ca/",
      "title": "Company Website",
    },
  ]
}

function IRC(){
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

export default IRC;