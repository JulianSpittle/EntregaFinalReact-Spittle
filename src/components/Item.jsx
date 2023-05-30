import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="col-md-4 my-3">
      <Link to={"/item/" + producto.id}>
        <div className="card">
          <img
            src={producto.Imagen}
            className="card-img-top"
            alt={producto.Nombre}
          />
          {/* <div>{producto.Nombre}</div> */}
        </div>
      </Link>
    </div>
  );
};

export default Item;
