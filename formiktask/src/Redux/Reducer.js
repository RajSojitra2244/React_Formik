import {FETCH_COUNTRY_BEGIN,FETCH_COUNTRY_SUCCESS,FETCH_COUNTRY_FAILURE,
        FETCH_STATE_BEGIN,FETCH_STATE_FAILURE,FETCH_STATE_SUCCESS} from './Action';
import {countrydata,statedata} from './state'

export   const Countryreducer=(state = countrydata, action)=>{
  switch (action.type) {
    case FETCH_COUNTRY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        country: action.payload,
        error:""
      };

    case FETCH_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        country: [],
      };

    default:
      return state;
  }
}


export   const Statereducer=(state = statedata, action)=>{
  console.log(action.payload);
  switch (action.type) {
    case FETCH_STATE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_STATE_FAILURE:
      return {
        ...state,
        loading: false,
        stateData: [],
        error: action.payload,
      };

    case FETCH_STATE_SUCCESS:
      return {
        ...state,
        loading: false,
        stateData: action.payload,
      };

    default:
      return state;
  }
}
