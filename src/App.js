import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Login from './pages/Login'

import GlobalStyle from './styles/global'

const App = () => {
    return(
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={ Login } />
            </Switch>
        </Router>
    )
}

export default App
