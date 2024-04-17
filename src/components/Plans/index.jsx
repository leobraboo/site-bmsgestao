import Image from "next/image";
import "./style.css";
import { Button } from "../UI";

export function Plans() {
  return (
    <section className="container-Plans">
      <div className="title-Plans">
        Temos o Plano Ideal para o tamanho da sua empresa:
      </div>
      <div className="content-btns-card-Plans">
        <div className="content-card-Plans">
          <div className="content-Plans">
            <div className="card-Plans">
              <span className="testimony-Plans">bla bla bla</span>
            </div>
            <div className="card-Plans">
              <span className="testimony-Plans">bla bla bla</span>
            </div>
            <div className="card-Plans">
              <span className="testimony-Plans">bla bla bla</span>
            </div>
          </div>
        </div>
      </div>
      <div className="free-btn-Plans">
        <Button text="Solicite uma demonstração" />
        <span className="testimony-Plans">Sem custo e sem compromisso!</span>
      </div>
    </section>
  );
}
