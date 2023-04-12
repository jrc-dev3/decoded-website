
import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './containers/HomePage'
import '../css/app.css'
import PreLoader from './containers/PreLoader'
import Projects from './containers/Projects'
import Footer from './containers/Footer'

class App extends Component {

  componentDidUpdate(){
    window.scrollTo(0,0); //scroll to top whenever Route path changes.
  }

  render(){
    return [
      <PreLoader/>,
      <main>
        <Switch>
          <Route
            exact path="/"
            render={() => <HomePage />} />
          <Route
            exact path="/projects"
            render={() => <Projects />} />

          <Route
            exact path="/classes"
            render={() => <ClassFlyer />} />
        </Switch>
      </main>,
      <Footer/>
      
    ]
  }
}
export default App;

