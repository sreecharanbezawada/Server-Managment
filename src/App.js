/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import UserProfile from './components/UserProfile'
import UserEmails from './components/UserEmails'
import InvoicePage from './components/InvoicePage'
import Settings from './components/Settings'
import Newsletter from './components/Newsletter'
import DashboardPage from './components/DashboardPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/userprofile" component={UserProfile} />
        <Route path="/useremails" component={UserEmails} />
        <Route path="/invoicepage" component={InvoicePage} />
        <Route path="/settings" component={Settings} />
        <Route path="/newsletter" component={Newsletter} />
      </Switch>
    </Router>
  )
}

export default App
