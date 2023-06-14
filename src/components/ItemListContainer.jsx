import { useState, useEffect } from "react";
import productos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  // Acceder a los productos desde el archivo .json
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          id ? productos.filter((item) => item.Categoria === id) : productos
        );
      }, 1000);
    });

    promesa.then((data) => {
      setItems(data);
    });
  }, [id]);

  //Acceder a los productos desde firestore

  // useEffect(() => {
  //     const db = getFirestore();
  //     const producto = doc(db, "items", "aZEamAILEcFhZdMT3l7F");
  //     getDoc(producto).then(resultado => {
  //       if (resultado.exists()){
  //         setItems({id: resultado.id, ...resultado.data()})
  //       }
  //   });
  // }, [id]);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-12">
          <ItemList productos={items} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
