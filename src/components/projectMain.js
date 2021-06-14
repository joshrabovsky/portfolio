import Cards from './cards';
import {ecs} from '../data/projectData'

function ProjectMain(){
    return (
        <main id="projectLanding" className="lg-container">
            <h3>Extra Curriculars</h3>
            <Cards cardItems={ecs}/>
            <h3>Awards</h3>
            <div className="awards">
                <div>
                    <h4>Western University</h4>
                    <p>Dean's Scholarship of Excellence</p>
                </div>
                <div>
                    <h4>Ivey Business School</h4>
                    <p>Professor David G. Burgoyne HBA ’90 Scholarship</p>
                </div>
                <div>
                    <h4>Western Engineering Competition</h4>
                    <p>3rd place Programming Division</p>
                </div>
                <div>
                    <h4>Western Founders Network</h4>
                    <p>Technology Case Competition Finalist</p>
                </div>
            </div>
        </main>
    );
}

export default ProjectMain