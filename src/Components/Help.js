import React from "react";
import ProfilePic from "../Assets/dev.png";
import VolunteerForm from "./VolunteerForm";
import { RiCodeView } from "react-icons/ri";


const Testimonial = () => {
  return (
    <div id="help" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Seja Voluntário</p>
        <h1 className="primary-heading">Vire um voluntário!</h1>
        <p className="primary-text">
        Junte-se a nós na missão de fazer a diferença! Após o envio do formulário, nossa equipe
    entrará em contato pelos dados fornecidos para te orientar sobre os próximos passos.
        </p>
      </div>
      <div>
        <VolunteerForm/>
      </div>  
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p> Olá! Meu nome é Sandy e sou a criadora deste projeto. Sou estudante de programação, desenvolvedora, redatora e skatista (nas horas vagas). Tenho paixão por projetos de impacto positivo no mundo, e se você também compartilha essa paixão e deseja fazer a diferença, fique à vontade para entrar em contato comigo pelo meu e-mail sandypiropo@gmail.com. Vamos juntos transformar ideias em ações! </p>
        <div className="testimonials-stars-container">
        <RiCodeView />
        </div>
        <h2>Sandy Pirôpo</h2>
      </div>
    </div>
  );
};

export default Testimonial;
