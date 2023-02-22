import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';
import Form from '../components/reusable/Form'
const Users = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={3} className='bg-secondary border-dark border-end vh-100 border-2'>
            <h3 className="text-white-50 mt-4 text-center">Admin Dashboard</h3>
            <hr className='text-white' />
            <Button onClick={() => { setShowForm(true) }} variant='danger' className='d-block mt-5 w-50 m-auto'>Add User</Button>
            {showForm && <Form setShow={setShowForm} />}
          </Col>
          <Col lg={9}>
            <Table striped>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alaa</td>
                  <td>alaayasser2018@gmail.com</td>
                  <td>Egypt</td>
                  <td><FiEdit className='text-info fs-5 ' style={{ cursor: 'pointer' }} /></td>
                  <td><MdOutlineDelete className='text-danger fs-4 ' style={{ cursor: 'pointer' }} /></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Users