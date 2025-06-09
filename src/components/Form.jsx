import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addlink } from '../utils/linkSlice'
import { toggleForm } from '../utils/formSlice'
import axios from 'axios'

const Form = () => {
    const dispatch=useDispatch()
    const titleRef = useRef()
const urlRef = useRef()
const descRef = useRef()
const categoryRef = useRef()
const handlecancel=()=>{
    dispatch(toggleForm())
}
    const handlelink= async (e)=>{
        e.preventDefault();
            const title = titleRef.current.value
    const url = urlRef.current.value
    const description = descRef.current.value
    const category = categoryRef.current.value
 
    console.log({ title, url, description, category })
     const res = await axios.post("http://localhost:3000/api/v1/content",{
        title:title,
        link:url,
        type:description
     },{
        withCredentials:true,
     })
     console.log(res.data)
        dispatch(addlink({title,url,description,category}))
    }
  return (
    <div  className='flex flex-col items-center justify-center '>
        <h1>ADD New Link</h1>
        <form className='p-4 border-2 w-80 h-80 '>
            <div className='mb-3 '>
                <label htmlFor="title">Title</label>
                <br/>
                <input ref={titleRef} id='title' type="text" placeholder='Enter title here ' />
            </div >
             <div className='mb-3'>
                <label htmlFor="link">URL</label>
                <br/>
                <input ref={urlRef} id='link' type="text" placeholder='https://example.com ' />
            </div>
            <div className='mb-3'>
                <label htmlFor="Description">Description</label>
                <br/>
                <input ref={descRef} id='Description' type="text" placeholder='optional Description ' />
            </div>
            <div className='mb-3'>
                <h1>Category</h1>
                <select
                ref={categoryRef}
        id="category"
        name="category"
        className="border border-gray-400 px-2 py-1 rounded-lg hover:border"
      >
        <option value="apple">website</option>
        <option value="banana">twitter</option>
        <option value="cherry">youtube</option>
      </select>
            </div>
            <button onClick={handlelink}>Add Link</button>
            <button onClick={handlecancel}>Cancel</button>
        </form>
    </div>
  )
}

export default Form