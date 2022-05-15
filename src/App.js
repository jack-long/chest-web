// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Demo from "./components/demo";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import NewItem from "./components/NewItem";

function Page(props) {
  const { children, index, page } = props;
  return <div hidden={index != page}>{children}</div>;
}

function App() {
  // TODO: button to add item, add item page.
  // navigation.
  const [page, setPage] = useState(1);
  return (
    <div className="container" style={{ maxWidth: 720 }}>
      <Header page={page} setPage={setPage} />
      <Page index={0} page={page}>
        <NewItem />
      </Page>
      <Page index={1} page={page}>
        <ItemList />
      </Page>
    </div>
  );
}

export default App;
