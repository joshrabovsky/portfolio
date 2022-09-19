import NavBar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import DescMain from '../../components/description/DescMain'
import DescBrief from '../../components/description/DescBrief'
import DescResume from '../../components/description/DescResume'

const mainDesc = {
  "title": "Robinhood",
  "desc": "Summer Internship with Robinhood Markets LTD.",
  "imgLoc": "./images/desc/Robinhood.gif"
}

const briefDesc = {
  "brief": {
    "title": "Brief",
    "desc": "Worked on the recommendations team to assist in implementing recommendations for customers and automating investment team use with the codebase.",
  },
  "item1": {
    "title": "Topic",
    "desc": "Financial Technology",
  },
  "item2": {
    "title": "Role",
    "desc": "Backend Engineering Intern",
  },
  "item3": {
    "title": "Type & Timeline",
    "desc": "Onboarding, Recommendation Implementation, Portfolio Generation & Storage, Investment Team Variable Automation",
    "date": "Summer 2022"
  },
  "item4": {
    "title": "Skills Gained",
    "desc": "Git, Python, Pytest, Django, GRPC, AWS S3, Documentation, APIs",
  },
}

const resumeDesc = {
  "resumePoints": [
    "Led scoping, design, and presentation of new process for updating constants in codebase by collaborating with 7 cross-functional stakeholders; produced solution meeting both technical and non-technical needs.",
    "Engineered Python script to retrieve, validate, and insert investment portfolio weights from an AWS S3 bucket into database; reduced number of teams required to update information by 50%.",
    "Reduced number of onboarding flow pages by 40% for Stock Lending and performed text experiments to improve user onboarding experience; pages experienced relative retention rate increases of 7.5%, 3.6%, 52.9%",
  ],
  "links": [
    {
      "ref": "https://robinhood.com/us/en/",
      "title": "Company Website",
    }
  ]
}

function Robinhood(){
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

export default Robinhood;