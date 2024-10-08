import "./style.css";
import Image from "next/image";
import { Button } from "../UI";
export function Excel() {
  return (
    <section className="container-excel">
      <div className="description-excel">
        <h1 className="title-excel">
          Dê <strong className="title-excel-strong">ADEUS</strong> as suas planilhas de excel e aos caderninhos de anotações.
        </h1>
        <div className="content-img-excel">
          <Image
            className="img-excel"
            src="/excel.png"
            width={400}
            height={250}
            alt="description image"
          />
        </div>
        <span className="description-text-excel">
          Com o BMS Gestão, você faz a gestão completa do seu negócio! <br /> Suas
          informações estarão seguras e você poderá acessá
        </span>
        <div className="free-btn-excel">
          <Button text="Experimente Grátis" />
        </div>
      </div>
      <div className="content-img-excel-desktop">
          <Image
            className="img-excel"
            src="/excel.png"
            width={600}
            height={450}
            alt="description image"
          />
        </div>
    </section>
  );
}
