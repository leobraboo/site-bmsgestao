import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "./style.css";

export function Stars() {
  const [position, setPosition] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [windowSize, setWindowSize] = useState(0);
  const widthCardStar = useRef();

  const cardStars = [
    {
      src: "/star.png",
      alt: "star rating",
      comment:
        "“Fiz a troca do meu sistema há 1 mês e foi uma excelente decisão! Além do sistema possuir todas as funcionalidades que preciso, com um valor mais acessível, o atendimento do suporte técnico me deu todo o auxílio que precisava. Estou muito satisfeito!”",
      name: "Douglas G.",
      company: "Empório Saúde",
    },
    {
      src: "/star.png",
      alt: "star rating",
      comment:
        "“Precisava de um sistema WEB, onde pudesse acessar as minhas duas lojas na cidade. O BMS Gestão me permitiu ter acesso de forma simples e rápido a todas as operações das duas lojas. Assim, consegui ganhar tempo e acompanhar mais de perto os meus dois negócios.”",
      name: "Adilberto B.",
      company: "Pet Shop + Vida",
    },
    {
      src: "/star.png",
      alt: "star rating",
      comment:
        "“Achei o sistema muito simples e prático. As minhas vendedoras se adaptaram facilmente a esta nova ferramenta. Ah, tive uma ótima experiência com o suporte técnico. Atendimento rápido e eficiente.”",
      name: "Natália R.",
      company: "Bella Boutique",
    },
  ];

  const autoPlay = useCallback(() => {
    const interval = setInterval(() => {
      if (!isInteracting) {
        next();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isInteracting]);

  const next = () => {
    setPosition((prevPosition) => {
      let newPosition = prevPosition - widthCardStar.current.offsetWidth - 400;
      if (newPosition < -1200) {
        newPosition = (newPosition / (cardStars.length - 1)) * -1;
      }

      return newPosition;
    });
  };

  const prev = () => {
    setPosition((prevPosition) => {
      let newPosition = prevPosition + widthCardStar.current.offsetWidth + 400;
      if (newPosition > 1200) {
        newPosition = (newPosition / (cardStars.length - 1)) * 1;
      }

      return newPosition;
    });
  };

  useEffect(() => {
    const stopAutoPlay = autoPlay();

    return () => {
      stopAutoPlay();
    };
  }, [autoPlay]);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <section id="depoimentos" className="container-Stars">
      <div className="title-Stars">
      Veja o que os nossos clientes dizem sobre o BMS GESTÃO:
      </div>
      <div className="content-btns-card-Stars">
        <div className="btns-Stars">
          <span onClick={prev}>
            <SlArrowLeft
              size={55}
              className="arrow-left-Stars"
              onMouseEnter={() => setIsInteracting(true)}
              onMouseLeave={() => {
                setIsInteracting(false);
              }}
            />
          </span>

          <span onClick={next}>
            <SlArrowRight
              size={55}
              className="arrow-right-Stars"
              onMouseEnter={() => setIsInteracting(true)}
              onMouseLeave={() => {
                setIsInteracting(false);
              }}
            />
          </span>
        </div>

        <div className="content-card-Stars">
          <span
            className="content-Stars"
            style={
              windowSize <= 992
                ? { transform: `translateX(${position}px)` }
                : {}
            }
          >
            {cardStars.map((card, i) => (
              <div key={i} className="contentcard-Stars" ref={widthCardStar}>
                <div className="titletestimony-Stars">
                  <span className="name-testimony-Stars">
                    <span className="item-testimony-Stars">{card.name}</span>
                    <span className="item-testimony-Stars">{card.company}</span>
                  </span>
                  <Image
                    className="stars-header"
                    src={card.src}
                    width={170}
                    height={30}
                    alt={card.alt}
                  />
                </div>
                <span className="card-Stars">
                  <span className="testimony-Stars">{card.comment}</span>
                </span>
              </div>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
