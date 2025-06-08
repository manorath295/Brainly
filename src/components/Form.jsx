import React from 'react'

const Form = () => {
  return (
    <div  className='flex flex-col items-center justify-center '>
        <h1>ADD New Link</h1>
        <form className='p-4 border-2 w-80 h-80 '>
            <div className='mb-3 '>
                <label htmlFor="title">Title</label>
                <br/>
                <input id='title' type="text" placeholder='Enter title here ' />
            </div >
             <div className='mb-3'>
                <label htmlFor="link">URL</label>
                <br/>
                <input id='link' type="text" placeholder='https://example.com ' />
            </div>
            <div className='mb-3'>
                <label htmlFor="Description">Description</label>
                <br/>
                <input id='Description' type="text" placeholder='optional Description ' />
            </div>
            <div className='mb-3'>
                <h1>Category</h1>
                <select
        id="category"
        name="category"
        className="border border-gray-400 px-2 py-1 rounded-lg hover:border"
      >
        <option value="apple">website</option>
        <option value="banana">twitter</option>
        <option value="cherry">youtube</option>
      </select>
            </div>
        </form>
    </div>
  )
}

export default Form