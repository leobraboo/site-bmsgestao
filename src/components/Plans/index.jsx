import Image from "next/image";
import "./style.css";
import { Button } from "../UI";

export function Plans() {
  return (
    <section id="planos" className="container-Plans">
      <div className="title-Plans">
        Temos o plano SOB MEDIDA para a sua empresa e para o seu bolso!
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
        <Button
          text="Solicite uma demonstração"
        />
      </div>
    </section>
  );
}
