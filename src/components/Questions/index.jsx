import Image from "next/image";
import "./style.css";
import { Button } from "../UI";

export function Questions() {
  return (
    <section className="container-Questions">
      <div className="title-Questions">
        <Image
          className="logo-header"
          src="/questions.png"
          width={110}
          height={90}
          alt="questions commons"
        />
        <span>Perguntas Frequentes</span>
      </div>
      <div className="content-Questions">
        <span></span>
        <span></span>
      </div>
      <div className="free-btn-Questions">
        <Button text="Solicite uma demonstração" />
      </div>
    </section>
  );
}
