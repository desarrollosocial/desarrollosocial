import React from 'react'
import { HashRouter, Switch, Route } from "react-router-dom"

// Containers
import Layout from '../components/Layout'
import Inicio from '../containers/Inicio'
import Galeria from '../containers/Galeria'
import Documentos from '../containers/Documentos'

const App = () => (
    <HashRouter basename="/">
        <Layout>
            <Switch>
                <Route exact path="/" component={Inicio}/>
                <Route exact path="/galeria" component={Galeria}/>
                <Route exact path="/documentos" component={Documentos}/>
                <Route component={Inicio}/>
            </Switch>
        </Layout>
    </HashRouter>
)

export default App;