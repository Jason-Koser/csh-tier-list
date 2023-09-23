import Card from "./Card";
import { useDroppable } from "@dnd-kit/core";

function Tier(props) {
  const {setNodeRef} = useDroppable({
    id: props.tierName,
  });

  const cards = [];

  return (
    <div className="Tier" ref={setNodeRef}>
      <div className="Label" style={{ backgroundColor: props.color }}>
        {props.tierName}
      </div>
      <div>
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
}

export default Tier;
