import React from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import { names } from "./names";
import poetExampleImage from "./images/poet-portrait-example.jpg";

type Poet = { id: string; name: string; portraitUrl: string };

type PoetsListProps = {
  poets: Poet[];
};

const PoetItem = ({ poet }: { poet: Poet }) => (
  <div className="PoetItem">
    <img className="PoetItem-image" src={poetExampleImage} />
    <div className="PoetItem-name">{poet.name}</div>
  </div>
);

const PoetsList = ({ poets }: PoetsListProps) => (
  <div className="PoetsList">
    {poets.map((poet) => (
      <PoetItem key={poet.id} poet={poet} />
    ))}
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">QUEER POETS IN GREEK</header>
      <main className="App-body">
        <PoetsList poets={names.map(createPoet)} />
      </main>
    </div>
  );
}

export default App;

function createPoet(name: string): Poet {
  return {
    id: uuid(),
    name,
    portraitUrl:
      "https://nypost.com/wp-content/uploads/sites/2/2020/01/peter-chinman-by-michael-j.-fiedler.jpg?quality=90&strip=all&w=618&h=410&crop=1",
  };
}
