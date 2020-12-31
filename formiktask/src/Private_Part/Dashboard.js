import React, { useEffect,} from 'react';
import Privateheader from './header/Privateheader';
import { Link ,useHistory} from 'react-router-dom';
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetBlogById } from '../Redux/Private/CraeteBlog/GetBlogById/ShowBlogAction';
import './CSS/Dashbord.css';
import Blog from '../IMG/blog.jpg';
import Delete from '../IMG/delete.png';
import { Card, Col, Row } from 'antd';

import {DeleteBlogById}from '../Redux/Private/CraeteBlog/DeleteBlog/DeleteBlogAction'

function Dashboard(props) {
    const history = useHistory()
    let dispatch = useDispatch();
    const { Meta } = Card;
  let getprivateblog = useSelector((state) => state.privateblog.allprivateblog);
  console.log('efrwerfwerfrefr', getprivateblog);

  useEffect(() => {
    dispatch(GetBlogById());
  }, []);
const DeleteBlog=(userId)=>{
    console.log("deleteClick",userId);
    dispatch(DeleteBlogById(userId,props))
}

  return (
    <div>
      <Privateheader title="Dashbord">
        {/* <div className="row"> */}
          <div className="mt-3">
            {/* <Link className="btn btn-dark" to="/createblog">
              Create Blog
            </Link> */}
          {/* </div> */}
          <div className="site-card-wrapper">
            <Row gutter={16}>
              {getprivateblog &&
                getprivateblog.map((data) => {
                  return (
                    <div className="Blog">
                      <Col span={8}>
                        <Card
                          hoverable
                          style={{ width: 240 }}
                          className="Blogcard"
                          cover={<img alt="example" src={Blog} />}
                        >
                          <div className="row">
                            <div className="col-8">
                              <Meta
                                title={data.blogTitle}
                                description={data.blogContent}
                              />
                            </div>
                            <div className="col-4">
                              <img src={Delete} onClick={()=>{DeleteBlog(data._id)}} className="deleteicon" />
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </div>
                  );
                })}
            </Row>
          </div>
        </div>
      </Privateheader>
    </div>
  );
}

export default Dashboard;
