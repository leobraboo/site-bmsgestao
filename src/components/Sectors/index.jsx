import "./style.css";
import Image from "next/image";
import { Button } from "../UI";
export function Sectors() {
  return (
    <section className="container-sectors">
      <div className="description-sectors">
        <h1 className="title-sectors">Segmentos que atuamos:</h1>
        <div className="carousel-wrapper">
          <div className="content-img-sectors">
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/smart.png"
                width={200}
                height={250}
                alt="Sistema de gestão para Lojas de celulares e equipamentos"
              />
              <span className="img-text">
                Lojas de celulares <br /> e equipamentos
              </span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/makeup.png"
                width={200}
                height={250}
                alt="Sistema de gestão para Lojas de cosméticos"
              />
              <span className="img-text">Lojas de <br /> cosméticos</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/construction.png"
                width={200}
                height={250}
                alt="Sistema de gestão para Lojas de Materiais de Construção"
              />
              <span className="img-text">Lojas de <br /> Materiais de <br /> Construção</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/closet.png"
                width={200}
                height={250}
                alt="Sistema de gestão para Lojas de Roupas e Calçados"
              />
              <span className="img-text">Lojas de <br /> Roupas e <br /> Calçados</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/varejo.jpg"
                width={200}
                height={250}
                alt="Sistema de gestão para Lojas de Varejo"
              />
              <span className="img-text">Lojas de <br /> Varejo</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/restaurante.jpg"
                width={200}
                height={250}
                alt="Sistema de gestão para Restaurantes e Bares"
              />
              <span className="img-text">Restaurantes e <br /> Bares</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/minimarket.jpg"
                width={200}
                height={250}
                alt="Sistema de gestão para Minimercados"
              />
              <span className="img-text">Minimercados</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/farm.jpg"
                width={200}
                height={250}
                alt="Sistema de gestão para Farmácias e Drogarias"
              />
              <span className="img-text">Farmácias e <br /> Drogarias</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/prestadores.jpg"
                width={200}
                height={250}
                alt="Sistema de gestão para Prestadores de Serviços"
              />
              <span className="img-text">Prestadores de <br /> Serviços</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/posto.jpg"
                width={200}
                height={250}
                alt="Sistema de gestão para Postos de Combustíveis"
              />
              <span className="img-text">Postos de <br /> Combustíveis</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/assinatura.jpg"
                width={200}
                height={250}
                alt="Sistema de gestão para Serviços de Assinatura"
              />
              <span className="img-text">Serviços de <br /> Assinatura</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/oficina.jpg"
                width={200}
                height={250}
                alt="Sistema de gestão para Oficinas Mecânicas"
              />
              <span className="img-text">Oficinas <br /> Mecânicas</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/marcenaria.jpg"
                width={200}
                height={250}
                alt="Sistema de gestão para Marcenarias"
              />
              <span className="img-text">Marcenarias</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/marmoraria.jpg"
                width={200}
                height={250}
                alt="Sistema de gestão para Marmorarias"
              />
              <span className="img-text">Marmorarias</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/clinic.jpg"
                width={200}
                height={250}
                alt="Sistema de gestão para Clínicas e Consultórios"
              />
              <span className="img-text">Clínicas e <br /> Consultórios</span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/escola.jpg"
                width={200}
                height={250}
                alt="Sistema de gestão para Educação e Cursos"
              />
              <span className="img-text">Educação e <br /> Cursos</span>
            </div>
          </div>
        </div>
        <span className="description-text-sectors">
          Já ajudamos centenas de pequenos negócios a profissionalizarem a sua
          gestão! <br /> Venha ver como podemos te ajudar!
        </span>
        <div className="free-btn-sectors">
          <Button text="CONHEÇA MELHOR" />
        </div>
      </div>
    </section>
  );
}
