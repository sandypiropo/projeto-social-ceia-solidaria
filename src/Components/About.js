import React from "react";
import AboutBackground from "../Assets/about-background.png";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre o Projeto</p>
        <h1 className="primary-heading">
        Juntos, faremos a diferença!
        </h1>
        <p className="primary-text">
        O Projeto Ceia Solidária SSA foi idealizado com a intenção de fazer a diferença neste Natal de 2024, proporcionando um momento especial para aqueles que enfrentam dificuldades em Salvador, Bahia. A ideia surgiu da necessidade de levar alimento e esperança a moradores de rua e pessoas em situação de vulnerabilidade, garantindo que, mesmo em tempos difíceis, estas pessoas possam ter um alimento em sua mesa.        </p>
        <p className="primary-text">
        Nosso foco é mobilizar a comunidade para arrecadar fundos e reunir voluntários dispostos a contribuir com esta causa nobre. 
        </p>
{/* 
<div className="about-buttons-container">
  <button className="watch-video-button">
    <BsFillPlayCircleFill /> Watch Video
  </button>
</div> 
*/}

      </div>
    </div>
  );
};

export default About;
