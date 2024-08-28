import "./style.css";
import React, { useState } from "react";
import { Button } from "../UI";
import Image from "next/image";

export function Plans() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const plans = [
    {
      name: "Simples",
      price: "119,90",
      oldPrice: "199,90",
      description:
        "Ideal para realizar a gestão do seu negócio que não precisa da emissão fiscal.",
    },
    {
      name: "Completo",
      price: "199,90",
      oldPrice: "259,90",
      description: "Gestão completa com as emissões e relatórios fiscais.",
    },
    {
      name: "Personalizado",
      price: "Á consultar",
      oldPrice: "Á consultar",
      description: "Um plano personalizado para o seu negócio.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === plans.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? plans.length - 1 : prevIndex - 1
    );
  };

  const renderCarousel = () => (
    <div
      className="carousel-Plans"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
    >
      {plans.map((plan, index) => (
        <div key={index} className="content-Plans">
          <div className="card-Plans">
            <h2 className="testimony-Plans">{plan.name}</h2>
            <p>{plan.description}</p>
            {plan.price !== "Á consultar" ? (
              <>
                <p>
                  <s className="old-plans">
                    R$
                    <strong className="old-plans">{plan.oldPrice}</strong>
                  </s>
                </p>
                <p>
                  R$
                  <strong className="strong-plans">{plan.price}</strong>
                  /mês
                </p>
              </>
            ) : (
              <>
                <s className="old-plans">
                  <strong className="old-plans">{plan.oldPrice}</strong>
                </s>
                <p className="consult-price-Plans">{plan.price}</p>
              </>
            )}
            <Button text="CONHEÇA MELHOR" />
          </div>
        </div>
      ))}
    </div>
  );
  const renderPlans = () => (
    <div className="carousel-Plans-desktop">
      {plans.map((plan, index) => (
        <div key={index} className="content-Plans-desktop">
          <div className="card-Plans-desktop">
            {plan.name === "Completo" ? (
              <div className="indicated-plan">Mais indicado</div>
            ) : (
              <></>
            )}

            <h2 className="testimony-Plans">{plan.name}</h2>
            <p>{plan.description}</p>
            {plan.price !== "Á consultar" ? (
              <>
                <p>
                  <s className="old-plans">
                    R$
                    <strong className="old-plans">{plan.oldPrice}</strong>
                  </s>
                </p>
                <p>
                  R$
                  <strong className="strong-plans">{plan.price}</strong>
                  /mês
                </p>
              </>
            ) : (
              <>
                <s className="old-plans">
                  <strong className="old-plans">{plan.oldPrice}</strong>
                </s>
                <p className="consult-price-Plans">{plan.price}</p>
              </>
            )}
            <Button text="CONHEÇA MELHOR" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="planos" className="container-Plans">
      <div className="title-Plans">
        Temos o
        <strong className="title-Plans-strong"> PLANO SOB MEDIDA </strong>
        para a sua <strong className="title-Plans-strong">EMPRESA</strong> e
        para o seu <strong className="title-Plans-strong">BOLSO!</strong>
      </div>
      <div className="content-card-Plans">
        <button className="arrow-left-Plans" onClick={handlePrev}>
          {"<"}
        </button>
        {renderCarousel()}
        <button className="arrow-right-Plans" onClick={handleNext}>
          {">"}
        </button>
      </div>
      <div className="content-card-plans-desktop">{renderPlans()}</div>
      <div className="content-contador">
        <div className="content-img-contador-desktop">
          <Image
            className="img-initial-desktop"
            src="/contador.png"
            width={450}
            height={350}
            alt="description image"
          />
        </div>
        <div className="card-contador-desktop">
          <h3>Você é contador?</h3>
          <p>
            Temos um programa de parcerias exclusivas para contadores. Indique
            os seus clientes, agilize os seus processos e receba comissões.
          </p>
          <Button
            text="SAIBA MAIS"
            backgroundColor="#f2a83e"
            color="whitesmoke"
            border="1px solid #006494"
          />
        </div>
      </div>
      <div className="card-contador">
        <h3>Você é contador?</h3>
        <p>
          Temos um programa de parcerias exclusivas para contadores. Indique os
          seus clientes, agilize os seus processos e receba comissões.
        </p>
        <Button
          text="SAIBA MAIS"
          backgroundColor="whitesmoke"
          color="#006494"
          border="1px solid #006494"
        />
      </div>
    </section>
  );
}
