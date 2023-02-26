import React, { useEffect, useState } from 'react'
import '../../styles/form.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
const Form = ({ setShow, showForm, showEditForm, setShowEditForm, usersDataEdit }) => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = e => {
        let userNewData = { userName, email, country };
        e.preventDefault();
        if (usersDataEdit) {
            let userEditData = { userName, email, country };
            axios.put(`http://localhost:3004/users/${usersDataEdit.id}`, userEditData).then(res => {
                toast.success("User updated 😀🫡")
                setShowEditForm(false)
            }).catch(err => {
                toast.error("Update Failed 🤧🥹")
            })
        } else {
            let userData = { userName, email, country };
            axios.post('http://localhost:3004/users', userData)
                .then(res => {
                    toast.success("User Add successfully");
                    setShow(false);
                })
                .catch(err => toast.error('Data Failed'));
        }
    }

    useEffect(() => {
        if (usersDataEdit) {
            setUserName(usersDataEdit.userName)
            setEmail(usersDataEdit.email)
            setCountry(usersDataEdit.country)
        }
    }, [usersDataEdit])
    return (
        <div className='form__section'>
            <div className="form__card bg-danger w-50 vh50 p-3 text-center rounded-2" onSubmit={handleSubmit}>
                <h4 className='text-white text-center mb-5 mt-4'>{setShow ? 'Add New User +' : 'Edit User'}</h4>
                <form action="">
                    <input type="text" required placeholder='user name' value={userName} onChange={(e) => { setUserName(e.target.value) }} className="rounded-5 w-50 d-block mb-3 outline-0 m-auto px-4 py-1 border-0" />
                    <input type="email" required placeholder='user email' value={email} onChange={(e) => { setEmail(e.target.value) }} className="rounded-5 w-50 d-block mb-3 outline-0 m-auto px-4 py-1 border-0" />
                    <select required value={country} onChange={(e) => { setCountry(e.target.value) }} className="rounded-5 w-50 d-block mb-3 outline-0 m-auto px-4 py-1 border-0">
                        <option value="">Select Your Country</option>
                        <option value="Egypt">Egypt</option>
                        <option value="USA">USA</option>
                        <option value="KSA">KSA</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="submit" className='btn btn-outline-light w-25' value={usersDataEdit ? "Update" : "Add"} />
                    <div onClick={() => {
                        showForm && setShow(false);
                        showEditForm && setShowEditForm(false)
                    }}
                        className='close text-white'>
                        <AiFillCloseCircle /></div>
                </form>
            </div>
        </div>
    )
}

export default Form