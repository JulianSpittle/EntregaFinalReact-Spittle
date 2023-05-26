const CartWidget = () => {
  return (
    <div className="bg-body-secondary p-3">
      <button type="button" class="btn btn-warning btn-lg position-relative">
        <i className="fa fa-shopping-cart" />
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0<span class="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  );
};

export default CartWidget;
