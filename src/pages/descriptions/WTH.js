import NavBar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import DescMain from '../../components/description/DescMain'
import DescBrief from '../../components/description/DescBrief'
import DescResume from '../../components/description/DescResume'

const mainDesc = {
  "title": "WTH",
  "desc": "Founding Developer at Western Tech Hub",
  "imgLoc": "./images/desc/WTH.jpeg"
}

const briefDesc = {
  "brief": {
    "title": "Brief",
    "desc": "A website that allows students of multidisciplinary backgrounds to meet and create start up ideas while recognizing individual talent.",
  },
  "item1": {
    "title": "Topic",
    "desc": "Front-end development, UI/UX, connecting client with server API",
  },
  "item2": {
    "title": "Role",
    "desc": "Founding Developer",
  },
  "item3": {
    "title": "Type & Timeline",
    "desc": "Creation of UI, backend testing, revisions for better UX",
    "date": "May to August 2021"
  },
  "item4": {
    "title": "Tools",
    "desc": "React, Axios, Material UI, Express, MongoDB, Docker",
  },
}

const resumeDesc = {
  "resumePoints": [
    "Completed integration of front-end with back-end using axios",
    "Performed client side data sanitization to ensure data integrity and better UX",
    "Updated MongoDB schema to fix errors with enums",
    "Created UI for multiple pages while also implementing design decisions for better UX"
  ],
  "links": [
    {
      "ref": "",
      "title": "Coming soon....",
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