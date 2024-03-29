import React, { useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import ViewModal from './viewModal/ViewModal';
import { deleteUser } from '../reducers/userDetailSlice';
import { useDispatch } from 'react-redux';

export default function List({ users, searchedData }) {
    const dispatch = useDispatch();
    const [openPopup, setOpenPopup] = useState(false);
    const [selectedUser, setSelectedUSer] = useState({});
    const navigate = useNavigate();
    const handleClose = ()=> {
       setOpenPopup(false);
    }

    return (
        <div>
            {openPopup && <ViewModal status={openPopup} handleClose={handleClose} selectedUser={selectedUser} />}
            <div>
                {users
                .filter(user => user.name.toLowerCase().startsWith(searchedData?.toLowerCase()))
                .map(user =>
                    <div key={`${user.id} ${user.name}`} className='todo-row'>
                        <img src={user.avatar} alt='avatar' />
                        <div>
                            <h3>{user.name}</h3>
                            <div>{user.company}</div>
                            <p>{user.isResident ? 'Resident' : 'Non-Resident'}</p>
                        </div>
                        <div>
                            <button onClick={() => [setOpenPopup(true), setSelectedUSer(user)]}>View</button>
                            <button onClick={() => navigate(`/todos/edit/${user.id}`)}>Edit</button>
                            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
