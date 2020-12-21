import React from 'react'
import auth from './auth'

function AppLayout(props) {
    return (
        <div>
          <h1>App Layout</h1>
          <button
          onClick={()=>{
              auth.logout(()=>{
                  props.history.push("/")
              })
          }}
          >logout</button>  
        </div>
    )
}

export default AppLayout
