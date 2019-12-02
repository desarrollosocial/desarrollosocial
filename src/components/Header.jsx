import React from "react";
import { Link } from "react-router-dom";

// Assets
import logo from "../assets/img/logo.png";
import "../assets/css/header.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      show_menu: "",
      fixed_menu: { position: "relative" }
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    let scrollTop = window.scrollY;

    if(window.screen.width < 768){
        this.setState({ fixed_menu: { position: (scrollTop > 80) ? "fixed" : "relative"} })
    }else{
        this.setState({ fixed_menu: { position: "relative" } });
    }
  }

  render() {
    const toogleMenu = () => {
      const active_menu = this.state.show_menu;
      this.setState({ show_menu: active_menu === "active" ? "" : "active" });
    };

    const hideMenu = () => {
      const menu_movil = this.state.show_menu;
      if (menu_movil) {
        this.setState({ show_menu: "" })
      }
    };

    return (
      <header className="header" style={this.state.fixed_menu}>
        <div className=" container header__container">
          <Link to="/">
            <img
              className="header__container_img"
              src={logo}
              alt="Fundación Desarrollo Social Popayán Cauca"
            />
          </Link>
          <div className="header__container_menu">
              <nav className={this.state.show_menu}>
                <ul className="nav__menu">
                  <li>
                    <Link
                      to="/"
                      onClick={hideMenu}
                      className="nav__menu_link"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/galeria"
                      onClick={hideMenu}
                      className="nav__menu_link"
                    >
                      Galería
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/documentos"
                      onClick={hideMenu}
                      className="nav__menu_link"
                    >
                      Documentos
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#contacto"
                      onClick={hideMenu}
                      className="nav__menu_link link_contacto"
                    >
                    Contactáctanos
                    </a>
                  </li>
                </ul>
              </nav>

              <button type="button" className="nav_btn" onClick={toogleMenu}>
                <i className="fas fa-align-center"></i>
              </button>
          </div>

          <a
            href="#contacto"
            className="nav__menu_btn"
            onClick={hideMenu}
          >
            Contáctanos
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
