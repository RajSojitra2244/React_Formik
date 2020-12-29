import {combineReducers} from 'redux'
import {Countryreducer, SignUPreducer, Statereducer,Loginreducer,PublicBlogReducer} from './Reducer'
import{ContactUsReducer}from './ContactUs/ContactUsReducer'
const rootreducer =combineReducers({
   country: Countryreducer,
   state:Statereducer,
   signup:SignUPreducer,
   login:Loginreducer,
   PublicBlogData:PublicBlogReducer,
   contactus:ContactUsReducer
})


export default rootreducer
