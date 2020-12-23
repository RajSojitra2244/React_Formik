import React, { useState } from 'react'
import {Field,ErrorMessage,Form,Formik} from 'formik'
import FormikControl from './FormikControll'
import * as Yup from 'yup'
import {Card,Button} from 'react-bootstrap'
import '../css/Registration.css'
function RegistrationForm() {
 const [FormNumber, setFormNumber] = useState(1)
 const deopdownoption = [
    { key: 'Select Course', value: '' },
    { key: 'React', value: 'React' },
    { key: 'Redux ', value: 'Redux' },
    { key: 'Formik ', value: 'Formik' },
  ];
  const checkBoxOptions = [
    { key: 'Html', value: 'Html' },
    { key: 'Css', value: 'Css' },
    { key: 'JavaScript', value: 'JavaScript' },
  ];
    // const options=[
    //     {key:'Email',value:'emailmoc'},
    //     {key:'Telephone',value:'telephonemoc'},
    // ]
  const   initialValues={
        Name:"",
        email:'',
        password:'',
        confimPassword:'',
        modeOfContact:'',
        PhoneNo:'',
        Pincode:'',
        skills:[],
        pincode:'',
        course:'',
        courseDate:null
    }
  const   validationSchema=Yup.object({
        Name:Yup.string().required('Required!'),
        email:Yup.string().email('Invalid Email format').required('Required!'),
        password:Yup.string().required('Required!'),
        course: Yup.string().required('Required!'),
        confimPassword:Yup.string().oneOf([Yup.ref('password'),''],'Password must match').required("Required!"),
        modeOfContact:Yup.string().required('Required!'),
        phone:Yup.number()
  
        .required('A phone number is required'),
        pincode:Yup.string().min(6).required('Required!'),
       courseDate: Yup.date().required('Required!').nullable(),


        
 })
 const validateSkills = values => {
    let error
    if(values.length === 0){
        error = "Required!"
    }
    return error
}

 const  onSubmit=values=>{
     console.log("form values reg..",values);
     if(FormNumber<3){ setFormNumber(FormNumber +1)}
 }
 const nextbutton=()=>{
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
<div className="steps-form-2">
    <div className="steps-row-2 setup-panel-2 d-flex justify-content-between">
        <div className="steps-step-2 first">
            <a href="#step-1" 
            type="button" 
            className="btn btn-amber btn-circle-2 waves-effect ml-0" 
            data-toggle="tooltip" 
            data-placement="top" 
            title="Basic Information"><i className="fa fa-folder-open-o" aria-hidden="true">1</i></a>
        </div>
        <div className="steps-step-2 second">
            <a href="#step-2" 
            type="button" 
            className="btn btn-blue-grey btn-circle-2 waves-effect"
             data-toggle="tooltip" 
            data-placement="top" 
            title="Personal Data"><i className="fa fa-pencil" aria-hidden="true">2</i></a>
        </div>
        <div className="steps-step-2 thired">
            <a href="#step-3" 
            type="button" 
            className="btn btn-blue-grey btn-circle-2 waves-effect" 
            data-toggle="tooltip" 
            data-placement="top" 
            title="Terms and Conditions"><i className="fa fa-photo" aria-hidden="true">3</i></a>
        </div>
        <div className="steps-step-2">
            <a href="#step-4" 
            type="button" 
            className="btn btn-blue-grey btn-circle-2 waves-effect mr-0" 
            data-toggle="tooltip" 
            data-placement="top" 
            title="Finish"><i className="fa fa-check" aria-hidden="true"></i></a>
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
                 <FormikControl
                    control='input'
                    type='email'
                    lable='Name*'
                    name='Name'
                    />
                <FormikControl
                    control='input'
                    type='email'
                    lable='Email*'
                    name='email'
                    />
                    
                 <FormikControl
                    control='input'
                    type='number'
                    lable='Phone no*'
                    min="0"
                    name='phone'
                    />
                
                    </>
                     }
         {FormNumber ==2 &&  
                <>
                 <FormikControl
                     control="select"
                     lable="Select Course*"
                     name="course"
                     options={deopdownoption}
                    />
                <FormikControl
                  control="checkbox"
                  lable="Your skills"
                  name="skills"
                  validate={validateSkills}
                  options={checkBoxOptions}
                />

             <FormikControl
                  control="date"
                  lable="Date*"
                  name="courseDate"
             />

                    </>
                     }
            {FormNumber ==3 &&  
                <>
                 <FormikControl
                    control='input'
                    type='password'
                    lable='Password'
                    name='password'
                    />
                 <FormikControl
                    control='input'
                    type='password'
                    lable='Confirm Password*'
                    name='confimPassword'
                    />
                 <FormikControl
                    control='input'
                    type='number'
                    min="0"
                    lable='Pincode*'
                    name='pincode'
                    />
                    </>
                     }
               
    </Card.Body>
        
        <button 
        type="submit" 
        className="btn btn-primary nextbutton" 
        onClick={()=>{onSubmit()}}>Next</button>

    {/* <Button variant="primary" className="nextbutton" onClick={()=>{nextbutton()}}>Next</Button> */}
  </Card.Body>
</Card>

{/*  <button type="submit" className="btn btn-primary" disabled={!formik.isValid}>Login</button> */}
                    
                    </div>
               </Form>
           )
       }}
       </Formik>
       </div>
    )
}

export default RegistrationForm
