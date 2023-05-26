import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
  const [items, setItems] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const incrementarStock = () => {
      if (items < itemStock) {
          setItems(items + 1);
      }
  }
  const decrementarStock = () => {
      if (items > 1) {
          setItems(items - 1);
      }
  }
  const onAdd = () => {
      if (items <= itemStock) {
          setItemStock(itemStock - items);
          setItems(1);
      }
  }
  useEffect(() => {
      setItemStock(stock);
}, [stock]);

    return(
        <div className='Counter'>
            <div className='Controls bg-body-secondary p-3'>
                <button className='Button' onClick={decrementarStock}>-</button>
                <h4 className='Number'>{items}</h4>
                <button className='Button' onClick={incrementarStock}>+</button>
            </div>
            <div className='bg-body-secondary p-3'>
            <button type="button" className="btn btn-agregar-carrito" onClick={onAdd} disable={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>            
    )
}

export default ItemCount;