import React from 'react'
import { Link } from 'react-router-dom'

function Navigation(){
  return(
    <div>
      {/* <a href="/">Home</a>
      <a href="/test">Test</a> */}
      <Link to="/">Home</Link>
      <Link to={
        {
          pathname: "/about",
          state:{
            fromNavigation: true
          }
        }
      }>Test</Link>
    </div>
  )
}

export default Navigation