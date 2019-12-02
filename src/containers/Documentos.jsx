import React from 'react'

// Components
import Documento from '../components/Document'

// Styles
import "../assets/css/documentos.css"

// Documentos
import InformePDF from '../assets/documents/Informe.pdf'
import InformePDF2 from '../assets/documents/Informe.pdf'

const documentos = [
    { 
        id: 1,
        documento: InformePDF,
        name: "Solicitud ante la DIAN como contribuyente del régimen especial \"ESAL\""
    }
]

const Documentos = () => (
    <section className="section__documentos">
        <div className="container">
            <h3 className="title">Documentos</h3>
            {documentos.map((data) => {
                return <Documento documento_url={data.documento} name={data.name} key={data.id}/>
            })}
        </div>
    </section>
)

export default Documentos