import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  const {user} =useContext(UserContext)
  if(!user) return <h1>Not logged in</h1>
  return (
    <div className='text-3xl my-3 text-center'>Profile: {user.username}</div>
  )
}

export default Profile