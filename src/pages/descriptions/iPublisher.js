import NavBar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import DescMain from '../../components/description/DescMain'
import DescBrief from '../../components/description/DescBrief'
import DescResume from '../../components/description/DescResume'

const mainDesc = {
  "title": "iPublisher",
  "desc": "Software Design Assignment for MVC modelling",
  "imgLoc": "./images/desc/iPublisher.png"
}

const briefDesc = {
  "brief": {
    "title": "Brief",
    "desc": "School project that uses the MVC model a software that manages and stores data for a fake publishing agency",
  },
  "item1": {
    "title": "Topic",
    "desc": "Use Software Design principles taught in class to identify classes and build product based on design requirements",
  },
  "item2": {
    "title": "Role",
    "desc": "Student Project",
  },
  "item3": {
    "title": "Type & Timeline",
    "desc": "Identify objects, build class diagram, generate DB scheme for Entity class model, build JavaFX UI",
    "date": "March 2021"
  },
  "item4": {
    "title": "Tools",
    "desc": "JavaFX, Java, SQL",
  },
}

const resumeDesc = {
  "resumePoints": [
    "Produced a list of Entity, Control, and Boundary classes from Project description",
    "Created UML class diagram that demonstrates attributes, multiplicities, and associations between entity classes",
    "Developed iPublisher prototype using JavaFX and Java where users  ",
    "Used SQL to create relational database that stores connected publisher, author, and title information"
  ],
  "links": [
    {
      "ref": "https://github.com/joshrabovsky/iPublisher",
      "title": "Source Code",
    },
  ]
}

function iPublisher(){
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

export default iPublisher;