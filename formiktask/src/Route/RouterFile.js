import React from 'react'
import{Switch,Route, BrowserRouter as Router}from 'react-router-dom'
import LoginForm from '../Formik_Parts/LoginForm'
import RegistrationForm from '../Formik_Parts/RegistrationForm'
import Header from '../public_header/header'
import Home from '../public_header/header'
import { ToastContainer, toast } from 'react-toastify';

function RouterFile() {
    return (
        <div className="App">
            <Router>
        <Switch>
            {/* <Header/> */}
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path="/registration" component={RegistrationForm}/>

            
            {/* <Route path="*" component={Errorpage}/> */}
        </Switch>
        </Router>
    </div>
    )
}

export default RouterFile
