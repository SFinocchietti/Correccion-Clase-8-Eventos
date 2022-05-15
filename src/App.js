import Header from "./components/Header";
import Footer from "./components/Footer.js";
import Main from "./components/Main";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomProvider } from "./components/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CustomProvider>
        <Header />
        <Main />
        <Footer />
        <ToastContainer />
      </CustomProvider>
    </BrowserRouter>
  );
};

export default App;

