import axios from 'axios'
import {toast}from 'react-toastify'
export const FETCH_ShowBlog_BEGIN = 'FETCH_ShowBlog_BEGIN';
export const FETCH_ShowBlog_SUCCESS = 'FETCH_ShowBlog_SUCCESS';
export const FETCH_ShowBlog_FAILURE = 'FETCH_ShowBlog_FAILURE';

export const fetchShowBlogBegin = () => ({
  type: FETCH_ShowBlog_BEGIN,
});

export const fetchShowBlogSuccess = (products) => ({
  type: FETCH_ShowBlog_SUCCESS,
  payload: products,
});

export const fetchShowBlogFailure = (error) => ({
  type: FETCH_ShowBlog_FAILURE,
  payload: error,
});

export const GetBlogById = () => {
    const localstoragetoken =localStorage.getItem('logintoken')
  return (dispatch) => {
    dispatch(fetchShowBlogBegin());
    axios
      .get(`${process.env.REACT_APP_API}/api/getBlogById`,
      {
        headers: {
            'Authorization': localstoragetoken,
            'content-type': "application/json"
        }
    })
      .then((Response) => {
          console.log("GetBlog",Response);
        dispatch(fetchShowBlogSuccess(Response.data.blog));
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchShowBlogFailure(errors));
      });
  };
};