import { useState } from "react";
import emailjs from "emailjs-com";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_mifeseg", "template_2pqswma", event.currentTarget, "ezXhsZos_l1IZzd5w")
      .then(() => {
        toast.success("Mensaje enviado. ¡Gracias por escribirme!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("No se pudo enviar el mensaje. Probá de nuevo en unos minutos.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="contact-form-wrap">
      <Form className="contact-form" onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            autoComplete="email"
            placeholder="nombre@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            placeholder="Contame brevemente qué necesitás"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button className="contact-submit" type="submit" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </Form>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Contacto;
