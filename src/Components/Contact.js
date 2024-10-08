import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o e-mail
    console.log("Enviar seu endereço de Email:", email);
    
    // Exibir a mensagem de sucesso
    setSuccessMessage("Enviado. Em breve entraremos em contato.");

    // Limpar o campo após o envio
    setEmail("");

    // Limpar a mensagem de sucesso após 10 segundos
    setTimeout(() => {
      setSuccessMessage("");
    }, 10000); // 10 segundosF
  };

  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Alguma dúvida?</h1>
      <h1 className="primary-heading">Deixe-nos ajudar</h1>
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="seuemail@gmail.com"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit" className="secondary-button">Enviar</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Contact;
