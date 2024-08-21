import "./style.css";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoYoutube,
} from "react-icons/io5";

export function PreFooter() {
  const handleInstagram = () => {
    window.open("https://www.instagram.com/bms_gestao/");
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com/grupobmssoftwares");
  };

  const handleYoutube = () => {
    window.open("https://www.youtube.com/@BmsSoftwares");
  };
  return (
    <section className="container-pre-footer">
      <span  className="title-pre-footer"> <strong className="title-pre-footer-strong">REVOLUCIONE</strong> a maneira como você gerencia o seu negócio <strong className="title-pre-footer-strong">HOJE!</strong></span>
      <span className="description-pre-footer">
        Confie em quem está há mais de 25 anos no mercado, promovendo soluções
        para micro e pequenas empresas através da tecnologia.
      </span>
      <span className="description-pre-footer"> Nos acompanhe nas nossas redes sociais</span>
      <div className="content-logo-footer">
        <div onClick={handleInstagram} className="logo-footer">
          <IoLogoInstagram style={{ width: "100%", height: "100%" }} />
        </div>
        <div onClick={handleFacebook} className="logo-footer">
          <IoLogoFacebook style={{ width: "100%", height: "100%" }} />
        </div>
        <div onClick={handleYoutube} className="logo-footer">
          <IoLogoYoutube style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </section>
  );
}
