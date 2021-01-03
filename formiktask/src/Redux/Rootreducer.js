import {combineReducers} from 'redux'
import {Countryreducer, SignUPreducer, Statereducer,Loginreducer,PublicBlogReducer} from './Reducer'
import{ContactUsReducer}from './ContactUs/ContactUsReducer'
import {ForgotPasswordReducer}from './ForgotPassword/ForgotPasswordReducer'
import {CreateBlogReducer} from './Private/CraeteBlog/CreateBlogReducer'
import {PrivateBlogReducer}from '../Redux/Private/CraeteBlog/GetBlogById/ShowBlogReducer'
import {DeleteBlogReducer}from '../Redux/Private/CraeteBlog/DeleteBlog/DeleteBlogReducer'
import{PublicBlogreducer}from '../Redux/Blog/BlogReducer'
import {ChangePasswordReducer} from './Private/CraeteBlog/ResetPassword/ResetPasswordReducer'
const rootreducer =combineReducers({
   country: Countryreducer,
   state:Statereducer,
   signup:SignUPreducer,
   login:Loginreducer,
   PublicBlogData:PublicBlogreducer,
   contactus:ContactUsReducer,
   forgotpassword:ForgotPasswordReducer,
   createblog:CreateBlogReducer,
   privateblog:PrivateBlogReducer,
   deletebolg:DeleteBlogReducer,
   changepassword:ChangePasswordReducer
})


export default rootreducer
