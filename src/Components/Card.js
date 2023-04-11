const Card = (props) => {
  return (
    <div className="Card" draggable="true">
      <img src={props.imagePath} alt={props.description} width={100}/>
    </div>
  );
};

export default Card;
