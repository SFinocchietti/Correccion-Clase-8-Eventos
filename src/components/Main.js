import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";
import Carrito from "./Carrito";
import SobreNosotros from "./SobreNosotros";

const Main = () => {
  return (
    <main className="main">
{/*<h2>La nueva plataforma de invertir tu dinero</h2>
<h3>No duddes en invertir</h3>
<ItemListContainer nombreUsuario="Otwel"/>
 <ItemDetailContainer/>*/}
 <Routes>
 <Route path="/" element={<ItemListContainer />} />
 <Route
   path="/category/:nombreCategoria"
   element={<ItemListContainer />}
 />
 <Route path="/item/:id" element={<ItemDetailContainer />} />
 <Route path="/carrito" element={<Carrito />} />
 <Route path="/sobrenosotros" element={<SobreNosotros />} />
</Routes>
</main>
);
};

export default Main;


















// import {Routes , Route} from "react-router-dom"
// import ItemListContainer from "./ItemListContainer"


// const Main = () => {
//   return (
//     <main>
//     <h2>Tus opciones de inversion</h2>
//     <Routes>
//     <Route path="/producto/:id" element={<ItemListContainer/>}/>
//     </Routes>
//     </main>
//   )
// }

// export default Main