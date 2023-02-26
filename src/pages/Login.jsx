import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    let userData = { user, password };
    setLoading(true)
    axios.get(`http://localhost:3004/admins/1`).then(res => {
      toast.success("Login Successfully");
      setTimeout(() => {
        navigate(`/users`)
        setLoading(false)
      }, 1000);

    }).catch(e => {
      toast.error("Login Failed")
      console.log(e.message)
      setLoading(false)
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
                      {loading ? <Spinner animation="grow" variant="primary" /> : <Button onClick={handelSubmit}>Log in</Button>}
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