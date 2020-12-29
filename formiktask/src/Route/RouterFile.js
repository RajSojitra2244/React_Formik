import React from 'react'
import{Switch,Route, BrowserRouter as Router}from 'react-router-dom'
import LoginForm from '../Formik_Parts/LoginForm'
import RegistrationForm from '../Formik_Parts/RegistrationForm'
import Header from '../public_part/header'
import Home from '../public_part/Home'
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from '../Private_Part/Dashboard'
import ProtectedRoute from '../PrivateRouter/ProtectedRoute'
import CountctUs from '../public_part/ContactUs'
import ForgotPassword from '../public_part/ForgotPassword'
import SetPassword from '../public_part/SetPassword'

function RouterFile() {
    return (
        <div className="App">
            <Router>
        <Switch>
            {/* <Header/> */}
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/contactus" component={CountctUs}/>
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path="/forgotpassword" component={ForgotPassword}/>
            <Route  path="/forget-password/link/" component={SetPassword}/>

            <Route exact path="/registration" component={RegistrationForm}/>

            <ProtectedRoute exact path="/dash" component={Dashboard}/>
            <ProtectedRoute exact path="/" component={Dashboard}/>

            
            {/* <Route path="*" component={Errorpage}/> */}
        </Switch>
        </Router>
    </div>
    )
}

export default RouterFile
