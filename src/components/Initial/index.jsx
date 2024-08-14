import "./style.css";
import Image from "next/image";
import { Button } from "../UI";
export function Initial() {
  return (
    <section className="container-initial">
      <div className="description-initial">
        <h1 className="title-initial">
          Uma maneira SIMPLES e EFICAZ para controlar o seu negócio!
        </h1>
        <div className="content-img-initial">
          <Image
            className="img-initial"
            src="/initialNot.png"
            width={400}
            height={250}
            alt="description image"
          />
        </div>
        <span className="description-text">
          Um sistema fácil de usar, seguro e rápido de implementar. Automatize
          suas finanças e mantenha tudo organizado. Ganhe mais controle, tempo e
          previsibilidade para fazer o seu negócio crescer.
        </span>
        <span className="pre-footer-initial">
          *Assinaturas a partir de R$ 59,90 por mês.
        </span>
        <div className="free-btn-initial">
          <Button text="Experimente Gratuitamente por 15 Dias" />
        </div>
      </div>
    </section>
  );
}
