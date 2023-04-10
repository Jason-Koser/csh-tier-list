import { useState } from "react";
import Card from "./Card";

function Tier(props) {
  let cardList = [{ image: "src/assets/mac.jpg", description: "Mac & Cheese" }];
  const [cards, setCards] = useState(cardList);

  return (
    <div className="Tier">
      <div className="Label" style={{ backgroundColor: props.color }}>
        {props.tierName}
      </div>
      {cards.map((item) => (
        <Card
          image={item.image}
          key={item.description}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Tier;
