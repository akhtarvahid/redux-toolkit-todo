import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { createUser } from '../../reducers/userDetailSlice';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = React.useState({
        name: '',
        email: '',
        location: '',
        company: ''
    });

    const handleForm = e => {
        setUser((prevUser) => ({...prevUser, [e.target.name]: e.target.value}))
    }

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(createUser(user));
        navigate('/todo-list');
    }

    console.log(user)
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
            
        >
            <TextField fullWidth label="name" name='name' id="fullWidth" onChange={handleForm}/>
            <TextField fullWidth label="email" name='email' id="fullWidth" onChange={handleForm} />
            <TextField fullWidth label="location" name='location' id="fullWidth" onChange={handleForm} />
            <TextField fullWidth label="company" name='company' id="fullWidth" onChange={handleForm} />
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
                Submit
            </Button>
        </Box>
    )
}
