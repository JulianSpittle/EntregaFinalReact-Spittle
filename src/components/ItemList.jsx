import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="ListGroup bg-body-secondary p-3">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
