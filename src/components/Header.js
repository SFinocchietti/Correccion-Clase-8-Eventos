import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
        <h1 className="header__titulo">Acciones</h1>
        </Link>
        <Link to="/cart">
          <span className="material-icons">shopping_cart</span>
        </Link>
        <NavBar nombre="Otwel" footer={false} />
        </header>
    </>
  );
};

export default Header;





/******************CODIGO EN REVISION***********/

// import NavBar from "./NavBar.js"
// import Nav from "./CartWidget.js"
// import { Link  } from "react-router-dom"

// const Header = () => {
//     return (
//         <header className="header">
//         <Link to="/">
//         <h1 className="header__titulo"> Tu inversión online </h1>
//         </Link>
//         <Nav/>
//         <NavBar/>
//         </header>
//     )
// }

// export default Header