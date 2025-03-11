import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import "./Contacto.css";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../config/firebase";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Colección de mensajes en Firestore
    const mensajesRef = collection(firestore, "mensajes");

    // Agregar documento nuevo con los datos
    addDoc(mensajesRef, formData)
      .then(() => {
        alert("¡Mensaje enviado correctamente!");
        setFormData({ nombre: "", apellido: "", email: "", telefono: "", mensaje: "" });
      })
      .catch((error) => {
        alert("Error al enviar: " + error.message);
      });
  };

  return (
    <Layout>
      <div className="contacto-container">
        <div className="contacto-inner">
          <span className="contacto-badge">
            <span className="punto-verde">•</span> Contactame
          </span>

          <h1>Trabajemos juntos</h1>

          <p className="contacto-subtitle">
            Estoy listo para ayudarte con tu próximo gran proyecto. <br />
            ¡Hablemos y hagamos que suceda!
          </p>

          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="contacto-row">
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Apellido"
                name="apellido"
                required
                value={formData.apellido}
                onChange={handleInputChange}
              />
            </div>

            <div className="contacto-row">
              <input
                type="email"
                placeholder="Correo electrónico"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                placeholder="Teléfono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </div>

            <textarea
              placeholder="Mensaje"
              name="mensaje"
              rows="6"
              required
              value={formData.mensaje}
              onChange={handleInputChange}
            ></textarea>

            <button type="submit">Enviar Mensaje</button>
          </form>

          <p className="contacto-footer">Gracias por tu visita.</p>
        </div>
      </div>
    </Layout>
  );
};

export { Contacto };
