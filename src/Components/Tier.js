import { useState } from "react";
import Card from "./Card";

function Tier(props) {
  const [cards, setCards] = useState([]);

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleOnDrop(event) {
    event.preventDefault();

    let cardTransferred = JSON.parse(event.dataTransfer.getData("card"));
    setCards(cards.concat(cardTransferred));
  }

  return (
    <div className="Tier" onDrop={handleOnDrop} onDragOver={handleDragOver}>
      <div className="Label" style={{ backgroundColor: props.color }}>
        {props.tierName}
      </div>
      {cards.map((item) => (
        <Card
          imagePath={item.imagePath}
          key={item.description}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Tier;
