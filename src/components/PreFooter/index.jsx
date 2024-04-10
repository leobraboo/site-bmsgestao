import "./style.css";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoYoutube,
} from "react-icons/io5";

export function PreFooter() {
  const handleInstagram = () => {
    window.open("https://www.instagram.com/bms.pedidos/");
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com/grupobmssoftwares");
  };

  const handleYoutube = () => {
    window.open("https://pedidos.bmspedidos.com.br/register");
  };
  return (
    <section className="container-pre-footer">
      <span>
        Revolucione a maneira como você gerencia o seu negócio HOJE! Confie em
        quem está há mais de 25 anos no mercado, promovendo soluções para micro
        e pequenas empresas através da tecnologia.
      </span>
      <span> Nos acompanhe nas nossas redes sociais</span>
      <div className="content-logo-footer">
        <div onClick={handleInstagram} className="logo-footer">
          <IoLogoInstagram style={{ width: "100%", height: "100%" }} />
        </div>
        <div onClick={handleFacebook} className="logo-footer">
          <IoLogoFacebook style={{ width: "100%", height: "100%" }} />
        </div>
        <div onClick={handleInstagram} className="logo-footer">
          <IoLogoYoutube style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </section>
  );
}
