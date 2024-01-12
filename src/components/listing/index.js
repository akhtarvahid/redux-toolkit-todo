import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../reducers/userDetailSlice';
import List from '../List';

export default function Listing() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.users);

    useEffect(() => {
       dispatch(fetchUser())
    }, [])

    console.log('user::', data)
  return (
    <div>
        <List todos={data.users} />
    </div>
  )
}
