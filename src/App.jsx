import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <NavBar />
      <ItemListContainer greeting={"ItemListContainer"} />
      <Footer />
    </div>
  );
}

export default App;
