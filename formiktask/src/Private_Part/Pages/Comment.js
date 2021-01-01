import React,{useState} from 'react'
import {Card,ListGroup,ListGroupItem}from 'react-bootstrap'
import Privateheader from '../header/Privateheader';
import Blog from '../../IMG/blog.jpg';
import CommentIcon from '../../IMG/comment.png'
import LikeIcon from '../../IMG/like.png'
import CommentSendIcon from '../../IMG/commentsendicon2.png'

import DisIcon from '../../IMG/dislike.png'
import { Link } from 'react-router-dom';
import '../CSS/comment.css'
function Comment(props) {
    const [like, setlike] = useState()
    const [comment, setcomment] = useState(false)
    const [commentdata, setcommentdata] = useState()
    const [finalcomment, setfinalcomment] = useState([])

    const blogdata =props.history.location.state;
    const { Meta } = Card;
        console.log("finalcomment",finalcomment);
    const ChangeImg=()=>{
        setlike(!like)
      }
      const commentClick=()=>{
          setcomment(!comment)
      }
      const CommentOnchange=(e)=>{
            setcommentdata(e.target.value)
      }
      const SendComment=()=>{
          document.getElementById("commentinput").innerHTML = ""
        setfinalcomment([
            ...finalcomment,commentdata
        ])
      }
    return (
        <Privateheader title="About">
            <Link className="mt-3 btn btn-info" to='/dash' style={{marginLeft:"88%",marginRight:"10px"}}><u>Back</u></Link>
        <div className="CreateBlog commentcard">       
    <Card className="cardcomment">
        <Card.Body>
          <Card.Title className="Blogtitle"><h3></h3></Card.Title>
          <Card.Text>
                <img src={Blog} style={{ width: 500 }}/>
          </Card.Text>

                     <div className="row ">
                            <div className="col-12">
                                  <h3><b>Title</b>:{blogdata.blogTitle}</h3>
                                  <h3><b>Content</b>:{blogdata.blogContent}</h3>
                        <footer className="footerby">
                                __by:Raj_Sojitar
                        </footer>
                            </div>
                            
                           
                        </div>
                               
                  <div className="row allicon">
                        <div className="col-4">
                                  <img src={like?DisIcon:LikeIcon} onClick={ChangeImg}  className="commenticon"/>
                            </div>
                            <div className="col-4">
                                  <img src={CommentIcon} onClick={commentClick} className="commenticon"/>
                            </div>
                            <div className="col-4">

                            </div>
                        </div>
                {comment && 
                <div className="row">
                    <div className="col-12">
                     <input type="text" className="mt-3 commentinput"
                        id="commentinput"
                        onChange={CommentOnchange}
                        placeholder="Type Text"></input>
                     <img src={CommentSendIcon}
                     onClick={SendComment}
                      className="sendcomment"/>
                    </div>
                 <Card.Body>
                    <Card.Text>
                    {finalcomment && finalcomment.map((data)=>{return(
                          <div className="row d-flex justify-content-center">
                                     {/* <div className="col-12"> */}
                                
                                            {data}
                                            
                                     {/* </div> */}
                              </div> 
                        
                    )})}
                     </Card.Text>
                 </Card.Body>
                </div>
                }
       </Card.Body>
    </Card>
            
      </div>
    </Privateheader>
    )
}

export default Comment
