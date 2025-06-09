import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ItemCard from './ItemCard'

const Itemlist = () => {
    const alllink=useSelector(store=>store.links.linkss)
    console.log(alllink)
  return (
    <div className='bg-red grid grid-cols-3 gap-7'>
        {
            alllink.map((item,ind)=>{
                return (
                    <ItemCard key={ind} item={item} />
                )
            })
        }
    </div>
  )
}

export default Itemlist