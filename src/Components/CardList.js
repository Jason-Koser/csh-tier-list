import { useState } from "react";
import Card from "./Card";

const CardList = (props) => {
  let cardList = [
    { imagePath: "../assets/mac.jpg", description: "Mac & Cheese" },
    { imagePath: "../assets/mac.jpg", description: "Mac" },
  ];
  const [cards, setCards] = useState(cardList);

  return (
    <div className="card border-primary mb-3">
      <div className="CardList">
        {cards.map((item) => (
          <Card
            imagePath={item.imagePath}
            key={item.description}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
