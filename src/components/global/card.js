import {useEffect} from 'react'
import {
  useLocation
} from "react-router-dom";

function Card({title, desc, year, loc, color, link}) {
  function callbackFunc(entries, observer)
  {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.remove('hidden')
        entry.target.classList.add('fade-in')
      }
    });
  }
  
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7
    };
    let observer = new IntersectionObserver(callbackFunc, options);
    observer.observe(document.getElementById(title))
  }, [title])

  const path = useLocation().pathname

  return(
    <a href={link} target={path !== "/aboutMe" ? "_self" : "_blank"} rel="noreferrer" className="card-container">
      <div className={`card overlay-${color} hidden`} id={title}>
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
