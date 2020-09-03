import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Authenticate from './pages/Authenticate'
import Home from './pages/Home'

import GlobalStyle from './styles/global'

const App = () => {
    return(
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={ Authenticate } />
                <Route exact path="/login" component={ Authenticate } />
                <Route exact path="/register" component={ Authenticate } />
                <Route exact path="/home" component={ Home } />
            </Switch>
        </Router>
    )
}

export default App
