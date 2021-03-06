import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

function CheckBoxGroup(props) {
    const{lable,name,options,...rest}=props
    console.log("check",props);
    return (
    
               <div className="form-group">
                    <label htmlFor={name}>{lable}</label>
                    <Field name={name} {...rest}>
                        {({field})=>{
                            return options.map(option =>{
                                return(
                                    <React.Fragment key={option.value}>
                                    <input 
                                    type='checkbox' 
                                    id={option.value}
                                    {...field}
                                    {...rest}
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
