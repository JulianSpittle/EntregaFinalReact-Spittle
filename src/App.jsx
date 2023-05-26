import "./App.css";
import Error404 from './components/Error404';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer />}></Route>
            <Route path={"/Categoria/:id"} element={<ItemListContainer />}></Route>
            <Route path={"/Item/:id"} element={<ItemDetailContainer />}></Route>
            <Route path={"/Main"} element={<Main />}></Route>
            <Route path={"/*"} element={<Error404 />}></Route>               
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
