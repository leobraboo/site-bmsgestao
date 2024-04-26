import "./style.css";
import Image from "next/image";

export function Footer() {
  return (
    <section className="container-footer">
      <div className="footer-img">
        <Image
          className="img-footer"
          src="/logo-bms.png"
          width={180}
          height={50}
          alt="logo empresa bms"
        />
        <a className="strong-footer">www.bmssoftwares.com.br</a>
      </div>
      <div className="description-footer">
        <span>
          Desenvolvido por: BMS LTDA, empresa que está há 25 anos atuando no
          mercado de softwares no Brasil.
        </span>
        <span> CNPJ: 03.054.436/0001-51</span>
        <span>Mais de 10.000 clientes atendidos em todo Brasil.</span>
      </div>
    </section>
  );
}
