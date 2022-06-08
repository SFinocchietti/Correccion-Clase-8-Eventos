import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {db} from "./firebase"
import { collection , getDoc , doc , getDocs , addDoc , query , where } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);
  const { id } = useParams();


  useEffect(() => {
  toast.info("Cargando detalle...");

    const productosCollection = collection(db, "productos");
    const resultadoDelDoc=doc(productosCollection,id)
    const consulta = getDoc(resultadoDelDoc);
    //console.log(consulta)

    consulta
      .then((resultado) => {

        setProducto(resultado.data())
        setCargando(false)
        toast.dismiss();
        toast.success("Detalle de Producto Cargado");


      })
      .catch((error) => {
        console.log(error);
        setCargando(false);
      })
      .finally(() => {});



    // });
  }, [id]);

  return (
    <>
      {cargando ? (
        <BeatLoader />
      ) : (
        <ItemDetail key={producto.id} producto={producto} />
      )}
    </>
  );
};

export default ItemDetailContainer;









