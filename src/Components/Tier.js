import Card from "./Card";

function Tier(props) {

  return (
    <div className="Tier">
      <div className="Label">{props.tierName}</div>
      <Card />
    </div>
  );
}

export default Tier;
