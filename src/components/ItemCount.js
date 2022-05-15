import { useState } from "react";

const ItemCount = ({ init, stock, onAdd , onCount}) => {
  const [contador, setContador] = useState(init);
  const [confirmado, setConfirmado] = useState(false);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("No tenemos mas stock");
    }
};

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
};

  const confirmar = () => {
    onAdd(contador);
    console.log(contador);
    setConfirmado(true);
};

  const cerrarConfirmado = () => {
    onCount()
    setConfirmado(false);
};

  if (!confirmado) {
    return (
      <div>
        <div className="">
          <button
            onClick={sumar}
            className="material-icons botonSuma btn-primary"
          >
            add
          </button>
          <p className="cantidad">Unidades a comprar : {contador}</p>
          <button
            onClick={restar}
            className="material-icons botonSuma btn-primary"
          >
            remove
          </button>
        </div>
        <button onClick={confirmar} className="botonSuma btn-primary">
          Confirmar
        </button>
      </div>
    );
} else {
    return (
      <div>
        <div className="">
          <button
            onClick={sumar}
            className="material-icons botonSuma btn-primary"
          >
            add
          </button>
          <p className="cantidad">Unidades a comprar : {contador}</p>
          <button
            onClick={restar}
            className="material-icons botonSuma btn-primary"
          >
            remove
          </button>
        </div>
        <button onClick={confirmar} className="botonSuma btn-primary">
          Confirmar
        </button>
        <h6 className="modalcss">
          Se confirmaron {contador} unidades!
          <button onClick={cerrarConfirmado}>Cerrar</button>
        </h6>
      </div>
    );
  }
};
export default ItemCount;








/******************************CODIGO EN REVISION ************************/

// import { useState } from "react";

// const ItemCount = ({onClick}) => {

//     const [contador, setContador] = useState(0);

//     const handleClick = () => {
//         console.log("click del hijo")
//         setContador(contador + 1)
//         onClick()
//     }


//     const handelConfirmar = () => {
//         onClick(contador)
//     }

//     return(
//         <>
//         <p>Cantidad :{contador}</p>
//         <button onClick={handleClick}> Click</button>
//         <button onClick={handelConfirmar}>Confirmar</button>
//         </>
//     )
// }

// export default ItemCount