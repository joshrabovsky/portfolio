function AboutMain() {
    return (
        <section id="aboutLanding" className="lg-container">
            <div className="img-column">
                <img src="./images/headshot.png" alt="headshot"></img>
            </div>
            <div className="content-column">
                <h4>AMBITIOUS • RESULTS DRIVEN • PROBLEM SOLVER</h4>
                <p>
                Hi! I am a third year student currently completing a software engineering and business dual degree through Western University and Ivey. I am a front end developer, machine learning enthusiast, and aspriring full stack developer who enjoys tackling difficult problems, learning new ideas, and discovering technologies. 
                </p>
                <p>
                As technology - in specific machine learning - continues to penetrate the industry, I am always on the lookout for opportunities that aim to connect business and technology. Fascinated by this intersection, I have learned more about the industries through internships as a Software Developer at Instant Record Check and as a Summer Intern for Connor, Clark, & Lunn Private Capital.
                </p>
                <p>
                During my free time I love to play basketball, travel, and eat pineapple pizza. Yes, you read that correctly.
                </p>
                <p>
                Thanks for checking out my portfolio! If you are interested, check out my resume below.
                </p>
                <div>
                    <a href="./Resume.pdf" className="highlight" download>Download Resume</a>
                </div>
            </div>
        </section>
    )
}

export default AboutMain;