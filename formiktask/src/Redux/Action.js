import axios from 'axios';
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
// -----------------------------------------City-------------------------
export const FETCH_STATE_BEGIN = 'FETCH_STATE_Signup';
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

export const getCity = (city) => {
  return (dispatch) => {
    dispatch(fetchStateBegin());
    axios
      .get(`${process.env.REACT_APP_API}/api/getStateById/${city}`)
      .then((Response) => {
        const country = Response.data.stateList;
        console.log(country);
        dispatch(fetchStateSuccess(country));
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchStateFailure(errors));
      });
  };
};

//-----------------------------------
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

export const getCity = (city) => {
  return (dispatch) => {
    dispatch(fetchStateBegin());
    axios
      .get(`${process.env.REACT_APP_API}/api/getStateById/${city}`)
      .then((Response) => {
        const country = Response.data.stateList;
        console.log(country);
        dispatch(fetchStateSuccess(country));
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchStateFailure(errors));
      });
  };
};
