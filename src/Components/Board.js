import Tier from "./Tier";

function Board() {
  return (
    <div className="Board">
      <Tier tierName="S" />
      <Tier tierName="A" />
      <Tier tierName="B" />
      <Tier tierName="C" />
      <Tier tierName="D" />
      <Tier tierName="F" />
    </div>
  );
}

export default Board;
