
import Item from "./Item"


const ItemList = ({productos}) => {

return(
    <section className="card-container">
    {productos.map((producto) => {
        return <Item key={producto.id} producto={producto}/>;                 
        })}
    </section>
);
}

export default ItemList





// const productosIniciales = [
//     {
//         id:1,
//         nombre: "Producto 1",
//         precio: 100
//     },
//     {
//         id:2,
//         nombre: "Producto 2",
//         precio: 200
//     },
//     {
//         id:3,
//         nombre: "Producto 3",
//         precio: 300
//     }
// ]
// const ItemList = () => {
//     const [productos,setProductos] = useState([])

// useEffect(()=>{
//     const promesa = new Promise ((res)=>{    
//         setTimeout(() =>{
//         res(productosIniciales)
// },2000
// }
// )

// .then((contenido)=>{
//     setProductos(contenido)
// }
// )
// .catch((error)=>{
//     console.log("Salio todo mal")
// })

// console.log("Pido productos")
// },[])  
// return(
// <>
//     <ul>
//      {productos.map((producto) => {
//         console.log(producto)
//          return <Item key={producto.id} producto={producto}></Item>
//      })}
//     </ul>
//     </>
// )
// }





































/*import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementeById("root");

const App = (props) => {

    const[ contador, setContador ] = useState(0);

    const handleClick = () => {
        setContador (contador + 1);
    } 
    
    const handleClickReset = () => {
        setContador(0)
    }
    
    return (
    <div>
        <p>Monto minimo para invertir</p>
        <h1>{contador}</h1>
        <button onClick={handleClick}>
    Invertir
        </button>
        <button onClick={handleClickReset}>
    Invertir menos
        </button>
    </div>
    
    );

}
ReactDOM.render(<App/>, rootElement); /***************VER ESTE CAMPO*******************/
