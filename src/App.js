// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Demo from "./components/demo";
import Header from "./components/Header";
import ItemList from "./views/ItemList";
import Login from "./views/Login";
import NewItem from "./views/NewItem";
import Register from "./views/Register";

function Page(props) {
  const { children, index, page } = props;
  return <div hidden={index !== page}>{children}</div>;
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
      <Page index={2} page={page}>
        <Register setPage={setPage} />
      </Page>
      <Page index={3} page={page}>
        <Login setPage={setPage} />
      </Page>
    </div>
  );
}

export default App;
