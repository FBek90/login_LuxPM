import React from 'react'
import SignUP from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import ForgotPW from './components/ForgotPW/ForgotPW'
import Activity from './components/Activity/Activity'
import {Container} from 'react-bootstrap'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css'
import AuthProvider from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container
          className=" d-flex align-items-center justify-content-center"
          style={{minHeight: '100vh'}}
        >
          <div className="auth_wrapper">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/forgotPW" component={ForgotPW} />
              <Route path="/signup" component={SignUP} />
              <Route path="/dashboard" component={Activity} />
            </Switch>{' '}
          </div>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
