function DescResume({resumePoints, links}) {
  return (
    <section className="desc__resume">
        <div className="desc__resumeHeader">
          <h3>Highlights</h3>
          <ul class="sessions">
            {resumePoints.map((point, index) => {
              return (
                <li key={index}>
                  <p>{point}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="desc__resumeItems">
          <h3>Links</h3>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}><a href={link.ref} target="_blank" rel="noreferrer">{link.title}</a></li>
              );
            })}
          </ul> 
        </div>
      </section>
  );
}

export default DescResume;