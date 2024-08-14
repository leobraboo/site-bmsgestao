import Image from "next/image";
import "./style.css";
import { Button } from "../UI";

export function Specialist() {
  return (
    <section className="container-specialist" id="suporte">
      <div className="content-img-specialist">
        <Image
          className="img-specialist"
          src="/atendente.png"
          width={400}
          height={400}
          alt="specialist image"
        />
      </div>
      <div className="description-specialist">
        <span className="title-specialist">
          Quer saber mais, ou ficou com alguma duvida?
        </span>
        <span className="text-weight-specialist">
        Nosso time está preparado para ajudar a melhorar a gestão da sua empresa!
        </span>
        <div className="btn-specialist">
          <Button text="Falar com Especialista" />
        </div>
      </div>
    </section>
  );
}
