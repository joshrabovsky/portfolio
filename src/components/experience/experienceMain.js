import Cards from '../global/cards';

const internships = [
    {
        "title": "Robinhood Markets",
        "desc": "Backend Engineering Intern",
        "year": "2022",
        "color": "light-green",
        "link": "/Robinhood",
        "loc": "./images/icons/robinhood.png"
    },
    {
        "title": "Datasea Consulting",
        "desc": "Data Consultant",
        "year": "2022",
        "color": "blue",
        "link": "/Datasea",
        "loc": "./images/icons/datasea.png"
    },
    {
      "title": "Instant Record Check",
      "desc": "Software Developer Intern",
      "year": "2021",
      "color": "teal",
      "link": "/IRC",
      "loc": "./images/icons/IRC.png"
    },
    {
      "title": "Connor, Clark, & Lunn Private Capital",
      "desc": "Summer Intern",
      "year": "2020",
      "color": "green",
      "link": "/CCL",
      "loc": "./images/icons/CC&L.png"
    },
  ]
const ecs = [
    {
        "title": "Western AI",
        "desc": "Co-VP Projects",
        "year": "2021",
        "color": "purple",
        "link": "/WAI",
        "loc": "./images/icons/WAI.png"
    },
    {
        "title": "RBC",
        "desc": "Design Thinking Cohort Member",
        "year": "2021",
        "color": "blue",
        "link": "/RBC",
        "loc": "./images/icons/RBC.png"
    },
    {
        "title": "Western Founders Network",
        "desc": "Co-VP Projects",
        "year": "2020",
        "color": "gray",
        "link": "/WFN",
        "loc": "./images/icons/WFN.png"
    },
]

const awards = [
    {
        'title': 'Western University',
        'desc': "Dean's Scholarship of Excellence"
    },
    {
        'title': 'Richard Ivey Business School',
        'desc': "Professor David G. Burgoyne HBA ’90 Scholarship"
    },
    {
        'title': 'Western Engineering Competition',
        'desc': "3rd place Programming Division"
    },
    {
        'title': 'Western Founders Network',
        'desc': "IBM Technology Case Competition Finalist"
    }
]

function ExperienceMain(){
    return (
        <main id="projectLanding" className="lg-container">
            <h3>Internships</h3>
            <Cards cardItems={internships}/>
            <h3>Extra Curriculars</h3>
            <Cards cardItems={ecs}/>
            <h3>Awards</h3>
            <div className="awards">
                {awards.map((award) => {
                    return(
                        <div>
                            <h4>{award.title}</h4>
                            <p>{award.desc}</p>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

export default ExperienceMain