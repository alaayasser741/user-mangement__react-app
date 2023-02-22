import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const handelSubmit = (e) => {
    let userData = { user, password };

    axios.get(`http://localhost:3000/admins/1`).then(res=>{
    toast.success("Login Successfully");
    navigate(`/users`)
    console.log(res.data)
    }).catch(e=>{
      toast.error("Login Failed")
      console.log(e.message)
    })

  }


  return (
    <section className='mt-5 d-flex justify-content-center'>
      <Container >
        <form action="">
          <Row >
            <Col lg={6} className="offset-lg-3">
              <Card >
                <div className="card-header">
                  <h1>Login</h1>
                </div>
                <div className="card-body">
                  <Row>
                    {/* User Name */}
                    <Col lg={7} className="mt-3">
                      <div className="form-group">
                        <label htmlFor="">
                          username <span className="text-danger">*</span>
                        </label>
                        <input required value={user} onChange={(e) => { setUser(e.target.value) }} type="text" className="form-control" />

                      </div>
                    </Col>
                    {/* Password */}
                    <Col lg={7} className="mt-3">
                      <div className="form-group">
                        <label htmlFor="">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input required value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" />
                      </div>
                    </Col>

                  </Row>
                </div>
                <div className="card-footer">
                  <Row>
                    <Col lg={8}>
                      <Button onClick={handelSubmit}>Log in</Button>
                    </Col>
                    <Col lg={4}>
                      <Link to='/signup'>Dont have account?</Link></Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </form>
      </Container>
    </section>
  )
}

export default Login