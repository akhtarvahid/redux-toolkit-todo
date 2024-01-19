import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../reducers/userDetailSlice';
import List from '../List';

export default function Listing() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  console.log('user::', data)
  if(data.loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <List users={data.users} />
    </div>
  )
}
