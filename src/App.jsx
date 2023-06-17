import "./App.css";
import Cart from './components/Cart';
import Error404 from './components/Error404';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";


function App() {
  return (
    <div className="bg-body-secondary">
      <CartContextProvider>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />}></Route>
            <Route path={"/Categoria/:id"} element={<ItemListContainer />}></Route>
            <Route path={"/Item/:id"} element={<ItemDetailContainer />}></Route>
            <Route path={"/*"} element={<Error404 />}></Route>               
          </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}
export default App;
