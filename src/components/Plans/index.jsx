import Image from "next/image";
import "./style.css";
import { Button } from "../UI";

export function Plans() {
  return (
    <section id="planos" className="container-Plans">
      <div className="svg-plans">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 240"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 L 0,150 C 117.42857142857142,154.85714285714286 234.85714285714283,159.71428571428572 346,169 C 457.14285714285717,178.28571428571428 562.0000000000001,192 699,189 C 835.9999999999999,186 1005.1428571428571,166.28571428571428 1134,157 C 1262.857142857143,147.71428571428572 1351.4285714285716,148.85714285714286 1440,150 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#001532"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
      <div className="title-Plans">
        Temos o Plano Ideal para o tamanho da sua empresa:
      </div>
      <div className="content-btns-card-Plans">
        <div className="content-card-Plans">
          <div className="content-Plans">
            <div className="card-Plans">
              <span className="testimony-Plans">Gestão Simples</span>
              <Image
                className="stars-header"
                src="/59.png"
                width={370}
                height={140}
                alt="Prices"
              />
              <span className="footertestimony-Plans">
                *Valores para Plano Anual. <br />
                *Não possui parte fiscal incluída
              </span>
            </div>
            <div className="card-Plans">
              <span className="testimony-Plans">Gestão Completo</span>
              <Image
                className="stars-header"
                src="/89.png"
                width={370}
                height={140}
                alt="Prices"
              />
              <span className="footertestimony-Plans">
                *Valores para Plano Anual. <br />
                *Emissão fiscal limitada (à consultar)
              </span>
            </div>
            <div className="card-Plans">
              <span className="testimony-Plans">Gestão Personalizado</span>
              <Image
                className="stars-header"
                src="/consult.png"
                width={370}
                height={140}
                alt="Prices"
              />
              <span className="footertestimony-Plans">
                Um plano na medida do que o seu <br /> negócio precisa. Solicite
                um orçamento.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="free-btn-Plans">
        <Button fontSize="1.4rem" height="4rem" text="Solicite uma demonstração" />
        <span className="footertestimony-Plans">
          Sem custo e sem compromisso!
        </span>
      </div>
      <div className="svg-example">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 240"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 L 0,150 C 117.42857142857142,154.85714285714286 234.85714285714283,159.71428571428572 346,169 C 457.14285714285717,178.28571428571428 562.0000000000001,192 699,189 C 835.9999999999999,186 1005.1428571428571,166.28571428571428 1134,157 C 1262.857142857143,147.71428571428572 1351.4285714285716,148.85714285714286 1440,150 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#001532"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
    </section>
  );
}
