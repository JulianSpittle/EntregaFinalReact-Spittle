import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  //Acceder a los productos desde firestore

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = id ? query(itemsCollection, where("Categoria", "==", id)) : itemsCollection;
    getDocs(q).then(resultado => {
        if (resultado.size > 0) {
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
            setLoading(false);
        } else {
            console.error("Error! No se encontraron productos en la colección!");
        }
    });
}, [id]);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-12">
        {loading ? <Loading /> : <ItemList productos={items} />}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
