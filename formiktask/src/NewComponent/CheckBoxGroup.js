import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

function CheckBoxGroup(props) {
    const{lable,name,options,...rest}=props
    console.log("hobby",name);
    
    return (
    
               <div className="form-group">
                    <label htmlFor={name}>{lable}</label>
                    <Field name={name}>
                        {({field})=>{
                            console.log("field",field);
                            return options.map(option =>{
                                return(
                                    <React.Fragment key={option.value}>
                                    <input 
                                    type='checkbox' 
                                    id={option.value}
                                    {...field}
                                   
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                    />
                                    <lable htmlFor={option.value}>{option.key}</lable>
                                    </React.Fragment>
                                )
                            })
                        }

                        }
                    </Field>
                    <ErrorMessage name={name} component={TextError}/>
                </div>            
        
    )
}

export default CheckBoxGroup
