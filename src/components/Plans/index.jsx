import "./style.css";
import React, { useState } from "react";
import { Button } from "../UI";

export function Plans() {
  const [selectedPlan, setSelectedPlan] = useState("value-1");
  const [currentIndices, setCurrentIndices] = useState({
    "value-1": 0,
    "value-2": 0,
    "value-3": 0,
  });

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handleNext = () => {
    setCurrentIndices((prevIndices) => ({
      ...prevIndices,
      [selectedPlan]:
        prevIndices[selectedPlan] === 2 ? 0 : prevIndices[selectedPlan] + 1,
    }));
  };

  const handlePrev = () => {
    setCurrentIndices((prevIndices) => ({
      ...prevIndices,
      [selectedPlan]:
        prevIndices[selectedPlan] === 0 ? 2 : prevIndices[selectedPlan] - 1,
    }));
  };

  const plans = [
    { name: "Simples", price: "259,90", oldPrice: "359,90" },
    { name: "Completo", price: "259,90", oldPrice: "359,90" },
    { name: "Personalizado", price: "259,90", oldPrice: "359,90" },
  ];

  const renderCarousel = () => (
    <div
      className="carousel-Plans"
      style={{
        transform: `translateX(-${currentIndices[selectedPlan] * 100}%)`,
      }}
    >
      {plans.map((plan, index) => (
        <div key={index} className="content-Plans">
          <div className="card-Plans">
            <h2 className="testimony-Plans">{plan.name}</h2>
            <p>Plano exclusivo para microempreendedor individual (MEI)</p>
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
            <Button text="CONHEÇA MELHOR" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="planos" className="container-Plans">
      <div className="title-Plans">
        Temos o{" "}
        <strong className="title-Plans-strong"> PLANO SOB MEDIDA </strong>
        para a sua <strong className="title-Plans-strong">EMPRESA</strong> e
        para o seu <strong className="title-Plans-strong">BOLSO!</strong>
      </div>
      <div>
        <div className="radio-input">
          <label>
            <input
              type="radio"
              id="value-1"
              name="value-radio"
              value="value-1"
              checked={selectedPlan === "value-1"}
              onChange={handlePlanChange}
            />
            <span>Anual</span>
          </label>
          <label>
            <input
              type="radio"
              id="value-2"
              name="value-radio"
              value="value-2"
              checked={selectedPlan === "value-2"}
              onChange={handlePlanChange}
            />
            <span>Trimestral</span>
          </label>
          <label>
            <input
              type="radio"
              id="value-3"
              name="value-radio"
              value="value-3"
              checked={selectedPlan === "value-3"}
              onChange={handlePlanChange}
            />
            <span>Mensal</span>
          </label>
          <span className="selection"></span>
        </div>
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
      <div className="card-contador">
        <h3>Você é contador ou presta serviço de BPO Financeiro?</h3>
        <p>
          No Programa de Parceria da BMS, tenha acesso a benefícios e
          condições exclusivas ao indicar ou adquirir o ERP BMS Gestão para
          seus clientes.
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
