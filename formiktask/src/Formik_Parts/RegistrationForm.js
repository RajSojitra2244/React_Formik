import React, { useState ,useEffect} from 'react'
import {Field,ErrorMessage,Form,Formik} from 'formik'
import FormikControl from './FormikControll'
import * as Yup from 'yup'
import {Card,Button} from 'react-bootstrap'
import '../css/Registration.css'
import { useHistory,Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import SuccessfullRegistration from '../IMG/successfull.png'
import Header from '../public_header/header'
import {useDispatch,useSelector} from 'react-redux'
import {BaseUrl} from '../API/BaseAPI'
import { getcountry, getCity } from '../Redux/Action'
import TextError from './TextError'
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
function RegistrationForm() {
    let  dispatch = useDispatch()
 const [country, setcountry] = useState(1)
 const [FormNumber, setFormNumber] = useState(1)
 const [Password, setPassword] = useState()
 const [Registration, setRegistration] = useState(false)
 
const CountryArray = useSelector(state => state.country.country)
const CityArraySecond = useSelector(state => state.state.stateData)
const CityArrayFirst = [{Id:"",CountryName:"Select Country"}]
 useEffect(() => { 
     if(country === 1){
         dispatch(getcountry())
     }
},[country])
const history = useHistory()
   
  const   initialValues={
        name:"",
        email:'',
        password:'',
        confirmPassword:'',
        PhoneNo:'',
        address:'',
        skill:[],
        pincode:'',
        course:'',
        city:'',
        country:'',
        state:'',
        date:null
    }

  const validationSchema= Yup.object(
            initialValues.name==''&&{
            name:Yup.string().required('Required!'),
            PhoneNo: Yup.number().typeError('Only Number Allowed').required('PhoneNo Required*'),
            email:Yup.string().email('Invalid Email format').required('Required!') }   )
 const validateSkills = values => {
    let error
     if( values.length ==0){
        error = "Required!"
    }
   
    return error
}
const validateDate = values => {
    let errors
     if( values===null){
        errors = "Required!"
        }
    return errors
}
const validateCourse = values => {
    let errors
     if( values===''){
        errors = "Required!"
        }
    return errors
}
const validatepassword = values => {
    setPassword(values)
    let errors
     if( values===''){
        errors = "Required!"
        }
    return errors
}
const validateconfimPassword = values => {
    let errors
     if( values===''){
         errors = "Required!"
         return errors
        }
        if(values !== Password){ 
          errors = "Password does't match!"
          return errors
          }
  
}
const validatepincode = values => {
    // let storepin=[]
    let errors
    // storepin.push(values)
    if( values===''){
      errors = "Required!"
      }
    // if(storepin.length <= 5){ return errors="Maximum six digit allowed"}
        // if(values.typeof)
    return errors
}
const validateaddress = values =>{
    let errors
     if( values===''){
        errors = " Address is required!"
        }
    return errors
}
const validatecity = values =>{
    let errors
     if( values===''){
        errors = " City is required!"
        }
    return errors
}
const validatecountry = values =>{
    let errors
     if( values===''){
        errors = " Country is required!"
        }
        else{
             dispatch(getCity(values))
            }
    return errors
}
const validatestate = values =>{
    let errors
    if( values===''){
       errors = " State is required!"
       }
   return errors
}
const previousForm = ()=>{
    // debugger
    if(FormNumber >1){
        setFormNumber(FormNumber-1)
    }
}

 const  onSubmit=values=>{
   if(FormNumber < 4){
       if(values){
           setFormNumber(FormNumber +1)
        }
       {!initialValues.Date == null && setFormNumber(FormNumber + 1)} 
   }
     if(FormNumber ==4){
        if(values){
            setRegistration(true)
        }
    }
}
{Registration==true && 
    toast.success("Registration Successfull")
}

 const BackTologin=()=>{
    history.push('/login')
 }
    return (
        <div>
            <Header/>

        <div className="registration">
       <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit} >
       {formik=>{
           const first={
            backgroundColor:"white",color:"blue"}
           const firsttext={color:"darkblue"}

           return(
               <Form>

<div className="registrationMargin">
<div className="steps-form-2">
    <div className="steps-row-2 setup-panel-2 d-flex justify-content-between" >
        <div className="steps-step-2 " >
            <a href="#step-1" 
            type="button" 
            style={FormNumber==1?first:null}
            className="btn btn-amber btn-circle-2 waves-effect ml-0" 
            data-toggle="tooltip" 
            data-placement="top" 
            title="Basic Information"><i className="fa fa-folder-open-o"  style={FormNumber==1?firsttext:null}  aria-hidden="true">1</i></a>
        </div>
        <div className="steps-step-2 second">
            <a href="#step-2" 
            type="button" 
            style={FormNumber==2?first:null}
            className="btn btn-blue-grey btn-circle-2 waves-effect"
             data-toggle="tooltip" 
            data-placement="top" 
            title="Personal Data"><i className="fa fa-pencil" style={FormNumber==2?firsttext:null}  aria-hidden="true">2</i></a>
        </div>
        <div className="steps-step-2 second">
            <a href="#step-2" 
            type="button" 
            style={FormNumber==3?first:null}
            className="btn btn-blue-grey btn-circle-2 waves-effect"
             data-toggle="tooltip" 
            data-placement="top" 
            title="Personal Data"><i className="fa fa-pencil" style={FormNumber==3?firsttext:null}  aria-hidden="true">3</i></a>
        </div>

        <div className="steps-step-2 thired">
            <a href="#step-3" 
            type="button" 
            style={
                Registration?null:FormNumber==4?first:null
            }
            className="btn btn-blue-grey btn-circle-2 waves-effect" 
            data-toggle="tooltip" 
            data-placement="top" 
            title="Terms and Conditions"><i className="fa fa-photo" style={ Registration?null:FormNumber==4?firsttext:null}  aria-hidden="true">4</i></a>
        </div>
        <div className="steps-step-2">
            <a href="#step-4" 
            type="button" 
            style={Registration?first:null}
            className="btn btn-blue-grey btn-circle-2 waves-effect mr-0" 
            data-toggle="tooltip" 
            data-placement="top" 
            title="Finish"><i className="fa fa-check"  style={Registration?firsttext:null} aria-hidden="true"></i></a>
        </div>
    </div>
</div>
 <Card className="card">
  <Card.Body>
       { Registration ==false? <Card.Title className="cardtitle">Create Youre Account </Card.Title>
         :<Card.Title className="cardtitle" style={{color:"green"}}> Registrations Successfull</Card.Title>}

            {Registration ==false&& <p><b>This is Step {FormNumber}</b></p> }
    <Card.Body>
                {FormNumber ==1 &&  
                <>
                 <FormikControl
                    control='input'
                    type='text'
                    lable='Name*'
                    name='name'
                    />
                <FormikControl
                    control='input'
                    type='email'
                    lable='Email*'
                    name='email'
                    />
                    
                 <FormikControl
                    control='input'
                    type='text'
                    lable='Phone no*'
                    min="0"
                    name='PhoneNo'
                    />
                
                    </>
                     }
         {FormNumber ==2 &&  
                <>
                 <FormikControl
                     control="select"
                     lable="Select Course*"
                     name="course"
                     validate={validateCourse}
                     options={deopdownoption}
                    />
                <FormikControl
                  control="checkbox"
                  lable="Your skills"
                  name="skill"
                  validate={validateSkills}
                  options={checkBoxOptions}
                />

             <FormikControl
                  control="date"
                  lable="Date*"
                  type="date"
                  name="date"
                  validate={validateDate}
             />

                    </>
                     }
            {FormNumber ==3 &&   
                <>
                 <FormikControl
                    control='input'
                    type='password'
                    lable='Password*'
                    name='password'
                  validate={validatepassword}

                    />
                 <FormikControl
                    control='input'
                    type='password'
                    lable='Confirm Password*'
                    name='confirmPassword'
                  validate={validateconfimPassword}
                    />
                 <FormikControl
                    control='input'
                    type='text'
                    lable='Pincode*'
                    name='pincode'
                  validate={validatepincode} />

                  <FormikControl
                  control='textarea'
                  type='text'
                  lable='Address*'
                  name='address'
                validate={validateaddress} />
                   
                    </>
                     }
                      {FormNumber ==4 && Registration==false &&  
                <>
                            
                           <FormikControl
                            control='country'
                            type='text'
                            lable='Country*'
                            name='country'
                            validate={validatecountry}
                            options={CountryArray}
                            />

                          { <FormikControl
                            control='city'
                            type='text'
                            lable='City*'
                            name='city'
                            validate={validatecity}
                            options={CityArraySecond}
                            />}
                    
                 <FormikControl
                    control='input'
                    type='text'
                    lable='State*'
                    name='state'
                  validate={validatestate} />
                    </>
                     }
                     {Registration?
                     <Card.Body>
                        <img src={SuccessfullRegistration} className="successimg"/> 
                        </Card.Body>:""
                    }
               
    </Card.Body>
        <div className="row">
            <div className="col-6">
       {Registration==false ? <button 
        type="submit" 
        className="btn btn-primary nextbutton" 
        onClick={()=>{onSubmit()}}>{FormNumber==4? "Register":"Next"}</button>
        :
        <Link 
        to="/login"
        type="submit" 
        className="btn btn-success nextbutton" 
        onClick={()=>{BackTologin()}}>Back to Login</Link>
       }
        </div>
        <div className="col-6">
        { FormNumber ==2 &&    <button 
        type="submit" 
        className="btn btn-primary " 
        onClick={()=>{previousForm()}}>Previous</button>}
        </div>
        </div>
  </Card.Body>
</Card>            
</div>
               </Form>
           )
       }}
       </Formik>
       </div>
       </div>
    )
}

export default RegistrationForm