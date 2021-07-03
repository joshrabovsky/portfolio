import {
  useLocation
} from "react-router-dom";
import {useRef} from 'react'

function NavBar() {
  const path = useLocation().pathname
  const links = useRef(null)

  function toggleNav(e){
    links.current.classList.toggle('show-nav-items')
  }

  return (
    <nav>
      <div className="nav-container lg-container">
        <div className="nav-header">
          <span><a href="/"><span id="logo">JR</span><span id="my-name"> | JOSH RABOVSKY</span></a></span>
        </div>
        <button onClick={toggleNav} className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </button>
        <ul ref={links}>
          <li><a href="/" className={path === "/" ? "highlight-nav" : ""}>PROJECTS</a></li>
          <li><a href="/aboutMe" className={path === "/aboutMe" ? "highlight-nav" : ""}>ABOUT ME</a></li>
          <li><a href="/experience" className={path === "/experience" ? "highlight-nav" : ""}>EXPERIENCE</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
