import {combineReducers} from 'redux'
import {Countryreducer, SignUPreducer, Statereducer,Loginreducer,PublicBlogReducer} from './Reducer'

const rootreducer =combineReducers({
   country: Countryreducer,
   state:Statereducer,
   signup:SignUPreducer,
   login:Loginreducer,
   PublicBlogData:PublicBlogReducer
})


export default rootreducer
