import {useEffect} from 'react'

function Card({title, desc, year, loc, color, link}) {
  function callbackFunc(entries, observer)
  {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.remove('hidden')
        entry.target.classList.add('fade-in-side')
      }
    });
  }
  
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };
    let observer = new IntersectionObserver(callbackFunc, options);
    observer.observe(document.getElementById(title))
  }, [title])

  return(
    <a href={link} target="_blank" rel="noreferrer" className="card-container hidden" id={title}>
      <div className={`card overlay-${color}`}>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{desc} | {year}</p>
        </div>
        <div className="card-icon">
          <img src={loc} alt={title}/>
        </div>
      </div>
    </a>
  );
}

export default Card;
