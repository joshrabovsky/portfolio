import NavBar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import DescMain from '../../components/description/DescMain'
import DescBrief from '../../components/description/DescBrief'
import DescResume from '../../components/description/DescResume'

const mainDesc = {
  "title": "Datasea Consulting",
  "desc": "Winter Internship with Datasea Consulting (See example below)",
  "imgLoc": "./images/desc/Datasea.jpg"
}

const briefDesc = {
  "brief": {
    "title": "Brief",
    "desc": "Worked on transferring data from small-mid size companies into Business Intelligence reports",
  },
  "item1": {
    "title": "Topic",
    "desc": "Data Engineering & Business Intelligence",
  },
  "item2": {
    "title": "Role",
    "desc": "Data Consultant",
  },
  "item3": {
    "title": "Type & Timeline",
    "desc": "Created Business Intelligence Mock Ups, Connceted data sources through FiveTran, cleaned data via Databricks, and presented data via Tableau",
    "date": "Summer 2022"
  },
  "item4": {
    "title": "Skills Gained",
    "desc": "SQL, Figma, Fivetran, Tableau, Databricks",
  },
}

const resumeDesc = {
  "resumePoints": [
    "Created three iterations of new business intelligence (BI) dashboard mock-ups using Figma; mock-up style adopted in production dashboard by client and templated as proposals for 100% of new clients.",
    "Architected and updated data cleaning process for 6+ tables by using SQL and connecting client data sources through Fivetran to Databricks; provided BI insights at under $900 a month.",
    "Developed two client dashboards in Tableau with 6+ graphs each to provide client with visualizations and insights across key performance metrics; dashboard used by client to make enterprise-wide decisions in Q2.",
  ],
  "links": [
    {
      "ref": "https://dataseaconsulting.com/",
      "title": "Company Website",
    }
  ]
}

function Datasea(){
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

export default Datasea;