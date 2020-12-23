import React, { useState } from 'react'
import {Field,ErrorMessage,Form,Formik} from 'formik'
import FormikControll from './FormikControll'
import * as Yup from 'yup'
import {Card,Button} from 'react-bootstrap'
import '../css/Registration.css'
function RegistrationForm() {
 const [FormNumber, setFormNumber] = useState(1)
    const options=[
        {key:'Email',value:'emailmoc'},
        {key:'Telephone',value:'telephonemoc'},
       
    ]
  const   initialValues={
        Name:"",
        email:'',
        password:'',
        confimPassword:'',
        modeOfContact:'',
        PhoneNo:'',
        Pincode:'',
    }
  const   validationSchema=Yup.object({
        Name:Yup.string().required('Required!'),
        email:Yup.string().email('Invalid Email format').required('Required!'),
        password:Yup.string().required('Required!'),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'),''],'Password must match').required("Required!"),
        modeOfContact:Yup.string().required('Required!'),
        phone:Yup.string().required('Required!'),
        
 })

 const  onSubmit=values=>{
     console.log("form values reg..",values);
 }
 const nextbutton=()=>{
     setFormNumber(FormNumber +1)
 }
    return (
        <div>
       <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit} >
       {formik=>{
           return(
               <Form>

<div className="registrationMargin">
<div class="steps-form-2">
    <div class="steps-row-2 setup-panel-2 d-flex justify-content-between">
        <div class="steps-step-2">
            <a href="#step-1" 
            type="button" 
            class="btn btn-amber btn-circle-2 waves-effect ml-0" 
            data-toggle="tooltip" 
            data-placement="top" 
            title="Basic Information"><i class="fa fa-folder-open-o" aria-hidden="true">1</i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-2" 
            type="button" 
            class="btn btn-blue-grey btn-circle-2 waves-effect"
             data-toggle="tooltip" 
            data-placement="top" 
            title="Personal Data"><i class="fa fa-pencil" aria-hidden="true">2</i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-3" 
            type="button" 
            class="btn btn-blue-grey btn-circle-2 waves-effect" 
            data-toggle="tooltip" 
            data-placement="top" 
            title="Terms and Conditions"><i class="fa fa-photo" aria-hidden="true">3</i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-4" 
            type="button" 
            class="btn btn-blue-grey btn-circle-2 waves-effect mr-0" 
            data-toggle="tooltip" 
            data-placement="top" 
            title="Finish"><i class="fa fa-check" aria-hidden="true"></i></a>
        </div>
    </div>
</div>




<Card className="card">
  <Card.Body>
        <Card.Title className="cardtitle"> Create Youre Account</Card.Title>
             <p><b>This is Step {FormNumber}</b></p>
    <Card.Body>
                {FormNumber ==1 &&  
                <>
                 <FormikControll
                    control='input'
                    type='email'
                    lable='Name'
                    name='Name'
                    />
                <FormikControll
                    control='input'
                    type='email'
                    lable='Email'
                    name='email'
                    />
                    
                 <FormikControll
                    control='input'
                    type='password'
                    lable='Phone no:'
                    name='phone'
                    />
                
                    </>
                     }
                      {FormNumber ==2 &&  
                <>
               
                 <FormikControll
                    control='input'
                    type='password'
                    lable='Confirm Password'
                    name='confirmPassword'
                    />
                    </>
                     }
            {FormNumber ==3 &&  
                <>
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
                    name='confimPassword'
                    />
                 <FormikControll
                    control='input'
                    type='password'
                    lable='Phone no:'
                    name='phone'
                    />
                
                    </>
                     }
               

    </Card.Body>
    <Button variant="primary" className="nextbutton" onClick={()=>{nextbutton()}}>Next</Button>
  </Card.Body>
</Card>

{/* 
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
                    <button type="submit" className="btn btn-primary" disabled={!formik.isValid}>Login</button> */}
                    
                    </div>
               </Form>
           )
       }}
       </Formik>
       </div>
    )
}

export default RegistrationForm