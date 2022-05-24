import React, { useContext } from "react";
import CartContext from "./CartContext";


const Carrito = () => {
  const { precio_total, carrito, vaciarCarrito } = useContext(CartContext);
  //console.log({precio_total, carrito})

  const orden = {
    buyer : {
      name: "Juan",
      phone: "1213212",
      email: "test@test",

    },
    items: carrito,
    date: "",
    total: precio_total
 

  // consulta 
  // .then((resultado)=>{
  //   console.log(resultado)
  // })
  // .catch ((err)=>{
  //   console.log(err)
  // })
  }

  

  return (
    <div>
      <p>Carrito</p>
      <p>Precio total : $ {precio_total}</p>
    </div>
  );
};

export default Carrito;