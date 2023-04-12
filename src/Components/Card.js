const Card = ({ imagePath, description }) => {
  function handleDragStart(event) {
    event.dataTransfer.setData(
      "Card",
      JSON.stringify({ imagePath, description })
    );
  }

  return (
    <div className="Card" draggable="true" onDragStart={handleDragStart}>
      <img src={imagePath} alt={description} width={100} />
    </div>
  );
};

export default Card;
