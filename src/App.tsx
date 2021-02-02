import React from "react";
import "./App.css";
import { poetMap, poets } from "./names";
import poetExampleImage from "./images/poet-portrait-example.jpg";
import {
  BrowserRouter,
  Switch,
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";
import { Poem, Poet, PoetPageDetails } from "./types";
import { useScrollToTop } from "./useScrollToTop";

type PoetItemProps = {
  poet: Poet;
};

const PoetItem = ({ poet }: PoetItemProps) => (
  <Link to={`/poet/${poet.id}`}>
    <div className="PoetItem">
      <img className="PoetItem-image" src={poetExampleImage} />
      <div className="PoetItem-name">{poet.name}</div>
    </div>
  </Link>
);

type PoetsListProps = {
  poets: Poet[];
};

const PoetsList = ({ poets }: PoetsListProps) => (
  <div className="PoetsList">
    {poets.map((poet) => (
      <PoetItem key={poet.id} poet={poet} />
    ))}
  </div>
);

const NotFoundDisplay = () => (
  <div className="error-page">Whoops we&apos;re lost!</div>
);

function usePoetPageDetail(): PoetPageDetails | undefined {
  const match = useRouteMatch<{ poetId: string }>();
  const poetId = match.params.poetId.toLowerCase();

  if (!poetId) return undefined;

  return poetMap[poetId];
}

type PoemsListProps = {
  poems: Poem[];
};

const PoemList = ({ poems }: PoemsListProps) => {
  return (
    <div>
      {poems.map((poem) => (
        <div key={poem.id}>{poem.text}</div>
      ))}
    </div>
  );
};

const PoetPage = () => {
  useScrollToTop();

  const poetPageDetail = usePoetPageDetail();

  if (!poetPageDetail) return <NotFoundDisplay />;

  return (
    <div className="PoetPage">
      <div className="PoetPage-image"></div>
      <div>This is the page for {poetPageDetail.poet.name}!</div>
      <PoemList poems={poetPageDetail.poems} />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="App-header-title">
            QUEER POETS IN GREEK
          </Link>
        </header>
        <div className="App-body">
          <Switch>
            <Route path="/poet/:poetId">
              <PoetPage />
            </Route>
            <Route path="/" exact>
              <PoetsList poets={poets} />
            </Route>
            <Route path="/">
              <NotFoundDisplay />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
