import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contacto.css'

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mifeseg', 'template_2pqswma', e.target, 'ezXhsZos_l1IZzd5w')
      .then((result) => {
        console.log(result.text);
        toast.success('Mensaje enviado con éxito, te responderé pronto..');
        setFormData({ name: '', email: '', message: '' }); 
        console.log(error.text);
        toast.error('Hubo un error al enviar el mensaje');
      });
    e.target.reset();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
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
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Button variant="custom" type="submit" className='mt-3'>
          Enviar
        </Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default Contacto;