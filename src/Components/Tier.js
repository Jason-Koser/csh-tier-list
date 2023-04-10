import Card from "./Card";

function Tier(props) {

  return (
    <div className="Tier">
      <div className="Label" style={{backgroundColor: props.color}}>{props.tierName}</div>
      <Card />
    </div>
  );
}

export default Tier;
