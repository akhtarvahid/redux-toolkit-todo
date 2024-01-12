import React, { useState } from 'react'
import SubApp from './SubApp'
const GITHUB_API = 'https://jsonplaceholder.typicode.com/todos/1';

export default function Practice() {

  //const { user, loading } = useFetchUser(GITHUB_API);
  const [show, setShow] = useState(false);

  const showPost = () => {
    // toggles posts onclick of button
    setShow(!show);
  };
    // if (loading) {
  //   return <h1>Loading...</h1>
  // }
  return (
    <div>
        <hr />
      <button onClick={showPost}>Show Posts</button>
      {show && <SubApp />}
    </div>
  )
}
