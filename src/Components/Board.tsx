import React from "react";
import Tier from "./Tier";

function Board() {

  return (
    <div className="Board">
      <Tier tierName="S" color="red" />
      <Tier tierName="A" color="orange" />
      <Tier tierName="B" color="yellow" />
      <Tier tierName="C" color="green" />
      <Tier tierName="D" color="cyan" />
      <Tier tierName="F" color="magenta" />
    </div>
  );
}

export default Board;
