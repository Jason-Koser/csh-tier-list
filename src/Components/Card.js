const Card = (props) => {
  return (
    <div className="Card" draggable="true">
      <img src={props.imagePath} alt={props.description} />
    </div>
  );
};

export default Card;
