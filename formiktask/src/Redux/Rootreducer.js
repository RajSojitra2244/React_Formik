import {combineReducers} from 'redux'
import {Countryreducer, SignUPreducer, Statereducer,Loginreducer} from './Reducer'

const rootreducer =combineReducers({
   country: Countryreducer,
   state:Statereducer,
   signup:SignUPreducer,
   login:Loginreducer
})


export default rootreducer
