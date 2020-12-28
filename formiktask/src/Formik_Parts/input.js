import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'
import {useDispatch,useSelector} from 'react-redux'

function Input(props) {
const EmailStatus = useSelector(state => state.signup.errordata)

    const{lable,name,...rest}=props
    return (
        
        <div className="form-group">
                    <label htmlFor={name}>{lable}</label>
                    <Field id={name} name={name} {...rest}/>
                    <ErrorMessage name={name} component={TextError}/>
                    {/* {EmailStatus.message == "Email is exists!" &&  <p>Email is already Exsist</p>} */}
                </div>            
        
        )
    }
    // console.log("ErrorMessage",ErrorMessage)

export default Input
