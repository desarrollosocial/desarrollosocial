import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Containers
import Layout from '../components/Layout'
import Inicio from '../containers/Inicio'
import Galeria from '../containers/Galeria'
import Documentos from '../containers/Documentos'

const App = () => (
    <BrowserRouter basename="/">
        <Layout>
            <Switch>
                <Route exact path="/" component={Inicio}/>
                <Route exact path="/galeria" component={Galeria}/>
                <Route exact path="/documentos" component={Documentos}/>
                <Route component={Inicio}/>
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;