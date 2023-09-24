import React from "react";
import Card from "./Card";
import { useDroppable } from "@dnd-kit/core";
import { CardObj } from "./BoardGroup";

function Tier({tierName, color}: {tierName:string, color:string}) {
  const {setNodeRef} = useDroppable({
    id: tierName,
  });

  const cards:CardObj[] =[];

  return (
    <div className="Tier" ref={setNodeRef}>
      <div className="Label" style={{ backgroundColor: color }}>
        {tierName}
      </div>
      <div>
      {cards.map((item) => (
        <Card
          imagePath={item.imagePath}
          description={item.description}
        />
      ))}
      </div>
    </div>
  );
}

export default Tier;
