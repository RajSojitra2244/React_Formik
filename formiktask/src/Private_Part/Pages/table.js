import React,{useEffect} from 'react'
import Privateheader from '../header/Privateheader'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GetBlogById } from '../../Redux/Private/CraeteBlog/GetBlogById/ShowBlogAction';

function Table() {
    const dispatch = useDispatch()
    const history = useHistory()
  let getprivateblog = useSelector((state) => state.privateblog.allprivateblog);
console.log("table",getprivateblog);
useEffect(() => {
    dispatch(GetBlogById());
  }, []);
    return (
        <div>
        <Privateheader title="Table">
        <div  style={{width:"80vw", height:"80vh"}} className="mt-5 mx-auto">
      
      <table id="example" className="">
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Content</th>
            <th>Date</th>
            <th>User Id</th>
            <th>Blog Id</th>

          </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
          {getprivateblog && getprivateblog.map((data)=>{return(
              <>
              <tr>
                  <td>{data.blogCreatedBy}</td>
                  <td>{data.blogTitle}</td>
                  <td>{data.blogContent}</td>
                  <td>{data.blogDate}</td>
                  <td>{data.userId}</td>
                  <td>{data._id}</td>

              </tr>
              </>
          )})}
        </tbody>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </tfoot>
      </table>
   
  
  
  
          </div>
        </Privateheader>
        </div>
    )
}

export default Table
