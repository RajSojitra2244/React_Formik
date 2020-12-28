import axios from 'axios';
import Auth from '../PrivateRouter/auth'

import {toast}from 'react-toastify'
export const FETCH_COUNTRY_BEGIN = 'FETCH_COUNTRY_BEGIN';
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS';
export const FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE';

export const fetchCountryBegin = () => ({
  type: FETCH_COUNTRY_BEGIN,
});

export const fetchCountrySuccess = (products) => ({
  type: FETCH_COUNTRY_SUCCESS,
  payload: products,
});

export const fetchCountryFailure = (error) => ({
  type: FETCH_COUNTRY_FAILURE,
  payload: error,
});

export const getcountry = () => {
  return (dispatch) => {
    dispatch(fetchCountryBegin());
    axios
      .get(`${process.env.REACT_APP_API}/api/getAllCountry`)
      .then((Response) => {
        const country = Response.data.countryList;
        dispatch(fetchCountrySuccess(country));
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchCountryFailure(errors));
      });
  };
};
// -----------------------------------------State-------------------------
export const FETCH_STATE_BEGIN = 'FETCH_STATE_BEGIN';
export const FETCH_STATE_SUCCESS = 'FETCH_STATE_SUCCESS';
export const FETCH_STATE_FAILURE = 'FETCH_STATE_FAILURE';

export const fetchStateBegin = () => ({
  type: FETCH_STATE_BEGIN,
});

export const fetchStateSuccess = (products) => ({
  type: FETCH_STATE_SUCCESS,
  payload: products,
});

export const fetchStateFailure = (error) => ({
  type: FETCH_STATE_FAILURE,
  payload: error,
});

export const getState = (stateId) => {
  return (dispatch) => {
    dispatch(fetchStateBegin());
    axios
      .get(`${process.env.REACT_APP_API}/api/getStateById/${stateId}`)
      .then((Response) => {
        const country = Response.data.stateList;
        // console.log(country);
        dispatch(fetchStateSuccess(country));
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchStateFailure(errors));
      });
  };
};

//-----------------------------------Signup--------------------------//
export const FETCH_SIGNUP_BEGIN = 'FETCH_SIGNUP_BEGIN';
export const FETCH_SIGNUP_SUCCESS = 'FETCH_SIGNUP_SUCCESS';
export const FETCH_SIGNUP_FAILURE = 'FETCH_SIGNUP_FAILURE';

export const fetchSignupBegin = () => ({
  type: FETCH_SIGNUP_BEGIN,
});

export const fetchSignupSuccess = (products) => ({
  type: FETCH_SIGNUP_SUCCESS,
  payload: products,
});

export const fetchSignupFailure = (error) => ({
  type: FETCH_SIGNUP_FAILURE,
  payload: error,
});

export const SendingSignUpRequest = (data) => {
  console.log("data",data);
  return (dispatch) => {
    dispatch(fetchSignupBegin());
    dispatch(fetchSignupBegin());

    axios
      .post(`${process.env.REACT_APP_API}/api/signin`,data)
      .then((Response) => {
        if(Response.data.ResponseStatus !== 0){
          toast.error(Response.data.message)
          dispatch(fetchSignupFailure(Response.data));
          console.log("Signup",Response);
        }
          if(Response.data.ResponseStatus == 0){ 
            dispatch(fetchSignupSuccess(Response.data)) 
            console.log("Signup",Response.data);
            ;}
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchSignupFailure(errors));
      });
  };
};


//-----------------------------------Login--------------------------//
export const FETCH_LOGIN_BEGIN = 'FETCH_LOGIN_BEGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';

export const fetchLoginBegin = () => ({
  type: FETCH_LOGIN_BEGIN,
});

export const fetchLoginSuccess = (products) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: products,
});

export const fetchLoginFailure = (error) => ({
  type: FETCH_LOGIN_FAILURE,
  payload: error,
});

export const SendingLoginRequest = (data,props) => {
  // console.log("data",data);
  return (dispatch) => {
    dispatch(fetchLoginBegin());
    axios
      .post(`${process.env.REACT_APP_API}/api/login`,data)
      .then((Response) => {
        // console.log("Login",Response);
        const data = Response.data

        if(Response.data.ResponseStatus !== 0){
          localStorage.removeItem('logintoken')
          toast.error(Response.data.message)
        }
          if(Response.data.ResponseStatus == 0){ 
            dispatch(fetchLoginSuccess(data)) 
            toast.success(Response.data.message)
              Auth.login(() => {
                toast.success(" Login Successfull !!")
                localStorage.setItem('logintoken', data.token)
                props.history.push("/dash")
            })
            }
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchLoginFailure(errors));
      });
  };
};
