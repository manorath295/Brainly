
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [finduser,setFindUser] = useState(null)
    useEffect(()=>{
        fetch()

    },[])
    const fetch= async()=>{
     const response = await axios.get("http://localhost:3000/api/v1/view",{
      withCredentials: true,
     })
     console.log(response.data)
      setFindUser(response.data)

    }
    if(!finduser)
        return <h1>siginin</h1>
        
  return (
    <div>
     {finduser.username}
     {finduser.password}
    </div>
  )
}

export default Profile
