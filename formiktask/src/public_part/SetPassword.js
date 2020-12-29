import React,{useEffect,useState} from 'react'
import { Card, Button, } from 'react-bootstrap'
import FormikControll from '../Formik_Parts/FormikControll'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import Header from './header'
import { useDispatch } from 'react-redux'
import '../css/SetPassword.css'
import{SetPasswordRequest}from '../Redux/SetPassword/SetPasswordAction'
function SetPassword() {
    let dispatch = useDispatch()
const [UrlToken, setUrlToken] = useState()
    useEffect(()=>{
        const UrlPath = window.location.pathname.split('/')
        setUrlToken(UrlPath[3])
    },[])
    const initialValues = {
        password: "",
        Token:""
    },
      onSubmit = (values, onSubmitProps) => {
          console.log("values",values);
          console.log("valuesToken",UrlToken);
          const dummyValue = values
            dummyValue.Token = UrlToken
            dispatch(SetPasswordRequest(dummyValue,onSubmitProps))
      }
      const validationSchema = Yup.object({
        password: Yup.string().required('Required!'),
       })
    return (
        <div>
             <div >
            <Header />
      <div className="contactus centerShow">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => {
            return (<Form>
              <Card className="card">
                <div className="row">
                <Card.Body>
                  <Card.Title className="cardtitle"><h1>Change Password</h1></Card.Title>
                  <Card.Body>
                    
                    <FormikControll
                      control='input'
                      type='password'
                      lable='Set Password'
                      name='password'
                    />
                     
                    <div className="row">
                   <div className="col-12 d-flex justify-content-center">
                        <button type="submit"
                        className="btn btn-primary setpsd " 
                        disabled={!formik.isValid}>Change Password</button>
                      </div>
                      
                    </div>
                  </Card.Body>
                </Card.Body>
              </div>
              </Card>
            </Form>

            )
          }

          }
        </Formik>
      </div>
      </div>
        </div>
    )
}

export default SetPassword
