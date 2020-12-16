import React from 'react';
import { Formik,Field,Form,ErrorMessage,FastField } from 'formik';
import * as Yup from 'yup';
import '../css/formdata.css'

const initialValues={
  email:"",
  psd:"",
  comment:"",
  address:"",
  social:{
    facebook:'',
    twitter:''
  },
  phonenumber:['','']
},
 onSubmit =(values) => {
  console.log('Form data', values);
},

 validationSchema=Yup.object({
  email:Yup.string().email('Invalid email Format').required('Required!'),
  psd:Yup.string().required('Required!'),
  comment:Yup.string().required('Required!')

})
const Formdata = () => {
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>

      <Form  className="m-5" >
        <div className="form-group ">
          <label>Email address</label>
          <Field type="email" name="email" className="form-control" placeholder="Enter email"/>
          <div className="error"> <ErrorMessage  name="email"/> </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <Field type="password" name="psd" className="form-control" placeholder="Password" />
          <div className="error"> <ErrorMessage  name="psd"/> </div>
        </div> 

        <div className="form-group">
          <label>Comment</label>
          <Field as="textarea" className="form-control" name="comment" />
          <div className="error"> <ErrorMessage  name="comment"/> </div>
        </div>     

        {/* <div className="form-group">
          <label>Address</label>
          <Field>
            {
              (props)=>{
                const{ field,form ,meta} = props
                {console.log('Render props',props.field)}
                return ( 
                <div>
                  <input id="address" name="address" {...field}/>
                  {meta.touched && meta.error? <div>{meta.error}</div>:null}
                </div>  
                   )
                  }}
          </Field>
          </div>  */}

          <div className="form-group">
          <label>Facebook profile</label>
          <Field  type="text" className="form-control" name="social.facebook" />
          </div>  

          <div className="form-group">
          <label>Twitter profile</label>
          <Field  type="text" className="form-control" name="social.twitter" />
          </div> 

            <div className="form-group">
          <label>Primary phone number</label>
          <Field  type="text" className="form-control" name="phonenumber[0]" />
          </div>  
          <div className="form-group">
          <label>Secondary phone number </label>
          <Field  type="text" className="form-control" name="phonenumber[1]" />
          </div>   

        <button type="submit" className="btn btn-dark">Submit</button>
      </Form>

    </Formik>
  );
};

export default Formdata;
