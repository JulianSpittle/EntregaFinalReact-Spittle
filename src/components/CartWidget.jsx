const CartWidget = () => {
  return (
    <div className="p-3">
      <button
        type="button"
        className="btn btn-warning btn-lg position-relative">
        <i className="fa fa-shopping-cart" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0<span className="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  );
};

export default CartWidget;
