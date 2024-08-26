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
                width={250}
                height={400}
                alt="Sistema de gestão para Lojas de celulares e equipamentos"
              />
              <span className="img-text">
                <p className="img-title">Lojas de celulares e equipamentos</p>
                <p className="img-subtext">
                  Venda de produto e ordem de serviço para reparos e consertos.
                </p>
              </span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/makeup.png"
                width={250}
                height={400}
                alt="Sistema de gestão para Lojas de cosméticos"
              />
              <span className="img-text">
                <p className="img-title">Lojas de cosméticos</p>
                <p className="img-subtext">
                  Use o leitor de código de barras para agilizar as vendas.
                  Faça uma gestão eficiente com o controle de estoque.
                </p>
              </span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/construction.png"
                width={250}
                height={400}
                alt="Sistema de gestão para Lojas de Materiais de Construção"
              />
              <span className="img-text">
                <p className="img-title">
                  Lojas de Materiais <br /> de Construção
                </p>
                <p className="img-subtext">
                  Use o leitor de código de barras para agilizar as vendas.
                  Faça uma gestão eficiente com o controle de estoque.
                </p>
              </span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/closet.png"
                width={250}
                height={400}
                alt="Sistema de gestão para Lojas de Roupas e Calçados"
              />
              <span className="img-text">
                <p className="img-title">Lojas de Roupas e Calçados</p>
                <p className="img-subtext">
                  Use o leitor de código de barras para agilizar as vendas.
                  Faça uma gestão eficiente com o controle de estoque.
                </p>
              </span>
            </div>

            <div className="item-img">
              <Image
                className="img-sectors"
                src="/prestadores.jpg"
                width={250}
                height={400}
                alt="Sistema de gestão para Prestadores de Serviços"
              />
              <span className="img-text">
                <p className="img-title">Prestadores de Serviços</p>
                <p className="img-subtext">
                  Utilize a nossa ordem de serviço e os seus status para
                  organizar o seu negócio.
                </p>
              </span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/oficina.jpg"
                width={250}
                height={400}
                alt="Sistema de gestão para Oficinas Mecânicas"
              />
              <span className="img-text">
                <p className="img-title">Oficinas Mecânicas</p>
                <p className="img-subtext">
                  Organize e acompanhe os serviços de reparo.Emita ordens de
                  serviço detalhadas e controle o estoque de peças com
                  facilidade.
                </p>
              </span>
            </div>
            <div className="item-img">
              <Image
                className="img-sectors"
                src="/marmoraria.jpg"
                width={250}
                height={400}
                alt="Sistema de gestão para Marmorarias"
              />
              <span className="img-text">
                <p className="img-title"> Marcenarias e Marmorarias</p>
                <p className="img-subtext">
                  Módulo de cálculo por M² facilitando e otimizando os custos e
                  pedidos de venda e orçamentos.
                </p>
              </span>
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
