import NavBar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import DescMain from '../../components/description/DescMain'
import DescBrief from '../../components/description/DescBrief'
import DescResume from '../../components/description/DescResume'

const mainDesc = {
  "title": "WAI",
  "desc": "Co-VP of Projects at Western AI",
  "imgLoc": "https://i0.wp.com/asiatimes.com/wp-content/uploads/2018/10/Artificial-Intelligence-Robots-Technology-Facial-Recognition-iStock.jpg?fit=1200%2C900&ssl=1"
}

const briefDesc = {
  "brief": {
    "title": "Brief",
    "desc": "Coming Soon....",
  },
  "item1": {
    "title": "Topic",
    "desc": "Coming Soon....",
  },
  "item2": {
    "title": "Role",
    "desc": "Co-VP of Projects",
  },
  "item3": {
    "title": "Type & Timeline",
    "desc": "Coming Soon....",
    "date": "May 2021 to Present"
  },
  "item4": {
    "title": "Tools",
    "desc": "Coming Soon....",
  },
}

const resumeDesc = {
  "resumePoints": [
    "Coming soon...."
  ],
  "links": [
    {
      "ref": "https://www.westernuai.com/",
      "title": "Club Website",
    },
  ]
}

function WAI(){
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

export default WAI;