import "./style.css";
import { Button } from "../UI";
export function Initial() {
  return (
    <section className="container-reduce-more">
      <div className="description-reduce-more">
        <h1 className="title-reduce-more">
        Gestão Comercial Simplificada para Micro <br /> e Pequenos Empreendimentos
        </h1>
        <span>
        Descomplique, organize e profissionalize o seu negócio!
        </span>
        <span className="pre-footer-reduce-more">
        *Mensalidades a partir de R$ 59,90.
        </span>
        <div className="free-btn-reduce-more">
          <Button text="Teste Gratuitamente por 15 dias" />
        </div>
      </div>
    </section>
  );
}
