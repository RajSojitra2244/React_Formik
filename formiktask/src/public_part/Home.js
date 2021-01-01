import React,{useState,useEffect} from 'react'
import Header from './header'
// import { Carousel } from 'react-bootstrap'
import S1 from '../IMG/slider1.jpg'
import S2 from '../IMG/slider2.jpg'
import S3 from '../IMG/slider3.jpg'
import Delete from '../IMG/delete.png'
import { Card, Col, Row } from 'antd';
import {getAllPublicBlog } from '../Redux/Blog/BlogAction'
import {useDispatch,useSelector} from 'react-redux'
import Blog from '../IMG/blog.jpg'
import { Carousel } from 'antd';
import Loader from 'react-loader-spinner'
import '../css/Home.css'
import { toast } from 'react-toastify'

function Home() {
    const [index, setIndex] = useState(0);
    const dispatch=useDispatch()
    const { Meta } = Card;

  let GetPublicBlog = useSelector((state) => state.PublicBlogData.Blog);
console.log("GetPublicBlog",GetPublicBlog);

    useEffect(() => { 
        dispatch(getAllPublicBlog())
},[])
const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};
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

      
{  GetPublicBlog !==undefined && GetPublicBlog.length==0&& 
 <Loader type="ThreeDots" className="loder" color="#00BFFF" height={80} width={80}/>}

    <div className="site-card-wrapper">
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
                              <img src={Delete} 
                              onClick={()=>toast.error("Please Login")}
                              className="deleteicon" />
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
