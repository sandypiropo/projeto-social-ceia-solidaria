import React from "react";
import voluntario from "../Assets/1.png"
import alimentos from "../Assets/2.png"
import fundos from "../Assets/3.png"

const Work = () => {
  const workInfoData = [
    {
      image: voluntario,
      title: "Seja Voluntário",
      text: "Junte-se a nós para a distribuição dos alimentos! Precisamos de voluntários dispostos a ajudar na organização, embalagem e entrega dos alimentos. Sua presença fará toda a diferença.",
    },
    {
      image: alimentos,
      title: "Doe Alimentos",
      text: "Faça doações de alimentos não perecíveis, como arroz, feijão, macarrão, latas de molho, entre outros. Sua contribuição ajudará a montar ceias deliciosas e nutritivas para aqueles que mais precisam. ",
    },
    {
      image: fundos,
      title: "Doe Fundos",
      text: "Faça uma doação financeira para o projeto. Os recursos arrecadados serão usados para a compra de alimentos e materiais necessários para a ceia. Cada contribuição, independentemente do valor, conta!",
    },
  ];
  return (
    <div id="howtohelp" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Ajude-nos
        </p>
        <h1 className="primary-heading">Como ajudar o projeto</h1>
        <p className="primary-text">
        Existem várias maneiras de contribuir para o Projeto Ceia Solidária SSA e fazer a diferença na vida de pessoas em situação de vulnerabilidade neste Natal. </p>
        <p className="primary-text">
          Aqui estão três formas de ajudar:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
