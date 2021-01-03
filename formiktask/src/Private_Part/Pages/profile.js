import React from 'react'
import Privateheader from '../header/Privateheader'
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function profile() {
    return (
        <div>
        <Privateheader title="profile">
           <Link to="/changepassword" style={{marginLeft:"90%"}} className="mt-5 ">Change Password</Link>
        </Privateheader>
        </div>
    )
}

export default profile
