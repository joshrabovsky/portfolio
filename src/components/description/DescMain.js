function DescMain({title, desc, imgLoc}){
  return (
    <section className="desc__main">
      <h1 className="desc__header lg-container">{title}</h1>
      <p className="desc__desc">{desc}</p>
      <div className="desc__banner">
        <img src={imgLoc} alt="RBC" />
      </div>
    </section>
  );
}

export default DescMain;