import NavBar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import DescMain from '../../components/description/DescMain'
import DescBrief from '../../components/description/DescBrief'
import DescResume from '../../components/description/DescResume'

const mainDesc = {
  "title": "CC&L",
  "desc": "Summer Internship with Connor, Clark, & Lunn Private Capital",
  "imgLoc": "./images/desc/CCL.jpeg"
}

const briefDesc = {
  "brief": {
    "title": "Brief",
    "desc": "Rotated between Operations, Compliance, Front-Office, & Transfers to organize, collect, and audit data.",
  },
  "item1": {
    "title": "Topic",
    "desc": "Private Equity",
  },
  "item2": {
    "title": "Role",
    "desc": "Summer Intern",
  },
  "item3": {
    "title": "Type & Timeline",
    "desc": "SIP audit, Information Audit, Client Organization, Transfer Creation",
    "date": "Summer 2020"
  },
  "item4": {
    "title": "Skills Gained",
    "desc": "Excel, Data Organization & Prioritization",
  },
}

const resumeDesc = {
  "resumePoints": [
    "Independently organized and reconciled client beneficiary listings of 300 clients by urgency of update to ensure customer satisfaction and avoid complications of inheritance in case of emergency; contacted over 10 clients and gathered e-signatures",
    "Performed a Statement of Investment Policy (SIP) audit of over 600 clients where client information and SIP dates were confirmed to check if document amendments were necessary based on varying economic conditions",
    "Initiated over 50 requests for transfers (RFT) by refining the document and delivering industry grade RFT's for cheques, wires, and ATON to secure delivery of funds into CC&L",
  ],
  "links": [
    {
      "ref": "https://cclprivatecapital.com/",
      "title": "Company Website",
    }
  ]
}

function CCL(){
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

export default CCL;