import React from 'react'
import {Field,ErrorMessage,Form,Formik} from 'formik'
import FormikControll from './FormikControll'
import * as Yup from 'yup'

function RegistrationForm() {
    
    const options=[
        {key:'Email',value:'emailmoc'},
        {key:'Telephone',value:'telephonemoc'},
       
    ]
  const   initialValues={
        email:'',
        password:'',
        confirmPassword:'',
        modeOfContact:'',
        phone:''
    }
  const   validationSchema=Yup.object({
        email:Yup.string().email('Invalid Email format').required('Required!'),
        password:Yup.string().required('Required!'),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'),''],'Password must match').required("Required!"),
        modeOfContact:Yup.string().required('Required!'),
        phone:Yup.string().when('modeOfContact',{
            is:'telephonemoc',
            then:Yup.string().required('Required!'),
        })
 })

 const  onSubmit=values=>{
     console.log("form values reg..",values);
 }
    return (
       <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit} >
       {formik=>{
           return(
               <Form>
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
                     <FormikControll
                    control='input'
                    type='password'
                    lable='Confirm Password'
                    name='confirmPassword'
                    />
                     <FormikControll
                    control='radio'
                    lable='Mode Of Contact'
                    name='modeOfContact'
                    options={options}
                    />
                    <FormikControll
                    control='input'
                    type="number"
                    lable='Phone Number'
                    name='phone'
                    />
                    <button type="submit" className="btn btn-primary" disabled={!formik.isValid}>Login</button>
                    
               </Form>
           )
       }}
       </Formik>
    )
}

export default RegistrationForm
