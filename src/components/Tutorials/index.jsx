import "./style.css";
import { Button } from "../UI";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import Image from "next/image";
import { useState } from 'react';

export function Tutorials() {
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/CkR45_IA8ZI");

  const changeVideo = (videoId) => {
    setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
  };

  return (
    <section id="tutoriais" className="container-Tutorials">
      <div className="title-Tutorials">
        <PiYoutubeLogoDuotone size={50} style={{ color: "red" }} />
        <span>
          Confira alguns tutoriais e conheça melhor sobre o BMS Gestão
        </span>
      </div>
      <div className="content-Tutorials">
        <div className="video-Tutorials">
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            frameBorder="false"
            allowFullScreen
          ></iframe>
        </div>
        <div className="list-video-Tutorials">
          <div className="item-video-Tutorials" onClick={() => changeVideo('CkR45_IA8ZI')}>
            <p className="number-tutorials">1.</p>
            <Image
              className="img-video-Tutorials"
              src="/tutorialYt.png"
              width={150}
              height={90}
              alt="next video youtube"
            />
            <div className="description-video-Tutorials">
              <span> BMS GESTÃO - Apresentação Geral </span>
              <p>Bms Softwares</p>
            </div>
          </div>
          <div className="item-video-Tutorials" onClick={() => changeVideo('63LIDvPf51w')}>
            <p className="number-tutorials">2.</p>
            <Image
              className="img-video-Tutorials"
              src="/tutorialYt.png"
              width={150}
              height={90}
              alt="next video youtube"
            />
            <div className="description-video-Tutorials">
              <span> BMS GESTÃO - Vendas por FRENTE DE CAIXA </span>
              <p>Bms Softwares</p>
            </div>
          </div>
          <div className="item-video-Tutorials" onClick={() => changeVideo('iL7Re2hSgCA')}>
            <p className="number-tutorials">3.</p>
            <Image
              className="img-video-Tutorials"
              src="/tutorialYt.png"
              width={150}
              height={90}
              alt="next video youtube"
            />
            <div className="description-video-Tutorials">
              <span> BMS GESTÃO - Como fazer ORÇAMENTOS </span>
              <p>Bms Softwares</p>
            </div>
          </div>
          <div className="item-video-Tutorials" onClick={() => changeVideo('5Q-HSBrj18g')}>
            <p className="number-tutorials">4.</p>
            <Image
              className="img-video-Tutorials"
              src="/tutorialYt.png"
              width={150}
              height={90}
              alt="next video youtube"
            />
            <div className="description-video-Tutorials">
              <span> BMS GESTÃO - Vendas com emissão da NF-e </span>
              <p>Bms Softwares</p>
            </div>
          </div>
        </div>
      </div>
      <div className="free-btn-Tutorials">
        <Button text="Teste GRATUITO aqui." />
      </div>
    </section>
  );
}
