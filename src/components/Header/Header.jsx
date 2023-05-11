import LogoHeader from "./assets/logoheader.png";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-body-secondary p-3">
        <div className="col-md-6">
          <img src={LogoHeader} alt={"Logo Header"} width={48} />
        </div>
        <div className="col-md-6 text-end">
          <a href="#" className="text-dark">
            Contactanos
          </a>{" "}
          |{" "}
          <a href="#" className="text-dark">
            Ayuda
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
