import React, { useEffect,useState} from 'react';
import Privateheader from './header/Privateheader';
import { Link ,useHistory,Redirect} from 'react-router-dom';
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetBlogById } from '../Redux/Private/CraeteBlog/GetBlogById/ShowBlogAction';
import './CSS/Dashbord.css';
import Blog from '../IMG/blog.jpg';
import Delete from '../IMG/delete.png';
import { Card, Col, Row } from 'antd';
import Loader from 'react-loader-spinner'
import {DeleteBlogById}from '../Redux/Private/CraeteBlog/DeleteBlog/DeleteBlogAction'
import CommentIcon from '../IMG/comment.png'
import LikeIcon from '../IMG/like.png'
import DisIcon from '../IMG/dislike.png'

function Dashboard(props) {
    const history = useHistory()
    let dispatch = useDispatch();
    const [like, setlike] = useState(false)
    const { Meta } = Card;
    let getprivateblog =useSelector((state) => state.privateblog.allprivateblog);

  useEffect(() => {
    dispatch(GetBlogById());
  }, []);
const DeleteBlog=(userId)=>{
    console.log("deleteClick",userId);
    dispatch(DeleteBlogById(userId,props))
}

const ChangeImg=()=>{
  setlike(!like)
}
const GotoComment=(data)=>{
  console.log("CommentClick",data);
  history.push('/comment',data)
  // <Redirect to="/comment" data={data}/>
}
  return (
    <div>
      <Privateheader title="Dashbord">
        {/* <div className="row"> */}
          <div className="mt-3">
          { getprivateblog !==undefined&&  getprivateblog.length ==0 &&
           <Loader type="ThreeDots" className="loder" color="#00BFFF" height={80} width={80}/>}
          {/* </div> */}
          <div className="site-card-wrapper">
            <Row gutter={16}>
              
              {getprivateblog &&
                getprivateblog.map((data) => {
                  {console.log("sasas")}
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
                              {/* <img src={Delete} onClick={()=>{DeleteBlog(data._id)}} className="deleteicon" /> */}
                            </div>
                          </div>
                        <div className="row allicon">
                        <div className="col-4">
                                  <img src={like?DisIcon:LikeIcon} onClick={ChangeImg}  className="commenticon"/>
                            </div>
                            <div className="col-4">
                                  <img src={CommentIcon} onClick={()=>GotoComment(data)} className="commenticon"/>
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
