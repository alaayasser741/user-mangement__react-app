import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    let userData = { user, password, email, phone, country, gender }
    axios.post("http://localhost:3000/admins", userData).then(res => {
      toast.success("User Register Successfully");
      setTimeout(() => {
        navigate(`/login`)
      }, 1000);
    }).catch(err => {
      toast.error("User Register Failed")

      console.log(err)
    });

  }


  return (
    <section className='mt-5 d-flex justify-content-center'>
      <Container >
        <form action="">
          <Row >
            <Col lg={6} className="offset-lg-3">
              <Card >
                <div className="card-header">
                  <h1>User Register</h1>
                </div>
                <div className="card-body">
                  <Row>
                    {/* User Name */}
                    <Col lg={6} className="mt-3">
                      <div className="form-group">
                        <label htmlFor="">
                          username <span className="text-danger">*</span>
                        </label>
                        <input required value={user} onChange={(e) => { setUser(e.target.value) }} type="text" className="form-control" />
                      </div>
                    </Col>
                    {/* Password */}
                    <Col lg={6} className="mt-3">
                      <div className="form-group">
                        <label htmlFor="">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input required value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" />
                      </div>
                    </Col>
                    {/* Email */}
                    <Col lg={6} className="mt-3">
                      <div className="form-group">
                        <label htmlFor="">
                          E-mail <span className="text-danger">*</span>
                        </label>
                        <input required value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" />
                      </div>
                    </Col>
                    {/* Phone */}
                    <Col lg={6} className="mt-3">
                      <div className="form-group">
                        <label htmlFor="">
                          Phone <span className="text-danger">*</span>
                        </label>
                        <input required value={phone} onChange={(e) => { setPhone(e.target.value) }} type="tel" className="form-control" />
                      </div>
                    </Col>
                    {/* Country */}
                    <Col lg={12} className="mt-3">
                      <div className="form-group">
                        <label htmlFor="">
                          Country <span className="text-danger">*</span>
                        </label>
                        <select value={country} onChange={(e) => { setCountry(e.target.value) }} className="form-control">
                          <option value="">Select Your Country</option>
                          <option value="Egypt">Egypt</option>
                          <option value="USA">USA</option>
                          <option value="KSA">KSA</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </Col>
                    {/* Gender */}
                    <Col lg={6} className="mt-3">
                      <div className="form-group">
                        <label className='me-3' htmlFor="">
                          Gender : <span className="text-danger">*</span>
                        </label>
                        <input className='me-1' type="radio" name="Gender" value='male' id='male' onChange={(e) => { setGender(e.target.value) }} />
                        <label className='me-3' htmlFor="male">
                          Male
                        </label>
                        <input className='me-1' type="radio" name="Gender" value='female' id='female' onChange={(e) => { setGender(e.target.value) }} />
                        <label htmlFor="female">
                          Female
                        </label>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="card-footer">
                <Row>
                    <Col lg={8}>
                      <Button onClick={handelSubmit}>Sign Up</Button>
                    </Col>
                    <Col lg={4}>
                      <Link to='/login'>Are you have account?</Link></Col>
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

export default Signup