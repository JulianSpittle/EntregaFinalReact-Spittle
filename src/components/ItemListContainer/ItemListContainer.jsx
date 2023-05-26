import { useState, useEffect } from 'react';
import { getProductByCategory } from '../NavBar/asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])


  //VIDEO 4
  // const {categoryId} = useParams()

  // useEffect (() => {
  //   const asyncFunc = categoryId ? getProductByCategory : getProducts

  //   asyncFunc (categoryId)
  //     .then(response => {
  //       setProducts(response)
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }, [categoryId])

  useEffect(() => {
    getProductByCategory()
      .then(response => {
          setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div className="bg-body-secondary p-3 text-center">
      <h3>{greeting}</h3>
      <ItemList products={products}/>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <img
              src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_36341_Fuente_Gamemax_450W_VP-450_78__EF_12CM_Fan_C_Cable2_d5eee39c-med.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card de ejemplo</h5>
              <p className="card-text">Texto de ejemplo</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
