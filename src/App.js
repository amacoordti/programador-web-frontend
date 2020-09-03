import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Authenticate from './pages/Authenticate'

import GlobalStyle from './styles/global'

const App = () => {
    return(
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={ Authenticate } />
                <Route exact path="/register" component={ Authenticate } />
            </Switch>
        </Router>
    )
}

export default App
