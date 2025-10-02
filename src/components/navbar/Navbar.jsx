import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="logo2.png" alt="" />
          <span>FG Inmobiliaria</span>
        </a>
        <a href="/">Home</a>
        <a href="/">Nosotros</a>
        <a href="/">Contacto</a>
        <a href="/">Agente</a>
      </div>
      <div className="right">
        <a href="/">Iniciar</a>
        <a href="/" className="register">
          Registro
        </a>
        <div className="menuIcon">
          <img
            src="/public/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">Nosotros</a>
          <a href="/">Contacto</a>
          <a href="/">Agente</a>
          <a href="/">Iniciar</a>
          <a href="/">Registro</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
