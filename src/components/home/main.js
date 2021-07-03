function Main(){
  function scrollDown(e){
    window.scrollTo(0, document.querySelector('#landing').scrollHeight)
  }
  return (
    <section id="landing">
      <h6>HELLO, I'M <span className="highlight">JOSH</span></h6>
      <p>
        <span>A software developer with a focus on 
          <span className="highlight"> SWE </span>
        </span>
        <span>and 
          <span className="highlight"> front end development</span>
        </span>
      </p>
      <p className="small">See the projects I've worked on</p>
      <span>
        <button onClick={scrollDown}><i className="fas fa-chevron-circle-down"></i></button>
      </span>
    </section>
  );
}

export default Main;
