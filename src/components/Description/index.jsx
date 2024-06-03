import Image from "next/image";
import { useEffect } from "react";
import "./style.css";

export function Description() {
  const handleMaps = () => {
    window.open("https://bmsgestao.bmsltda.com.br/");
  };
  useEffect(() => {
    const contentImgMaps = document.querySelector(".content-img-description");
    const descriptionMaps = document.querySelector(".description-description");

    const revealOnScroll = () => {
      const contentImgMapsTop = contentImgMaps.getBoundingClientRect().top;
      const descriptionMapsTop = descriptionMaps.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (contentImgMapsTop < windowHeight - 50) {
        contentImgMaps.classList.add("reveal-left");
      }

      if (descriptionMapsTop < windowHeight - 50) {
        descriptionMaps.classList.add("reveal-right");
      }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);
  return (
    <section id="funcionalidades" className="container-description">
      <div className="content-img-description">
        <Image
          className="img-description"
          src="/demo.png"
          width={550}
          height={400}
          alt="description image"
        />
        <span>
          Um sistema WEB. Acesse de onde estiver. <br />
          Compatível com TABLET.
        </span>
      </div>

      <div className="description-description">
        <h2 className="subtitle-description">Gestão Completa de Vendas</h2>
        <p>
          Controle total de Frente de Caixa, Orçamentos, Vendas <br /> e Ordens
          de Serviço.
        </p>
        <h2 className="subtitle-description">Gestão Financeira Eficiente</h2>
        <p>Monitore a saúde financeira do seu negócio com precisão.</p>
        <h2 className="subtitle-description">Emissões Fiscais Simplificadas</h2>
        <p>Regularize suas operações fiscais de maneira rápida e fácil.</p>
        <div className="free-btn-description">
          <button onClick={handleMaps} className="btn-free-description">
            Experimente Gratuitamente por 15 dias
          </button>
        </div>
      </div>
    </section>
  );
}
