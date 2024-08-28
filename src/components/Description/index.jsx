import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../UI";
import "./style.css";

export function Description() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const descriptions = [
    {
      imageSrc: "/section.png",
      imageAlt: "carrinho de compras relacionado a emissão fiscal",
      pretext: "Gestão de Vendas",
      text: "O seu processo de venda muito mais rápido, eficiente e seguro! Emissão da NFC-e e NF-e integrado.",
    },
    {
      imageSrc: "/section1.png",
      imageAlt:
        "gráfico que mostra o quanto a empresa irá evoluir com o bms gestão",
      pretext: "Gestão Financeira",
      text: "Controle total das finanças da sua empresa em tempo real para decisões mais seguras e estratégicas!",
    },
    {
      imageSrc: "/section2.png",
      imageAlt: "funcionários utilizando o bsm gestão para controlar o estoque",
      pretext: "Gestão de Estoque",
      text: "Gerencie seu estoque de forma eficiente e economize tempo com a importação automática de XML e atualizações automática dos produtos.",
    },
    {
      imageSrc: "/section3.png",
      imageAlt:
        "representa um funcionário utilizando o bms gestão para gerar suas ordens de serviço",
      pretext: "Ordem de Serviço",
      text: "Organize suas ordens de serviço e orçamentos com mais agilidade e profissionalismo.Com emissão de NFS-e.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [descriptions.length]);

  return (
    <section id="funcionalidades" className="container-description">
      <div className="carousel">
        {descriptions.map((desc, index) => (
          <div
            key={index}
            className={`description-description ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ display: index === currentIndex ? "flex" : "none" }}
          >
            <h1 className="title-description">
              A solução{" "}
              <strong className="title-description-strong">COMPLETA</strong> e
              intuitiva para otimizar a{" "}
              <strong className="title-description-strong">GESTÃO</strong> do
              seu negócio!
            </h1>
            <div className="content-img-description">
              <Image
                className="img-description"
                src={desc.imageSrc}
                width={450}
                height={200}
                alt={desc.imageAlt}
              />
            </div>
            <div className="content-description-texts">
              <span className="pre-footer-description">{desc.pretext}</span>
              <span className="description-text-description">{desc.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-desktop">
        <h1 className="title-description">
          A solução{" "}
          <strong className="title-description-strong">COMPLETA</strong> e
          intuitiva para otimizar a{" "}
          <strong className="title-description-strong">GESTÃO</strong> do seu
          negócio!
        </h1>
        <div className="gif-desktop-card">
          <div className="content-gifs-description">
            <Image
              className="img-description"
              src="/gif.gif"
              width={500}
              height={400}
              alt="Sistema de gestão para Lojas de celulares e equipamentos"
            />
          </div>
          <div className="description-gifs-cards">
            <div className="content-description-texts-gifs">
              <span className="pre-footer-description">
                Gestão de Vendas (com NF-e e NFC-e)
              </span>
              <span className="description-text-description">
                O seu processo de venda muito mais rápido, eficiente e seguro!
                Emissão da NFC-e e NF-e integrado.
              </span>
            </div>
            <div className="content-description-texts-gifs">
              <span className="pre-footer-description">
                Gestão Financeira Completa com controle de Caixa
              </span>
              <span className="description-text-description">
                Controle total das finanças da sua empresa em tempo real para
                decisões ​mais seguras e estratégicas!
              </span>
            </div>
            <div className="content-description-texts-gifs">
              <span className="pre-footer-description">
                Gestão de Estoque com importação do XML
              </span>
              <span className="description-text-description">
                Gerencie seu estoque de forma eficiente e economize tempo com a
                ​importação automática de XML e a atualizações automática dos
                produtos.
              </span>
            </div>
            <div className="content-description-texts-gifs">
              <span className="pre-footer-description">
                Ordem de Serviço com emissão da NFS-e
              </span>
              <span className="description-text-description">
                Organize suas ordens de serviço e orçamentos com mais agilidade
                e ​profissionalismo.
              </span>
            </div>
          </div>
        </div>
        <div className="content-desktop-cards">
          {descriptions.map((desc, index) => (
            <div key={index} className="description-description desktop-card">
              <div className="content-img-description">
                <Image
                  className="img-description"
                  src={desc.imageSrc}
                  width={290}
                  height={260}
                  alt={desc.imageAlt}
                />
              </div>
              <div className="content-description-texts">
                <span className="pre-footer-description">{desc.pretext}</span>
                <span className="description-text-description">
                  {desc.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-indicators">
        {descriptions.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="free-btn-description">
        <Button
          backgroundColor="#f2a83e"
          color="#666"
          text="EXPERIMENTE AGORA GRATUITAMENTE"
        />
      </div>
    </section>
  );
}
