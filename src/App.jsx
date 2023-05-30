import "./App.css";
import Error404 from './components/Error404';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-body-secondary">
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
    </div>
  );
}
export default App;
