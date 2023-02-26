import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';
import Form from '../components/reusable/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
const Users = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  // For Edit
  const [usersDataEdit, setUsersDataEdit] = useState({});

  // For Display Data
  const [usersData, setUsersData] = useState([]);

  // getData
  const getData = () => {
    axios.get('http://localhost:3004/users')
      .then(res => {
        setUsersData(res.data);
        getData();
      })
      .catch(err => { console.log(err) });
  }
  useEffect(() => {
    axios.get('http://localhost:3004/users')
    getData();
  }, [showForm, showEditForm,])

  const usersList = usersData.map(user => {
    return (
      <tr key={user.id}>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.country}</td>
        <td><FiEdit className='text-info fs-5 ' onClick={() => { handleEdit(user) }} style={{ cursor: 'pointer' }} /></td>
        <td><MdOutlineDelete className='text-danger fs-4 ' style={{ cursor: 'pointer' }} onClick={() => { deleteUser(user.id) }} /></td>
      </tr>
    )
  })
  // Edit User
  const handleEdit = (user) => {
    setUsersDataEdit(user);
    setShowEditForm(true)
  }

  // Delete User
  const deleteUser = (id) => {
    if(window.confirm("Are You Sure ?")){
      axios.delete(`http://localhost:3004/users/${id}`).then(res => {
        toast.success("User Deleted ❌😢")
        setShowEditForm(false)
      }).catch(err => {
        toast.error("Delete Failed 🫤🤔")
      })
    }
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={3} className='bg-secondary border-dark border-end vh-100 border-2'>
            <h3 className="text-white-50 mt-4 text-center">Admin Dashboard</h3>
            <hr className='text-white' />
            <Button onClick={() => { setShowForm(true) }} variant='danger' className='d-block mt-5 w-50 m-auto'>Add User</Button>
            {showForm && <Form setShow={setShowForm} showForm={showForm} />}

            {showEditForm && <Form
              setShowEditForm={setShowEditForm} showEditForm={showEditForm}
              usersDataEdit={usersDataEdit} />}
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
                {usersList}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Users