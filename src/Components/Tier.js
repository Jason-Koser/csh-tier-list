import { useState } from "react";
import Card from "./Card";
import { useDroppable } from "@dnd-kit/core";

function Tier(props) {
  const [cards, setCards] = useState([]);
  const {setNodeRef} = useDroppable({
    id: props.tierName,
  });

  return (
    <div className="Tier">
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
