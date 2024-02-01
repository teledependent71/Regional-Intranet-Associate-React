import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Intranet Associate</title>
        <meta property="og:title" content="Regional Intranet Associate" />
      </Helmet>
    </div>
  )
}

export default Home
