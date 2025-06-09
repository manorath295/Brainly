import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const username=useRef();
  const password=useRef();
  const nav= useNavigate()
  const handlesignup= async ()=>{
    const un=username.current.value;
    const pw=password.current.value;
 const res=  await  axios.post("http://localhost:3000/api/v1/signin", {
  username: un,
  password: pw,
}, {
  withCredentials: true, // note the capital 'C'

});
console.log(res.data);
nav('/')
  }
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-black'>
      <h1 className='text-white font-bold text-3xl'>Sign in</h1>
    <div className=' m-2 bg-gray-300 max-w-sm rounded-lg mx-auto  p-4'>
        <form >
            <div className='mb-4'>
                <label htmlFor="">username</label>
                <input ref={username} type="text" className='border ml-4' />
            </div>
            <div>
                <label htmlFor="">password</label>
                <input ref={password}  type="password" className='border ml-4' />
            </div>
            <div className="flex justify-center">
  <div className='w-fit mt-5 p-2 text-center border rounded-lg' onClick={handlesignup}>Signin</div>
</div>

        </form>
    </div>
    </div>
  )
}

export default Signin