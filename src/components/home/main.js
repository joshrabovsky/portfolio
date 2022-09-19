function Main(){
  function scrollDown(e){
    window.scrollTo(0, document.querySelector('#landing').scrollHeight)
  }
  return (
    <section id="landing">
      <h6>HELLO, I'M <span className="highlight">JOSH</span></h6>
      <p>
        <span>A software engeering who likes to intersect
          <span className="highlight"> businesss </span>
        </span>
        <span>with 
          <span className="highlight"> technology</span>
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
