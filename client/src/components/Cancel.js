import React from 'react'
import { Link } from 'react-router-dom'

const Cancel = () => {
  return (
    <div>
       Your transcation is Cancelled
       <p>Redirect to <Link to="/">home</Link> page</p>
    </div>
  )
}

export default Cancel
