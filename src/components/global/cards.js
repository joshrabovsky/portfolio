

import Card from './card';

function Cards(props) {
  return (
    <section>
      {props.cardItems.map(
        (card) => <Card {...card} key={card.loc}></Card>
      )}
    </section>
  );
}

export default Cards;
