import "./style.css";
import Image from "next/image";
import { Button } from "../UI";
export function Initial() {
  return (
    <section className="container-initial">
      <div className="description-initial">
        <h1 className="title-initial">
          Uma maneira <strong className="title-initial-strong">SIMPLES</strong>  e <strong className="title-initial-strong">EFICAZ</strong> para controlar o seu negócio!
        </h1>
        <div className="content-img-initial">
          <Image
            className="img-initial"
            src="/initial.png"
            width={400}
            height={250}
            alt="description image"
          />
        </div>
        <span>
          Um sistema fácil de usar, seguro e rápido de implementar. Automatize
          suas finanças e mantenha tudo organizado. Ganhe mais controle, tempo e
          previsibilidade para fazer o seu negócio crescer.
        </span>
        <div className="free-btn-initial">
          <Button text="Experimente Gratuitamente" />
        </div>
      </div>
    </section>
  );
}
