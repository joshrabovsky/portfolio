import Cards from './cards';
import {ecs, awards} from '../data/projectData'

function ProjectMain(){
    return (
        <main id="projectLanding" className="lg-container">
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

export default ProjectMain