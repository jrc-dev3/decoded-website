import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'

const Index = () => (
    <Router>
      <App />
    </Router>
)

export default App

ReactDOM.render(<Index />, document.getElementById('root'))
