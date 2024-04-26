import Image from "next/image";
import "./style.css";
import { Button } from "../UI";
import { IoIosArrowDown } from "react-icons/io";

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
        <span className="question-Questions">
          O BMS GESTÃO funciona em rede?
        </span>
        <span className="answer-Questions">
          O BMS Gestão é um sistema WEB. Você só precisa da internet para
          acessar de onde estiver.
        </span>
        <span className="question-Questions">
          Como funciona o SUPORTE TÉCNICO?
        </span>
        <span className="answer-Questions">
          Nosso suporte é 100% GRATUITO. Aqui, você pode contar com um suporte
          humanizado, sem filas e sem espera.
        </span>
        <span className="question-Questions">
          Preciso EMITIR NF-e e NFC-e. O sistema consegue me atender?
        </span>
        <span className="answer-Questions">
          Sim! Nosso sistema tem toda a parte de frente de caixa com a emissão
          do Cupom eletrônico
        </span>
        <span className="question-Questions">
          O sistema possui controle de estoque?
        </span>
        <span className="answer-Questions">
          Sim! Possui um controle completo de estoque, com importação do XML das
          notas de compras.
        </span>
      </div>
      <div>
        <IoIosArrowDown size={35} color="white" />
      </div>
      <div className="free-btn-Questions">
        <Button text="Tenho uma dúvida!" />
      </div>
    </section>
  );
}
