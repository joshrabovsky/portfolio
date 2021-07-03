function DescBrief({brief, item1, item2, item3, item4}){
  return (
    <section className="desc__brief">
        <section className="desc__briefHeader">
          <h3>{brief.title}</h3>
          <p>{brief.desc}</p>
        </section>
        <section className="desc__briefDesc">
          <div>
            <h4>{item1.title}</h4>
            <p>{item1.desc}</p>
          </div>
          <div>
            <h4>{item2.title}</h4>
            <p>{item2.desc}</p>
          </div>
          <div>
            <h4>{item3.title}</h4>
            <p>{item3.desc}<br />
            <em>{item3.date}</em></p>
          </div>
          <div>
            <h4>{item4.title}</h4>
            <p>{item4.desc}</p>
          </div>
        </section>
      </section>
  );
}

export default DescBrief;