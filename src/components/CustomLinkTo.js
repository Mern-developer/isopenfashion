import React from 'react'
import { Link } from 'react-router-dom'

const CustomLinkTo = ({to,children}) => {
  return (
    <>
    <Link to={to} style={{textDecoration: 'none'}} >{children}</Link> 
    
    </>
  )
}

export default CustomLinkTo