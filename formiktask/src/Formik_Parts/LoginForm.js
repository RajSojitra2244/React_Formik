import React from 'react'
import {Field,ErrorMessage,Form,Formik} from 'formik'
import TextError from './TextError'
import FormikControll from './FormikControll'
import {Link}from 'react-router-dom'
import * as Yup from 'yup'
import '../css/Login.css'
import { useHistory } from "react-router-dom";
import {Card,Button} from 'react-bootstrap'
import Header from '../public_header/header'
import { SendingLoginRequest } from '../Redux/Action'
import {useDispatch} from 'react-redux' 
function LoginForm(props) {
  const history =useHistory()
  let  dispatch = useDispatch()
    
const initialValues={
  email:"",
    password:"",
   
  },
  onSubmit =(values,onSubmitProps) => {
    console.log('Form data', values);
    // onSubmitProps.resetForm();
    // history.push('/dash')
    dispatch(SendingLoginRequest(values,props))
  }
  
  const validationSchema=Yup.object({
    email:Yup.string().email('Invalid email Format').required('Required!'),
    password:Yup.string().required('Required!'),
  })

    return (
        <div>
            <Header/>
        <div className="login">
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {formik=>{
                return( <Form>

<Card  className="card">
  <Card.Body>
    <Card.Title className="cardtitle"><h1>Login</h1></Card.Title>
    <Card.Body>
                <FormikControll
                    control='input'
                    type='email'
                    lable='Email'
                    name='email'
                    />

                <FormikControll
                    control='input'
                    type='password'
                    lable='Password'
                    name='password'
                    />
                    <div className="row">
                             <div className="col-6">
                    <button type="submit" className="btn btn-success" disabled={!formik.isValid}>Login</button>
                            </div>
                       <div className="col-6">     
                    <Link className="registerHere" to='/registration'><u>Register here</u></Link>
                        </div>
                    </div>
    </Card.Body>
  </Card.Body>
</Card>
 
                </Form>

                )
            }

            }
        </Formik>
        </div>
        </div>
    )
}

export default LoginForm
