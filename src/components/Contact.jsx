import React from "react";

// Styles
import "../assets/css/contact.css";

const Contact = () => (
  <section className="section__contacto" id="contacto">
    <div className="container">
      <h3 className="title">Contacto</h3>
      <div className="section__contacto_container">
        <div className="contacto__informacion">
          <ul>
            <li>
              <i className="fas fa-map-marked-alt"></i>
              <div>
                <h4 className="contacto__item_title"> Dirección</h4>
                <p>Calle 51N No. 5-30 Casa E8 Conjunto Residencial Mora Verde</p>
                <p>Popayán, Cauca</p>
              </div>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <div>
                <h4 className="contacto__item_title"> Télefonos</h4>
                <p>318 878 0695</p>
              </div>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <div>
                <h4 className="contacto__item_title"> E-mail</h4>
                <p>fundaciondesarrollosocial2007@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="contacto__mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1645.3063997809502!2d-76.57657924213372!3d2.4721249995496506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e300475aff40055%3A0x373d534ec866b19f!2sConjunto%20Residencial%20Mora%20Verde!5e1!3m2!1sen!2sco!4v1575296814413!5m2!1sen!2sco"
            width="100%"
            height="100%"
            title="Mapa de Popayán, Calle 51 N #, Cl. 5 # 130, Popayán, Cauca"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
