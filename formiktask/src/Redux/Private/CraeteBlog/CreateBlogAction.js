import axios from 'axios';
import {toast}from 'react-toastify'
export const FETCH_CREATEBLOG_BEGIN = 'FETCH_CREATEBLOG_BEGIN';
export const FETCH_CREATEBLOG_SUCCESS = 'FETCH_CREATEBLOG_SUCCESS';
export const FETCH_CREATEBLOG_FAILURE = 'FETCH_CREATEBLOG_FAILURE';

export const fetchSetCreateBlogBegin = () => ({
  type: FETCH_CREATEBLOG_BEGIN,
});

export const fetchSetCreateBlogSuccess = (products) => ({
  type: FETCH_CREATEBLOG_SUCCESS,
  payload: products,
});

export const fetchSetCreateBlogFailure = (error) => ({
  type: FETCH_CREATEBLOG_FAILURE,
  payload: error,
});

export const CreateBlogRequest= (data,onSubmitProps,props) => {
    const localstoragetoken =localStorage.getItem('logintoken')
  return (dispatch) => {
    dispatch(fetchSetCreateBlogBegin());
    axios
      .post(`${process.env.REACT_APP_API}/api/createBlog/`,data,
      {
        headers: {
            'Authorization': localstoragetoken,
            'content-type': "application/json"
        }
    })
      .then((Response) => {
          console.log("CreateBlog_Response",Response);
          if(Response.data.ResponseStatus == 0){
                  dispatch(fetchSetCreateBlogSuccess(Response.data));
                  toast.success(Response.data.message)
                  setTimeout(()=>{
                      onSubmitProps.resetForm();
                      props.history.push('/dash')
                  },2000)
          }
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchSetCreateBlogFailure(errors));
      })
  }
}
