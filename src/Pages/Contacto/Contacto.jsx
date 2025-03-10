import { Layout } from "../../components/Layout/Layout"
import "./Contacto.css"
  const Contacto = ()=>{
return (
      <Layout>
    <div className="contacto-container">
      <div className="contacto-inner">
        {/* Pequeño “badge” o etiqueta sobre el título */}
        <span className="contacto-badge">
          <span className="punto-verde">•</span> Contactame
        </span>

        {/* Título principal */}
        <h1>Trabajemos juntos</h1>

        {/* Subtítulo o texto de bienvenida */}
        <p className="contacto-subtitle">
          Estoy listo para ayudarte con tu próximo gran proyecto. <br />
          ¡Hablemos y hagamos que suceda!
        </p>

        {/* Formulario */}
        <form className="contacto-form">
          <div className="contacto-row">
            <input type="text" placeholder="Nombre" name="nombre" required />
            <input
              type="text"
              placeholder="Apellido"
              name="apellido"
              required
            />
          </div>
          <div className="contacto-row">
            <input
              type="email"
              placeholder="Correo electrónico"
              name="email"
              required
            />
            <input type="tel" placeholder="Teléfono" name="telefono" />
          </div>
          <textarea
            placeholder="Mensaje"
            name="mensaje"
            rows="6"
            required
          ></textarea>

          {/* Botón de envío */}
          <button type="submit">Enviar Mensaje</button>
        </form>

        {/* Mensaje de cierre o agradecimiento */}
        <p className="contacto-footer">
          Gracias por tu visita.
        </p>
      </div>
    </div>
    </Layout>
  );
}

  export{Contacto}