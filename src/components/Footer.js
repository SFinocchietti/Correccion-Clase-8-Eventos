import NavBar from "./NavBar";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <NavBar nombreUsuario="Otwel" footer />
        <p>Copyright &copy; - 2022</p>
        <p>Todos los derechos reservados</p>
      </footer>
    </>
  );
};

export default Footer;