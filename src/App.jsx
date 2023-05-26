import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Footer from "./components/Footer/Footer";
import ItemList from "./components/ItemList/ItemList";
import Item from "./components/Item/Item"
import asyncMock from "./components/NavBar/asyncMock";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={ <ItemDetailContainer />}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

/* <ItemListContainer greeting={"ItemListContainer"} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
      <ItemDetailContainer/> */

export default App;


