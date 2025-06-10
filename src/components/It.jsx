import { EllipsisVertical, Heart, SquareArrowOutUpRight } from 'lucide-react'
import React, { useState } from 'react'

const ItemCard = ({item}) => {
    if(!item) return <div>empty hh</div>
    const {title,url,description,category}=item
    const tags=["social","tech"]
    const [showdrop, setShowDrop] = useState(false)
    const clicked=()=>{
      setShowDrop(p=>!p)
    }
  return (
    <>
    
    <div className=' my-2 mx-2 border relative group transition-all delay-150 duration-300 ease-in-out max-h-64 p-2 rounded-lg shadow-md shadow-purple-500 hover:scale-[1.02] hover:shadow-gray-700'>
        <div className='p-2 bg-gradient-to-r from-blue-600 to-pink-500 rounded-lg w-fit mb-3 flex'>
         <SquareArrowOutUpRight />
          <div className="absolute top-3 right-9 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Heart size={24} className="text-red-500" />
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ">
        <EllipsisVertical size={24} onClick={clicked}   />
        {showdrop &&
         
        <select
        id="recent"
        name="recent"
        className="border  border-gray-400 px-2 py-1 rounded-lg hover:border"
      >
        <option value="recent">copy</option>
        <option value="popular">delete</option>
        <option value="option">read</option>
      </select>
        }
      </div>
         </div>
         <h1>{title}</h1>
         <h4 className='text-gray-500 text-md mt-1'>{description}</h4>
         <div className='flex items-center justify-between'>
            <h4 className='text-gray-400 text-sm'>{category}</h4>
            <h4 className='text-gray-400 text-sm'>5</h4>
         </div>
         <div className='flex items-center gap-1 mt-3'>
            {tags.map((t,i)=>{
                return(
                    <div className='bg-gray-300 px-2 rounded-lg' key={i} > #{t}</div>
                )
            })}
         </div>
         <a href={url}>
         <div className='cursor-pointer flex items-center gap-4 border justify-center mt-7 rounded-md hover:bg-gray-300 transition-transform  '>
                <SquareArrowOutUpRight  size={16}/>
            <div className=' w-fit ' >OpenLink</div>
         </div>
         </a>
         
    </div>
    </>
  )
}

export default ItemCard