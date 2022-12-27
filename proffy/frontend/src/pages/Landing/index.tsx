import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import giveIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import landingImg from "../../assets/images/landing.svg";
import logoImg from "../../assets/images/logo.svg";
import api from "../../services/api";
import "./styles.css";

const Landing: React.FC = () => {
  const [connections, setConnections] = useState(0);

  useEffect(() => {
    async function loadConnection() {
      const { data } = await api.get("connections");
      setConnections(data.total);
    }
    loadConnection();
  }, [connections]);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div id="logo-container" className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/teacher" className="give-classes">
            <img src={giveIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {connections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
