import NavBar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import DescMain from '../../components/description/DescMain'
import DescBrief from '../../components/description/DescBrief'
import DescResume from '../../components/description/DescResume'

const mainDesc = {
  "title": "RBC",
  "desc": "A 12 week program focused on Design Thinking at the Royal Bank of Canada.",
  "imgLoc": "./images/desc/RBC.png"
}

const briefDesc = {
  "brief": {
    "title": "Brief",
    "desc": "A simple e-learning interface for high school music students to stay connected and meet new people through collaborative ensemble recordings.",
  },
  "item1": {
    "title": "Topic",
    "desc": "Grwoing Socially",
  },
  "item2": {
    "title": "Role",
    "desc": "One of Four Members as part of a Design Thinking Team (Team Meraki)",
  },
  "item3": {
    "title": "Type & Timeline",
    "desc": "Problem Identification, Idea Generation, Persona Building, UI/UX, Prototyping, Deck Creation",
    "date": "January - March 2021"
  },
  "item4": {
    "title": "Tools Used",
    "desc": "Figma, Google Slides",
  },
}

const resumeDesc = {
  "resumePoints": [
    "Selected to take part in RBC’s inaugural Design Thinking Program in partnership with the Western AI fund",
    "Developed 3 iterations of Figma prototypes based on user and UI designer’s feedback",
    "Adjusted user persona to reflect product capabilities and target demographic",
  ],
  "links": [
    {
      "ref": "https://www.figma.com/proto/fke5IHlr3MB19SYgNqbIW8/Remodel?node-id=192%3A7&scaling=contain&page-id=0%3A1",
      "title": "Figma",
    },
    {
      "ref": "https://www.eng.uwo.ca/rbcdt",
      "title": "Program Outline",
    }
  ]
}

function RBC(){
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

export default RBC;