import React from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Post from './pages/Post'

const App = () => {
  return (
    <Router forceRefresh>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route exact path='/about' component={About}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/post/:id' component={Post}/>
        <Route exact path='/' component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App

