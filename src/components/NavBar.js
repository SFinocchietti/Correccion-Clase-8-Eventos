import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {


  if(props.footer){

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link
          to="/"
          className="nav-link active"
          aria-current="page"
        >
          Home
        </Link>
      </li>

    <li className="nav-item dropdown">
      <Link
        to="/category"
        className="nav-link dropdown-toggle btn-primary letraBlanca"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Productos
      </Link>

      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <NavLink to="category/Acciones" className="dropdown-item">
            Acciones
          </NavLink>
        </li>
        <li>
          <NavLink to="category/Bonos" className="dropdown-item">
            Bonos
          </NavLink>
        </li>
        <li>
          <NavLink to="category/Perfiles" className="dropdown-item">
            Perfiles
          </NavLink>
        </li>
        <li>
          <NavLink to="category/Mixto" className="dropdown-item">
            Mixto
          </NavLink>
        </li>
      </ul>
    </li>

      <li className="nav-item">
        <Link
          to="/sobrenosotros"
          className="nav-link active"
          aria-current="page"
        >
          Sobre Nosotros
        </Link>
      </li>

          
      {/* {!footer && <li className="nav-item"><Link to="/profile" className="nav-link active" aria-current="page">{nombre}</Link></li>} */}
          

      <li className="nav-item">
        <Link to="/cart">
          <CartWidget />
        </Link>
      </li>
      </ul>
    </div>
  </div>
</nav>

  )
}else{
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="/category"
              className="nav-link dropdown-toggle btn-primary letraBlanca"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </Link>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NavLink to="category/Acciones" className="dropdown-item">
                  Acciones
                </NavLink>
              </li>
              <li>
                <NavLink to="category/Bonos" className="dropdown-item">
                  Bonos
                </NavLink>
              </li>
              <li>
                <NavLink to="category/Perfiles" className="dropdown-item">
                  Perfiles
                </NavLink>
              </li>
              <li>
                <NavLink to="category/Mixto" className="dropdown-item">
                  Mixto
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link
              to="/sobrenosotros"
              className="nav-link active"
              aria-current="page"
            >
              Sobre Nosotros
            </Link>
          </li>

          {/* {!footer && (
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-link active"
                aria-current="page"
              >
                {nombre}
              </Link>
            </li>
          )} */}

          <li className="nav-item">
            <Link to="/cart">
              <CartWidget />
            </Link>
          </li>
        </ul>
      </div>

      <div className="d-flex">
        <Link to="/profile"
                className="nav-link active"
                aria-current="page">
        <button className="btn btn-outline-success" type="submit">
        <span class="material-symbols-outlined">person</span>
          <p>{props.nombre} {props.apellido}</p>
        </button>
        </Link>
      </div>
    </div>
  </nav>
  );
};
};

export default NavBar;





// import CartWidget from "./CartWidget";
// import { Link, NavLink } from "react-router-dom";

// const NavBar = (footer, nombreUsuario) => {
//   if (footer) {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link active" aria-current="page">
//                   Home
//                 </Link>
//               </li>

//               <li className="nav-item dropdown">
//                 <Link
//                   to="/category"
//                   className="nav-link dropdown-toggle btn-primary letraBlanca"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Productos
//                 </Link>

//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <NavLink to="/category/Chapas" className="dropdown-item">
//                       Acciones
//                     </NavLink>
//                     </li>
//                   <li>
//                     <NavLink to="/category/Caños" className="dropdown-item">
//                       Bonos
//                     </NavLink>
//                     </li>
//                   <li>
//                     <NavLink to="/category/Perfiles" className="dropdown-item">
//                       Perfiles
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/category/Herrajes" className="dropdown-item">
//                       Mixto
//                     </NavLink>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to="/sobrenosotros"
//                   className="nav-link active"
//                   aria-current="page"
//                 >
//                   Sobre Nosotros
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to="/Otros" className="nav-link disabled">
//                   Otros
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to="/Carrito">
//                   <CartWidget />
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="d-flex">
//             <button className="btn btn-outline-success" type="submit">
//               Login
//             </button>
//           </div>
//           </div>
//       </nav>
//     );
//   } else {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <a href="/">Hola {nombreUsuario}</a>

//               <li className="nav-item">
//                 <Link
//                   to="/Usuario"
//                   className="nav-link active"
//                   aria-current="page"
//                 >
//                   {nombreUsuario}
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   to="/Home"
//                   className="nav-link active"
//                   aria-current="page"
//                 >
//                   Home
//                 </Link>
//               </li>

//               <li className="nav-item dropdown">
//                 <Link
//                   to="/category"
//                   className="nav-link dropdown-toggle btn-primary letraBlanca"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Productos
//                 </Link>

//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <NavLink to="category/Chapas" className="dropdown-item">
//                       Acciones
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="category/Caños" className="dropdown-item">
//                       Bonos
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="category/Perfiles" className="dropdown-item">
//                       Perfiles
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="category/Herrajes" className="dropdown-item">
//                       Mixto
//                     </NavLink>
//                   </li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   to="/sobrenosotros"
//                   className="nav-link active"
//                   aria-current="page"
//                 >
//                   Sobre Nosotros
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to="/Otros" className="nav-link disabled">
//                   Otros
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to="/Carrito">
//                   <CartWidget />
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="d-flex">
//             <button className="btn btn-outline-success" type="submit">
//               Login
//             </button>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// };

// export default NavBar;
