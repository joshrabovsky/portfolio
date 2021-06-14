import {
  useLocation
} from "react-router-dom";

function NavBar() {
  const path = useLocation().pathname
  return (
    <nav>
      <div className="nav-container lg-container">
        <div className="nav-header">
          <span><a href="/"><span id="logo">JR</span> | JOSH RABOVSKY</a></span>
        </div>
        <div>
          <ul>
            <li><a href="/" className={path === "/" ? "highlight-nav" : ""}>WORK</a></li>
            <li><a href="/about" className={path === "/about" ? "highlight-nav" : ""}>ABOUT</a></li>
            <li><a href="/projects" className={path === "/projects" ? "highlight-nav" : ""}>PROJECTS</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
