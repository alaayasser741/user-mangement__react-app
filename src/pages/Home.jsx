import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <main className='bg-dark vh-100 text-white d-flex flex-column justify-content-center'>
      <h1 className='text-center mb-5 pt-4'>Welcome To Admin Home Page</h1>
      <div className="  text-center">
        <Link to={'/login'} className="me-3">
          <Button size="lg">Login</Button>
        </Link>
        <Link to={'/signup'}>
          <Button size="lg">SignUp</Button>
        </Link>
      </div>
    </main>
  )
}

export default Home