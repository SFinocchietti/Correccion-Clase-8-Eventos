import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
        <h1 className="header__titulo">Acciones</h1>
        </Link>
        <NavBar nombre="Otwel" footer={false} />
        </header>
    </>
  );
};

export default Header;





