import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";



const productosIniciales = [

    {
    id: 1,
    nombre: "Accion1",
    rendimiento: "bajo",
    precio: 1000,
    stock: 200,
    categorias: "bajo",
    imagen: "https://via.placeholder.com/300x300",
},
{
    id: 2,
    nombre: "Accion2",
    rendimiento: "medio",
    precio: 2000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
},

{
    id: 3,
    nombre: "Accion3",
    rendimiento: "medio",
    precio: 3000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
},{
    id: 4,
    nombre: "Accion4",
    rendimiento: "medio",
    precio: 4000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
},{
    id: 5,
    nombre: "Accion5",
    rendimiento: "medio",
    precio: 5000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
},{
    id: 6,
    nombre: "Accion6",
    rendimiento: "medio",
    precio: 6000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
},{
    id: 7,
    nombre: "Accion7",
    rendimiento: "medio",
    precio: 7000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
},{
    id: 8,
    nombre: "Accion8",
    rendimiento: "medio",
    precio: 8000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
},{
    id: 9,
    nombre: "Accion9",
    rendimiento: "medio",
    precio: 9000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
},
{
    id: 10,
    nombre: "Accion10",
    rendimiento: "alto",
    precio: 10000,
    stock: 200,
    categorias: "alto",
    imagen: "https://via.placeholder.com/300x300",
},{
    id: 11,
    nombre: "Accion11",
    rendimiento: "alto",
    precio: 11000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
},{
    id: 12,
    nombre: "Accion12",
    rendimiento: "alto",
    precio: 12000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
},

];

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  //console.log({id})

  useEffect(() => {
    //console.log("Pido detalle de un solo producto :",id)

    toast.info("Cargando detalle...");

    const detalleProducto = productosIniciales.filter((producto) => {
      return producto.id == id;
    })[0];

    //console.log(detalleProducto)

    //console.log(producto.id)

    const pedidoDeDetalle = new Promise((res) => {
      setTimeout(() => {
        res(detalleProducto);
      }, 2000);
    }).then(() => {
      setCargando(false);
      setProducto(detalleProducto);
      toast.dismiss();
      toast.success("Detalle de Producto Cargado");
    });
  });

  if (cargando) {
    return <BeatLoader />;
  } else {
    return (
        <>
          <ItemDetail key={producto.id} producto={producto} />
        </>
      );
    }
  };
  
  export default ItemDetailContainer;






/***********************************CODIGO EN REVISION**********************/

// import { useEffect, useState } from "react"
// import ItemDetail from "./ItemDetail"

// const productosProbando = [
//     {
//         id:4,
//         nombre: "Producto 4",
//         precio: 400
//     },
//     {
//         id:5,
//         nombre: "Producto 5",
//         precio: 500
//     },
//     {

//         id:6,
//         nombre: "Producto 6",
//         precio: 600
//     }
// ]

// const ItemDetailContainer = ({id}) => {
//     const [producto,setProducto] = useState([])

//     useEffect(()=>{
//         const promesa = new Promise ((res)=>{    
//             setTimeout(() =>{
//             const buscarProducto = productosProbando.find(producto => producto.id === id)
//             res(buscarProducto)
//     },2000)
            
//     })
    
//     .then((contenido)=>{
//         setProducto(contenido)
//     })
//     .catch((error)=>{
//         console.log("Salio todo mal")
//     })
    
//     },[id])  
//     return(
//         <>
//     <p>Cargando..... </p>
//     <ul>   
//     <ItemDetail producto={producto}></ItemDetail>
//     </ul>
    
//     </>
//     )
// }
// export default ItemDetailContainer