import React from 'react'
import NavBar from './NavBar'

const Home = () => {
  return (
    <div id="container">
      <nav>
        <NavBar />
      </nav>
      <div className="home">
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home
