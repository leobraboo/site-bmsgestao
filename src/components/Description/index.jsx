import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../UI";
import "./style.css";

export function Description() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const descriptions = [
    {
      title: "A solução completa e intuitiva para otimizar a gestão do seu negócio!",
      imageSrc: "/section1.png",
      imageAlt: "description image",
      pretext: "Gestão de Vendas",
      text: "Controle total de Frente de Caixa, Orçamentos, Vendas e Ordens de Serviço.",
    },
    {
      title: "A solução completa e intuitiva para otimizar a gestão do seu negócio!",
      imageSrc: "/section1.png",
      imageAlt: "description image",
      pretext: "Gestão Financeira",
      text: "Monitore a saúde financeira do seu negócio com precisão.",
    },
    {
      title: "A solução completa e intuitiva para otimizar a gestão do seu negócio!",
      imageSrc: "/section1.png",
      imageAlt: "description image",
      pretext: "Emissões Fiscais",
      text: "Regularize suas operaçõesfiscais de maneira rápida e fácil.",
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
            <h1 className="title-description">A solução <strong className="title-description-strong">COMPLETA</strong>  e intuitiva para otimizar a <strong className="title-description-strong">GESTÃO</strong>  do seu negócio!</h1>
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
            <span className="description-text-description">{desc.text}</span>
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
      <div className="free-btn-description">
        <Button backgroundColor="#f2a83e" color="#666" text="EXPERIMENTE AGORA GRATUITAMENTE" />
      </div>
    </section>
  );
}
