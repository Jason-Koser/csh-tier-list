import { DndContext, closestCenter } from "@dnd-kit/core";
import Board from "./Board";
import CardList from "./CardList";
import React from "react";

function BoardGroup() {
  
  const boardName = "Best Bodega Mac And Cheese";
  const description =
    "All the easy to make microwaveable (for the most part) mac and cheese options from the Corner Store ranked from F tier to S tier. Both taste and value were taken into account";
  const templateAuthor = "koser";

  let cardDragged:CardObj;

  function handleOnDragStart(event: any) {
    console.log("Drag Started", event);
    cardDragged = event.active;
  }

  function handleOnDragEnd(event: any) {
    console.log("Dropped", event);
    if (event.over) {
      event.over.addCard(cardDragged);
    }
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleOnDragEnd}
      onDragStart={handleOnDragStart}
    >
      <div className="BoardGroup">
        <h1>{boardName}</h1>
        <h3>Template made by @{templateAuthor}</h3>
        <p>{description}</p>
        <Board />
        <CardList />
      </div>
    </DndContext>
  );
}

export default BoardGroup;

export class CardObj {
  imagePath: string;
  description: string;

  constructor(imagepath: string, description: string) {
    this.imagePath = imagepath;
    this.description = description;
  }
}
