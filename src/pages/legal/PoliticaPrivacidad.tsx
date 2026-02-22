import LegalPage from "../LegalPage";

export default function PoliticaPrivacidad() {
  return (
    <LegalPage
      label="Privacidad"
      title="Política de Privacidad"
      updatedDate="febrero de 2026">
      <h2>1. Responsable del tratamiento</h2>
      <p>
        En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y
        del Consejo, de 27 de abril de 2016 (RGPD), y la Ley Orgánica 3/2018, de
        5 de diciembre, de Protección de Datos Personales y garantía de los
        derechos digitales (LOPDGDD), le informamos de los siguientes extremos
        relativos al tratamiento de sus datos personales:
      </p>
      <ul>
        <li>
          <strong>Responsable:</strong> OnSight Comunicación S.L.
        </li>
        <li>
          <strong>Domicilio:</strong> Madrid, España
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:onsightcomunicacion@gmail.com">
            onsightcomunicacion@gmail.com
          </a>
        </li>
      </ul>

      <h2>2. Finalidades del tratamiento</h2>
      <p>
        Los datos personales que nos facilite a través de los formularios del
        Sitio Web serán tratados con las siguientes finalidades:
      </p>
      <ul>
        <li>
          <strong>Formulario de contacto:</strong> Gestionar las consultas y
          solicitudes de información que nos dirija, así como responder a las
          mismas. A través del formulario se recaban los siguientes datos:
          nombre, dirección de correo electrónico y mensaje.
        </li>
        <li>
          <strong>Presupuestos y propuestas:</strong> Elaborar y remitirle
          propuestas comerciales personalizadas en respuesta a su solicitud.
        </li>
        <li>
          <strong>Comunicaciones comerciales:</strong> Enviarle información
          sobre nuestros servicios, novedades y eventos, siempre que haya
          prestado su consentimiento expreso para ello.
        </li>
      </ul>

      <h2>3. Base jurídica del tratamiento</h2>
      <p>La base legal para el tratamiento de sus datos es:</p>
      <ul>
        <li>
          La ejecución de las medidas precontractuales adoptadas a petición del
          interesado y/o la ejecución del contrato de prestación de servicios.
        </li>
        <li>
          El consentimiento explícito del usuario cuando nos facilita
          voluntariamente sus datos a través del formulario de contacto.
        </li>
        <li>
          El interés legítimo de OnSight Comunicación para el mantenimiento de
          la relación comercial.
        </li>
      </ul>

      <h2>4. Destinatarios de los datos</h2>
      <p>
        Sus datos no serán cedidos a terceros, salvo en los siguientes
        supuestos:
      </p>
      <ul>
        <li>
          Proveedores de servicios tecnológicos necesarios para la prestación
          del servicio (plataformas de email, CRM, herramientas de análisis),
          que actúan como encargados del tratamiento y están sujetos a las
          garantías exigidas por el RGPD.
        </li>
        <li>Obligación legal o requerimiento de autoridad competente.</li>
      </ul>

      <h2>5. Transferencias internacionales</h2>
      <p>
        Algunos de nuestros proveedores de servicios tecnológicos pueden estar
        ubicados fuera del Espacio Económico Europeo. En tales casos, nos
        aseguramos de que dichas transferencias se realicen con las garantías
        adecuadas exigidas por el RGPD (cláusulas contractuales tipo, decisiones
        de adecuación, etc.).
      </p>

      <h2>6. Plazos de conservación</h2>
      <p>
        Sus datos personales serán conservados durante el tiempo necesario para
        cumplir con la finalidad para la que fueron recogidos y para atender
        posibles responsabilidades derivadas del tratamiento. En el caso de los
        datos de contacto, se conservarán mientras exista una relación comercial
        activa o hasta que solicite su supresión.
      </p>

      <h2>7. Derechos de los interesados</h2>
      <p>
        En cualquier momento podrá ejercitar los siguientes derechos reconocidos
        por el RGPD, dirigiendo una solicitud por escrito a{" "}
        <a href="mailto:onsightcomunicacion@gmail.com">
          onsightcomunicacion@gmail.com
        </a>
        :
      </p>
      <ul>
        <li>
          <strong>Acceso:</strong> Obtener información sobre qué datos
          personales suyos tratamos.
        </li>
        <li>
          <strong>Rectificación:</strong> Solicitar la corrección de datos
          inexactos o incompletos.
        </li>
        <li>
          <strong>Supresión:</strong> Solicitar la eliminación de sus datos
          cuando, entre otros motivos, ya no sean necesarios para los fines que
          motivaron su recogida.
        </li>
        <li>
          <strong>Oposición:</strong> Oponerse al tratamiento de sus datos en
          determinadas circunstancias.
        </li>
        <li>
          <strong>Limitación:</strong> Solicitar la restricción del tratamiento
          de sus datos.
        </li>
        <li>
          <strong>Portabilidad:</strong> Recibir sus datos en un formato
          estructurado y de uso común.
        </li>
      </ul>
      <p>
        Asimismo, tiene derecho a presentar una reclamación ante la Agencia
        Española de Protección de Datos (AEPD) si considera que el tratamiento
        de sus datos no se ajusta a la normativa vigente:{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          www.aepd.es
        </a>
        .
      </p>

      <h2>8. Seguridad</h2>
      <p>
        OnSight Comunicación ha adoptado las medidas técnicas y organizativas
        necesarias para garantizar la seguridad de los datos personales y evitar
        su alteración, pérdida, tratamiento o acceso no autorizado, habida
        cuenta del estado de la tecnología, la naturaleza de los datos
        almacenados y los riesgos a que están expuestos.
      </p>

      <h2>9. Cambios en la Política de Privacidad</h2>
      <p>
        OnSight Comunicación se reserva el derecho a modificar la presente
        política de privacidad para adaptarla a novedades legislativas o
        jurisprudenciales. En tales supuestos, se anunciará en el Sitio Web los
        cambios introducidos con razonable antelación a su puesta en práctica.
      </p>
    </LegalPage>
  );
}
