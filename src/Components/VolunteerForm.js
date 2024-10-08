import React, { useState } from "react";
import emailjs from "emailjs-com";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_yqax5hk", "template_gzouh9b", formData, "zgMjn0TwQAXcc12WI")
      .then((response) => {
        console.log("Mensagem enviada com sucesso!", response.status, response.text);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 10000);
      })
      .catch((error) => {
        console.log("Erro ao enviar a mensagem:", error);
      });
  };

  return (
    <div id="volunteerform" className="volunteer-form-container">
      <h1>Formulário de Voluntário</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Seu telefone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Mensagem (opcional)"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {successMessage && <p>Mensagem enviada com sucesso!</p>}
    </div>
  );
};

export default VolunteerForm;