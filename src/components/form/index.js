import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser } from '../../reducers/userDetailSlice';
import { useNavigate, useParams } from 'react-router-dom';

export default function Form({ isEdit }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const users = useSelector(state => state.users.users);

    const [user, setUser] = React.useState({
        name: '', email: '', location: '', company: ''
    });

    React.useEffect(() => {
        if (isEdit) {
            const filteredUser = users.find(user => user.id === id);
            setUser(filteredUser)
        }
    }, [id, users, isEdit])

    const handleForm = e => {
        setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (isEdit) {
            dispatch(updateUser(user))
        } else {
            dispatch(createUser(user));
        }
        navigate('/todos');
    }

    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}

        >
            <TextField fullWidth label="name" name='name' id="fullWidth" onChange={handleForm} value={user?.name} />
            <TextField fullWidth label="email" name='email' id="fullWidth" onChange={handleForm} value={user?.email} />
            <TextField fullWidth label="location" name='location' id="fullWidth" onChange={handleForm} value={user?.location} />
            <TextField fullWidth label="company" name='company' id="fullWidth" onChange={handleForm} value={user?.company} />
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
                Submit
            </Button>
        </Box>
    )
}
