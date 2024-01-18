import React, { useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import ViewModal from './viewModal/ViewModal';

export default function List({ users }) {
    const [openPopup, setOpenPopup] = useState(false);
    const [selectedUser, setSelectedUSer] = useState({});
    const navigate = useNavigate();
    return (
        <div>
            {openPopup && <ViewModal status={openPopup} />}
            <div>
                {users.map(user =>
                    <div key={user.id} className='todo-row'>
                        <img src={user.avatar} alt='avatar' />
                        <div>
                            <h3>{user.name}</h3>
                            <div>{user.company}</div>
                        </div>
                        <div>
                            <button onClick={() => [setOpenPopup(true), setSelectedUSer(user)]}>View</button>
                            <button onClick={() => navigate(`/todo-list/${user.id}`)}>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
