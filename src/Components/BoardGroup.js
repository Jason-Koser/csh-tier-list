import Board from "./Board";
import CardList from "./CardList";

function BoardGroup() {
  const boardName = "Best Bodega Mac And Cheese";
  const description =
    "All the easy to make microwaveable (for the most part) mac and cheese options from the Corner Store ranked from F tier to S tier. Both taste and value were taken into account";
  const templateAuthor = "koser";

  return (
    <div className="BoardGroup">
      <h1>{boardName}</h1>
      <h3>Template made by @{templateAuthor}</h3>
      <p>{description}</p>
      <Board />
      <CardList />
    </div>
  );
}

export default BoardGroup;
