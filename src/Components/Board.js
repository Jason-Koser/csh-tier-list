import Card from "./Card";

function Board({}) {
  return (
    <div className="Board">
      <div className="Row">
        <div className="Label">S</div>
        <Card />
      </div>
      <div className="Row">
        <div className="Label">A</div>
      </div>
      <div className="Row">
        <div className="Label">B</div>
      </div>
      <div className="Row">
        <div className="Label">C</div>
      </div>
      <div className="Row">
        <div className="Label">D</div>
      </div>
      <div className="Row">
        <div className="Label">F</div>
      </div>
    </div>
  );
}

export default Board;
