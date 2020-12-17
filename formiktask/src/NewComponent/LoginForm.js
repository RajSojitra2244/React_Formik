import React from 'react'
import {Field,ErrorMessage,Form,Formik} from 'formik'
import TextError from './TextError'
import FormikControll from './FormikControll'
import * as Yup from 'yup'
const initialValues={
    email:"",
    password:"",
   
  },
   onSubmit =(values,onSubmitProps) => {
    console.log('Form data', values);
    onSubmitProps.resetForm();
  },
  
   validationSchema=Yup.object({
    email:Yup.string().email('Invalid email Format').required('Required!'),
    password:Yup.string().required('Required!'),
  })


function LoginForm() {
    
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {formik=>{
                return( <Form>

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
                    <button type="submit" disabled={(formik.dirty &&  !formik.isValid)}>Login</button>
                </Form>

                )
            }

            }
        </Formik>
    )
}

export default LoginForm
