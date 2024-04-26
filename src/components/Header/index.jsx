import "./style.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../UI";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

export function Header({ children }) {
  const handleClient = () => {
    window.open("https://bmsgestao.bmsltda.com.br");
  };
  const phoneNumber = "3138919414";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;

  const redirectToWhatsApp = () => {
    window.open(whatsappUrl);
  };
  const [scroll, setScroll] = useState(false);
  const [menuHamburgueIsActive, setMenuHamburgueIsActive] = useState(false);

  const handleHeaderFixed = () => {
    const scrollPosition = window.scrollY;
    setScroll(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderFixed);

    return () => {
      window.removeEventListener("scroll", handleHeaderFixed);
    };
  }, []);

  return (
    <header id="inicio">
      <div
        className="container-header"
        style={
          scroll > 126
            ? {
                position: "fixed",
                top: 0,
                zIndex: 9999,
                width: "100%",
                padding: 0,
                color: "black",
                backgroundColor: "#ffffffcc",
                transition: "ease-in all 0.1s",
              }
            : {}
        }
      >
        <div className="content-header">
          <Image
            className="logo-header"
            src="/logo.png"
            width={120}
            height={60}
            alt="Logo Company"
          />
        </div>

        <nav className="nav-right-header">
          <nav className="nav-left-header">
            <ul>
              <li>
                <a
                  style={ scroll > 126 ? { color: "black"} : {} }
                  href="#inicio"
                >
                  Início
                </a>
              </li>
              <li>
                <a style={ scroll > 126 ? { color: "black"} : {} } href="#funcionalidades">Funcionalidades</a>
              </li>
              <li>
                <a style={ scroll > 126 ? { color: "black"} : {} } href="#depoimentos">Depoimentos</a>
              </li>
              <li>
                <a style={ scroll > 126 ? { color: "black"} : {} } href="#planos">Planos</a>
              </li>
              <li>
                <a style={ scroll > 126 ? { color: "black"} : {} } href="#tutoriais">Tutoriais</a>
              </li>
              <li>
                <button onClick={handleClient} className="btn-client">
                 Entrar
                </button>
              </li>
            </ul>
          </nav>
        </nav>
      </div>
      <div
        className="menu-mobile-header"
        style={
          scroll > 126
            ? {
                position: "fixed",
                top: "20px",
                zIndex: 9999,
                padding: 0,
                backgroundColor: "rgb(255 255 255 / 40%)",
                transition: "ease-in all 0.1s",
              }
            : {}
        }
      >
        <label className="hamburger" htmlFor="input-header">
          <input
            type="checkbox"
            id="input-header"
            className="hamburger-input-header"
            onChange={() => setMenuHamburgueIsActive((state) => !state)}
            value={menuHamburgueIsActive}
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>
      <nav
        className={`nav-hamburger-header ${
          menuHamburgueIsActive && "nav-hamburger-header-is-open"
        }`}
      >
        <ul className="nav-item-hamburger-header">
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#funcionalidades">Funcionalidades</a>
          </li>
          <li>
            <a href="#depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="#planos">Planos</a>
          </li>
          <li>
            <a href="#tutoriais">Tutoriais</a>
          </li>
          <ul className="grup-btns-nav-hamburger-header">
            <li>
              <Button
                backgroundColor="#ff7f00"
                text="CADASTRE-SE"
                height="3.5rem"
                fontSize="1.6rem"
              />
            </li>
          </ul>
        </ul>
      </nav>

      <div onClick={redirectToWhatsApp} className="btnBackToTheTop">
        <PiWhatsappLogoDuotone />
      </div>
      {children}
    </header>
  );
}
