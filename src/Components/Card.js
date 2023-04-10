const Card = (props) => {
  return (
    <div className="Card" draggable="true">
      <img src={require(props.image)} alt={props.description} />
    </div>
  );
};

export default Card;
