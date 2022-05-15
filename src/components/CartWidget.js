import { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "./MiContexto";

const CartWidget = () => {
  const { cantidad_total } = useContext(contexto);

  return (
    <Link to="/carrito">
      <span className="material-icons carrito">shopping_cart</span>
      {cantidad_total}
    </Link>
  );
};

export default CartWidget;







/****************** CODIGO EN REVISION************************/

// import { Link  } from "react-router-dom"
// const Icono = () => {
//     return (
//         <nav>
//             <Link to="/carrito">
//         <span className="material-icons">
//         local_atm
//         </span> 
//         </Link>
//         </nav>
//     )
// }

// export default Icono