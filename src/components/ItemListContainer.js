import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection , getDoc , doc , getDocs , addDoc , query , where } from "firebase/firestore";

export const productosIniciales = [
{
    id: 1,
    nombre: "Accion1",
    rendimiento: "bajo",
    precio: 1000,
    stock: 200,
    categorias: "bajo",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
},
{
    id: 2,
    nombre: "Accion2",
    rendimiento: "medio",
    precio: 2000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
},
{
    id: 3,
    nombre: "Accion3",
    rendimiento: "medio",
    precio: 3000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
},{
    id: 4,
    nombre: "Accion4",
    rendimiento: "medio",
    precio: 4000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
},{
    id: 5,
    nombre: "Accion5",
    rendimiento: "medio",
    precio: 5000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
},{
    id: 6,
    nombre: "Accion6",
    rendimiento: "medio",
    precio: 6000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
},{
    id: 7,
    nombre: "Accion7",
    rendimiento: "medio",
    precio: 7000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
},{
    id: 8,
    nombre: "Accion8",
    rendimiento: "medio",
    precio: 8000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
},{
    id: 9,
    nombre: "Accion9",
    rendimiento: "medio",
    precio: 9000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
},
{
    id: 10,
    nombre: "Accion10",
    rendimiento: "alto",
    precio: 10000,
    stock: 200,
    categorias: "alto",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
},{
    id: 11,
    nombre: "Accion11",
    rendimiento: "alto",
    precio: 11000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
},{
    id: 12,
    nombre: "Accion12",
    rendimiento: "alto",
    precio: 12000,
    stock: 200,
    categorias: "medio",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
},

];
const ItemListContainer = ({ children, apellido }) => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);
  const { nombreCategoria, test } = useParams();

  //console.log({nombreCategoria,test})

  useEffect(() => {

    const productosCollection = collection(db,"producto")
    const consulta = getDocs(productosCollection)
    //console.log(consulta)

    consulta
      .then((resultado)=>{
        //console.log(resultado.docs)

        const productos = resultado.docs.map(doc=>{

          const productoConId = doc.data()
          productoConId.id = doc.id

          return productoConId
        })

        setProducto(productos)
        setCargando(false)

        //console.log(productos)
      })
      .catch((error)=>{

      })
      .finally(()=>{

      })





/*
    //console.log("Pido todos los productos")
    toast.info("Cargando productos...");
    const pedido = new Promise((res) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 2000);
    }).then(() => {
      if (nombreCategoria === undefined) {
        setCargando(false);
        setProducto(productosIniciales);
        toast.dismiss();
        toast.success("Productos Cargados");
      } else {
        //console.log("Pido los productos de la categoria :",nombreCategoria)
        toast.info("Cargando productos...");
        setProducto(
          productosIniciales.filter(
            (categoria) => categoria.categorias === nombreCategoria
          )
        );
        setCargando(false);
        toast.dismiss();
        toast.success("Productos Cargados");
      }
    });
*/
  }, [nombreCategoria]);

  return (
    <>
      {cargando ? <BeatLoader /> : <ItemList producto={producto} />}
    </>
  )


};

export default ItemListContainer;


/*
if (cargando) {
  return <BeatLoader />;
} else {
  return <ItemList producto={producto} />;
}
*/
