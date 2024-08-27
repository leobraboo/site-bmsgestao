import Image from "next/image";
import "./style.css";
import { Button } from "../UI";

export function Specialist() {
  return (
    <section className="container-specialist" id="suporte">
      <div className="content-img-specialist">
        <Image
          className="img-specialist"
          src="/newatendente.png"
          width={400}
          height={200}
          alt="specialist image"
        />
      </div>
      <div className="content-img-specialist-desktop">
        <Image
          className="img-specialist"
          src="/suport.png"
          width={600}
          height={450}
          alt="specialist image"
        />
      </div>
      <div className="description-specialist">
        <span className="title-specialist">
          Tem dúvidas de como a
          <strong className="title-specialist-strong"> BMS </strong> pode  
           <strong className="title-specialist-strong">
             ajudar o seu negócio?
          </strong>
        </span>
        <span className="text-weight-specialist">
          Nosso time está preparado para ajudar a melhorar a gestão da sua
          empresa!
        </span>
        <div className="btn-specialist">
          <Button text="Falar com Especialista" />
        </div>
      </div>
    </section>
  );
}
