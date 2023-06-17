// const CartWidget = () => {
//   return (
//     <div className="p-3">
//       <button
//         type="button"
//         className="btn btn-warning btn-lg position-relative">
//         <i className="fa fa-shopping-cart" />
//         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//           0<span className="visually-hidden">unread messages</span>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default CartWidget;

import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import bag from "./images/bag.svg";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        (cartTotal() > 0) ? <Link className="btn btn-light position-relative" to={"/cart"}>
            <img src={bag} alt="Carrito" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link> : ""
    )
}

export default CartWidget;
