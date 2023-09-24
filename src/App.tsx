import "csh-material-bootstrap/dist/csh-material-bootstrap.css";
import Header from "./Components/Header.tsx";
import BoardGroup from "./Components/BoardGroup.tsx";
import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <BoardGroup />
    </>
  );
}

export default App;
