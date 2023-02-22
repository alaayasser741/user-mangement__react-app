import React from 'react'
import '../../styles/form.css';
import { AiOutlineUserAdd, AiFillCloseCircle } from 'react-icons/ai'
const Form = ({setShow}) => {
    
    return (
        <div className='form__section'>
            <div className="form__card bg-danger w-50 vh50 p-3 text-center">
                <h4 className='text-white text-center mb-5 mt-4'>Add New User <AiOutlineUserAdd /></h4>
                <form action="">
                    <input type="text" required placeholder='user name' className="rounded-5 w-50 d-block mb-3 outline-0 m-auto px-4 py-1 border-0" />
                    <input type="email" required placeholder='user email' className="rounded-5 w-50 d-block mb-3 outline-0 m-auto px-4 py-1 border-0" />
                    <select required className="rounded-5 w-50 d-block mb-3 outline-0 m-auto px-4 py-1 border-0">
                        <option value="">Select Your Country</option>
                        <option value="Egypt">Egypt</option>
                        <option value="USA">USA</option>
                        <option value="KSA">KSA</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="submit" className='btn btn-outline-light w-25' value="Add" />
                    <div onClick={()=>{setShow(false)}} className='close text-white'><AiFillCloseCircle /></div>
                </form>
            </div>
        </div>
    )
}

export default Form