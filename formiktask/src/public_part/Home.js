import React,{useState,useEffect} from 'react'
import Header from './header'
import { Carousel } from 'react-bootstrap'
import S1 from '../IMG/slider1.jpg'
import S2 from '../IMG/slider2.jpg'
import S3 from '../IMG/slider3.jpg'
import {getAllPublicBlog } from '../Redux/Blog/BlogAction'
import {useDispatch,useSelector} from 'react-redux'



function Home() {
    const [index, setIndex] = useState(0);
    const dispatch=useDispatch()
    useEffect(() => { 
        dispatch(getAllPublicBlog())
},[])
const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};
    return (
        <div>
            <Header />
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={S1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={S2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={S3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
 </div>
    )
}

export default Home
