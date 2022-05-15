import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { cartContext } from "./CartContext";

const ItemDetail = ({ producto }) => {
  const [nombre, setNombre] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const { addItem } = useContext(cartContext);
  const [verContador, setVerContador] = useState(false)

  const onAdd = (quantity) => {
    setCartItems(quantity);
    addItem(producto, quantity);
    //console.log(e.target)
    console.log("Click del padre");
  };

  const handleChange = (e) => {
    if (e.target.value !== "") {
      //nombre = e.target.name
      setNombre(e.target.value);
    }

    //console.log(e.target.name)
  };

  const handleFocus = (e) => {
    console.log("Focus");
  };

  const handleBlur = (e) => {
    console.log("Blur");
  };

  const handleClickDefault = (e) => {
    e.preventDefault();
    console.log("click default");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    console.log(nombre);
  };

  const funcionVerContador = () => {
      setVerContador(true)
  }

  if(!verContador) {


  return (
    <article className="card cardDetail">
      {/*<form onSubmit={handleSubmit}>
                <a href="http://google.com" onClick={handleClickDefault}>ir a Google</a>
                <button onClick={onAdd}>click</button>
                <input type="text" name="username" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
    </form>*/}
      {/*<Hijo onClick={onAdd}/>*/}

      <h1>Detalle del producto</h1>
      <h3>Titulo : {producto.nombre}</h3>
      <h4>Precio : $ {producto.precio}</h4>
      <img src={producto.imagen} alt="" />
      <p>Stock disponible : {producto.stock}</p>
      <p>Codigo de producto : {producto.id}</p>
      <p>Categoria : {producto.categorias}</p>
      <ItemCount stock={producto.stock} init={1} onAdd={onAdd} onCount={funcionVerContador}/>
      <Link to="/carrito" >
        <button className="botonSuma btn-primary">
          Terminar Compra
          </button>
        </Link>
    </article>
  );
} else {
    return(
    <article className="card cardDetail">
      {/*<form onSubmit={handleSubmit}>
                <a href="http://google.com" onClick={handleClickDefault}>ir a Google</a>
                <button onClick={onAdd}>click</button>
                <input type="text" name="username" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
    </form>*/}
      {/*<Hijo onClick={onAdd}/>*/}

      <h1>Detalle del producto</h1>
      <h3>Titulo : {producto.nombre}</h3>
      <h4>Precio : $ {producto.precio}</h4>
      <img src={producto.imagen} alt="" />
      <p>Stock disponible : {producto.stock}</p>
      <p>Codigo de producto : {producto.id}</p>
      <p>Categoria : {producto.categorias}</p>
      
        <Link to="/carrito" >
        <button className="botonSuma btn-primary">
          Terminar Compra
          </button>
        </Link>

    </article>
    )
}
};

export default ItemDetail;









/**************************************************************************************************
 * CODIGO EN REVISION
 * ************************************************************************************************/

// import productosIniciales from "./productos.json"
// import ItemCount from "./ItemCount"

// const ItemDetail = ({producto}) => {


//   const handleClick = (contador) =>{
    
//   }
  
//   return (
//     <>
//     <article className="card">
//     <div>
//       <h2>Para mas detalles</h2>
//     <img src="http://via.placeholder.com/200x200" alt="card"/>
//     </div>
//     <div>
//       <button>
//       <p className="card__precio">
//     $ {productosIniciales.precio}
//     </p>
//       </button>
//         </div>
//     </article>
//     <div>
//       <form onSubmit>
//         <input type="text" name="username"></input>
//         <button onClick={handleClick}>Buscar</button>
//         <ItemCount onClick={handleClick}/>
//       </form>
//     </div>
//     </>
//   )
// }

// export default ItemDetail
