import "./style.css";
import { Button } from "../UI";
export function Initial() {
  return (
    <section className="container-initial">
      <div className="description-initial">
        <h1 className="title-initial">
          Gestão Comercial Simplificada para Micro <br /> e Pequenos
          Empreendimentos
        </h1>
        <span className="description-text">
          Facilite, organize e profissionalize sua empresa de forma eficiente!
        </span>
        <span className="pre-footer-initial">
          *Assinaturas a partir de R$ 59,90 por mês.
        </span>
        <div className="free-btn-initial">
          <Button text="Experimente Gratuitamente por 15 Dias" />
        </div>
      </div>
      <div className="svg-example">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 240"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-10 ease-in-out delay-10"
        >
          <path
            d="M 0,400 L 0,150 C 117.42857142857142,154.85714285714286 234.85714285714283,159.71428571428572 346,169 C 457.14285714285717,178.28571428571428 562.0000000000001,192 699,189 C 835.9999999999999,186 1005.1428571428571,166.28571428571428 1134,157 C 1262.857142857143,147.71428571428572 1351.4285714285716,148.85714285714286 1440,150 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#001532"
            fillOpacity="1"
            className="transition-all duration-10 ease-in-out delay-10 path-0"
          ></path>
        </svg>
      </div>
    </section>
  );
}
