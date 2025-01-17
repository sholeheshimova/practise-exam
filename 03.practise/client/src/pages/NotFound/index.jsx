import React from 'react'
import { Helmet } from 'react-helmet-async'

const NotFound = () => {
  return (
    <>
    <Helmet>
            <title>Hello World</title>
           <meta name='description'  content='clothes pages'/>
          </Helmet>
      <h3>Not Found | Error 404!</h3>
    </>
  )
}

export default NotFound
