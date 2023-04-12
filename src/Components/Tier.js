import React from "react";
import { useState } from "react";
import Card from "./Card";

function Tier(props) {
  const [cards, setCards] = useState([]);

  function handleDragOver(event) {
    event.preventDefault();
    console.log(`Over tier ${props.tierName}`);
  }

  function handleOnDrop(event) {
    const cardTransfered = event.dataTransfer.getData("Card Key");
    setCards(cards.concat(cardTransfered));
    console.log("Card", cardTransfered);
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
