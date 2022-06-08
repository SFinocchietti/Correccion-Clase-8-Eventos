import btc from "../imagenes/btc.jpg";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";
import SobreNosotros from "./SobreNosotros";
import Profile from "./Profile";
import Cart from "./Cart";

const Main = () => {
  return (
    <main className="main" >
      
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
 <Route path="/cart" element={<Cart />} />
 <Route path="/sobrenosotros" element={<SobreNosotros />} />
 <Route path="/profile" element={<Profile/>}/>
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