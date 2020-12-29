import React, { useState } from 'react'
import '../css/contactus.css'
import Header from './header'
import GoogleMapReact from 'google-map-react';
import {Card,Button} from 'react-bootstrap'

function ContactUs() {
const[data,setdata]=useState(
    {
        center: {lat:21.219686, lng:72.898042},
        zoom: 17
    }
)

    return (
        <div >
            <Header />
            <div>
            <Card>
  <Card.Img variant="top" src="holder.js/100px180" />

</Card>
            </div>
        <div style={{height: '450px',width:"100%"}}>
        <GoogleMapReact
        defaultCenter={data.center}
        defaultZoom={data.zoom} >
        </GoogleMapReact>
        </div>
        
        </div>
    )
}

export default ContactUs
