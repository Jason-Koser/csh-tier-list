import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Card = ({ imagePath, description }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: imagePath,
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
      <img src={imagePath} alt={description} width={100} />
    </div>
  );
};

export default Card;
