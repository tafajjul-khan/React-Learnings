import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-700 text-white text-3xl text-center p-5 m-5'>User: {userid}</div>
  )
}

export default User