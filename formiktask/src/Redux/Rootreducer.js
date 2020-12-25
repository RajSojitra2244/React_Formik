import {combineReducers} from 'redux'
import {Countryreducer, Statereducer} from './Reducer'

const rootreducer =combineReducers({
   country: Countryreducer,
   state:Statereducer
})


export default rootreducer
