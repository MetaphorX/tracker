import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App'
import './index.css'
import {TransactionProvider} from './context/TransactionContext'

ReactDOM.render(
    <TransactionProvider>

    <Router>
        <App />
    </Router>
    </TransactionProvider>,
     
document.getElementById('root')
)