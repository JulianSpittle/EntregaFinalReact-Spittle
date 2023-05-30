import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="col-md-4 my-3">
      <Link to={"/item/" + producto.id}>
        <div className="divCards">
          <img
            src={producto.Imagen}
            className="card-img-top"
            alt={producto.Nombre}/>
        </div>
      </Link>
      <div className="cardHome">{producto.Nombre}</div>
    </div>
  );
};

export default Item;
