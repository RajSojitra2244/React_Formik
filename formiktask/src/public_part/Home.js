import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Card, Col, Row } from 'antd';
import Loader from 'react-loader-spinner'
import { Carousel } from 'antd';
import { toast } from 'react-toastify'

import '../css/Home.css'
import Header from './header'
import {getAllPublicBlog } from '../Redux/Blog/BlogAction'
import {IsEmpty} from '../Services/Service'

import DisLikeIcon from '../IMG/dislike.png'
import S1 from '../IMG/slider1.jpg'
import S2 from '../IMG/slider2.jpg'
import S3 from '../IMG/slider3.jpg'
import LikeIcon from '../IMG/like.png'
import Delete from '../IMG/delete.png'
import Blog from '../IMG/blog.jpg'
import CommentIcon from '../IMG/comment.png'


function Home() {
    const [index, setIndex] = useState(0);
    const [like, setlike] = useState(false)

    const dispatch=useDispatch()
    const { Meta } = Card;

  let GetPublicBlog = useSelector((state) => state.PublicBlogData.Blog);
console.log("GetPublicBlog",GetPublicBlog);

    useEffect(() => { 
        dispatch(getAllPublicBlog())
},[])
const ChangeImg=()=>{
  setlike(!like)
}
    return (
        <div>
      <Header />

  
  <Carousel autoplay>
  <div>
    <img src={S1}/>
  </div>
  <div>
    <img src={S2}/>
  </div>
  <div>
    <img src={S3}/>
  </div>
</Carousel>

      
{ IsEmpty(GetPublicBlog) &&
 <Loader type="ThreeDots" className="loder" color="#00BFFF" height={80} width={80}/>}

    <div className="site-card-wrapper HOMECARD">
            <Row gutter={16}>
              {GetPublicBlog &&
                GetPublicBlog.map((data) => {
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
                              className="allbloghome"
                                title={data.blogTitle}
                                description={data.blogContent}
                              />
                            </div>
                            <div className="col-4">
                             
                            </div>
                          </div>
                          <div className="row allicon">
                        <div className="col-4">
                                  <img src={like?DisLikeIcon:LikeIcon} onClick={ChangeImg}  className="commenticon"/>
                            </div>
                            <div className="col-4">
                                  <img src={CommentIcon} onClick={()=>toast.error("Please Login")} className="commenticon"/>
                            </div>
                            <div className="col-4">
                            <img src={Delete} onClick={()=>toast.error("Please Login")} className="deleteicon" />

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
    )
}

export default Home
