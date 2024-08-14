import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../UI";
import "./style.css";

export function Description() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const descriptions = [
    {
      title: "Um sistema descomplicado e completo para o seu negócio!",
      imageSrc: "/vendas.png",
      imageAlt: "description image",
      pretext: "Gestão de Vendas",
      text: "Controle total de Frente de Caixa, Orçamentos, Vendas e Ordens de Serviço.",
      backgroundImage: "url('/bg-gray-1.png')",
      backgroundPositionX: 500,
    },
    {
      title: "Um sistema descomplicado e completo para o seu negócio!",
      imageSrc: "/financeiro.png",
      imageAlt: "description image",
      pretext: "Gestão Financeira",
      text: "Monitore a saúde financeira do seu negócio com precisão.",
      backgroundImage: "url('/bg-gray-2.png')",
      backgroundPositionX: 0,

    },
    {
      title: "Um sistema descomplicado e completo para o seu negócio!",
      imageSrc: "/emissaofiscal.png",
      imageAlt: "description image",
      pretext: "Emissões Fiscais",
      text: "Regularize suas operaçõesfiscais de maneira rápida e fácil.",
      backgroundImage: "url('/bg-gray-3.png')",
      backgroundPositionX: 300,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [descriptions.length]);

  return (
    <section id="funcionalidades" className="container-description" style={{ backgroundImage: descriptions[currentIndex].backgroundImage, backgroundPositionX: descriptions[currentIndex].backgroundPositionX  }}>
      <div className="carousel">
        {descriptions.map((desc, index) => (
          <div
            key={index}
            className={`description-description ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ display: index === currentIndex ? "flex" : "none" }}
          >
            <h1 className="title-description">{desc.title}</h1>
            <div className="content-img-description">
              <Image
                className="img-description"
                src={desc.imageSrc}
                width={450}
                height={200}
                alt={desc.imageAlt}
              />
            </div>
            <span className="pre-footer-description">{desc.pretext}</span>
            <span className="description-text">{desc.text}</span>
            <div className="free-btn-description">
              <Button text="Teste GRATUITAMENTE por 30 dias" />
            </div>
          </div>
        ))}
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
    </section>
  );
}
