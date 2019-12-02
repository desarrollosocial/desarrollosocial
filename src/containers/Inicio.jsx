import React from 'react'

// Components
import Carousel from '../components/Carousel'
import Informacion from '../components/Information'
import Galery from '../components/Galery'

const Inicio = () => (
    <>
        <Carousel />
        <Informacion />
        <Galery dataItems="8"/>
    </>
)

export default Inicio