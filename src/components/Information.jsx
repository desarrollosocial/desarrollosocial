import React from "react"

// Styles
import "../assets/css/informacion.css"

const Informacion = () => (
    <section className="section__information">
        <div className="container">
            <div className="section__information_container">
                <div className="information__title">
                    <h2 className="title_left">¿Quiénes <br />Somos?</h2>
                </div>
                
                <div className="information__text">
                    <p>
                        Organización para el fomento del Desarrollo Social, potencialización de habilidades, 
                        conocimientos y capacidades de los individuos y otras organizaciones.
                    </p><br/>
                    <p>
                        Difusión de acciones lideradas por la organización sin animo de lucro que trabaja en 
                        pro de la población mas vulnerable, niños, niñas, jóvenes, adolescentes y mujeres; 
                        con enfoque y respeto por las diferencias étnicas y culturales y con principios de 
                        solidaridad, respeto y cooperación.
                    </p><br />
                    <p>
                        Formulación y ejecución de planes programas y proyectos en los sectores de salud, 
                        educación, cultura, deporte, medio ambiente; para la promoción y protección de la 
                        identidad, los derechos humanos y la cultura ciudadana
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default Informacion