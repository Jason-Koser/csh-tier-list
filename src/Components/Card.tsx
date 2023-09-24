import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { CardObj } from "./BoardGroup";

const Card = (cardProperty:CardObj) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: cardProperty.imagePath,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      className="Card"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <img src={cardProperty.imagePath} alt={cardProperty.description} width={100} />
    </div>
  );
};

export default Card;
