import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Footer from "./components/Footer/Footer";
import ItemList from "./components/ItemList/ItemList";
import Item from "./components/Item/Item"
import asyncMock from "./components/NavBar/asyncMock";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <NavBar />
      <ItemListContainer greeting={"ItemListContainer"} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
      <Item/>
      <ItemList/>
      <Footer />
    </div>
  );
}

export default App;
