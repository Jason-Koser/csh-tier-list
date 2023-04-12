

const Card = (props) => {
  function handleDragStart(event) {
    event.dataTransfer.setData("Card Key", props.key);
    console.log("Drag Start");
  }

  return (
    <div className="Card" draggable="true" onDragStart={handleDragStart}>
      <img src={props.imagePath} alt={props.description} width={100} />
    </div>
  );
};

export default Card;
