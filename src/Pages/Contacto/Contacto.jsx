import { useState } from "react";
import { useSelector } from 'react-redux';
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { textos } from "../../utils/textos";
import "./Contacto.css";

const Contacto = () => {
  const idioma = useSelector(state => state.ui.idioma);
  const texto = textos[idioma].contacto;

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
    const mensajesRef = collection(firestore, "mensajes");

    addDoc(mensajesRef, formData)
      .then(() => {
        alert(texto.mensajeExito);
        setFormData({ nombre: "", apellido: "", email: "", telefono: "", mensaje: "" });
      })
      .catch((error) => {
        alert(`${texto.mensajeError} ${error.message}`);
      });
  };

  return (
    <div className="contacto-container">
      <div className="contacto-inner">
        <span className="contacto-badge">
          <span className="punto-verde">•</span> {idioma === 'es' ? 'Contáctame' : 'Contact me'}
        </span>

        <h1>{texto.titulo}</h1>

        <p className="contacto-subtitle">
          {texto.subtitulo}
        </p>

        <form className="contacto-form" onSubmit={handleSubmit}>
          <div className="contacto-row">
            <input
              type="text"
              placeholder={texto.nombre}
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder={texto.apellido}
              name="apellido"
              required
              value={formData.apellido}
              onChange={handleInputChange}
            />
          </div>

          <div className="contacto-row">
            <input
              type="email"
              placeholder={texto.email}
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              placeholder={texto.telefono}
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            placeholder={texto.mensaje}
            name="mensaje"
            rows="6"
            required
            value={formData.mensaje}
            onChange={handleInputChange}
          ></textarea>

          <button type="submit">{texto.enviar}</button>
        </form>

        <p className="contacto-footer">{texto.gracias}</p>
      </div>
    </div>
  );
};

export { Contacto };
