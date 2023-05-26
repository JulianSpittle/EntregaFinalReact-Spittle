import { useState, useEffect } from "react";
import productos from "./json/productos.json"
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {id} = useParams ();

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(id ? productos.filter(item => item.category === id) : productos);
      },2000);
    });

    promise.then(data => {
      setItems(data);
    })
  }, [id]);

  return(
    <div className="container-fluid">
      <div className="row">
        <ItemList productos={items} />
      </div>
    </div>
  )
}

export default ItemListContainer;
