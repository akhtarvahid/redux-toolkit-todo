import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../reducers/userDetailSlice';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '../List';

export default function Listing() {
  const [isUserResident, setIsUserResident] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])


  const sortedList = data.users.filter(user => user.isResident === isUserResident);

  if (data.loading) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) => setIsUserResident(e.target.value)}
      >
        <FormControlLabel value='resident' control={<Radio />} label="Resident" />
        <FormControlLabel value='non-resident' control={<Radio />} label="Non-resident" />
      </RadioGroup>
      <List users={sortedList?.length > 0 ? sortedList : data.users} searchedData={data.searchedData} />
    </div>
  )
}
