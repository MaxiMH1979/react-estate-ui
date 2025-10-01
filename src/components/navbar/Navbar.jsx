import "./navbar.scss"

function Navbar() {
    return (
        <nav>
            <div className="left">
                <a  href="/" className="logo">
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
                <a href="/" className="register">Registro</a>
                <div className="menuIcon">
                    <img src="/public/menu.png" alt="" />
            </div>
            <div className="menu">
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