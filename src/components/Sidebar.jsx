import {
  Hash,
  Twitter,
  Youtube,
  Globe,
  Github,
  Linkedin,
  Instagram,
  MoreHorizontal
} from 'lucide-react'
import React from 'react'

const Sidebarr = ({val,setval ,num}) => {
  console.log(val);
  console.log(num)
  const categories = [
    { name: 'All', icon: <Hash />,  },
    { name: 'Twitter', icon: <Twitter />,  },
    { name: 'Youtube', icon: <Youtube />,  },
    { name: 'Website', icon: <Globe />,  },
    { name: 'Github', icon: <Github />,  },
    { name: 'Linkedin', icon: <Linkedin />, },
    { name: 'Instagram', icon: <Instagram />, },
    { name: 'Other', icon: <MoreHorizontal />, }
  ]

  return (
    <div className="p-2  max-w-2xs   border">
      <h1 className="text-xl font-bold mb-4 w-fit border">Overview</h1>

      <div className="p-2 bg-gray-200 w-fit  rounded-lg mb-4">
        <h1 className="text-lg font-bold">2</h1>
        <h5>Total Links</h5>
      </div>

      <div className="flex flex-col gap-2">
        {categories.map((ele, i) => {
       const gh= ele.name
       console.log("hi",gh)
       console.log(num[gh])
        return  (
          
          <div onClick={()=>setval(ele.name)}
            key={i}
            className="w-full sm:w-60 border flex items-center justify-between p-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              {ele.icon}
              <span>{ele.name}</span>
            </div>
            <span className="font-semibold">{num[gh]}</span>
          </div>
        )})}
      </div>
   <h1 className="text-xl mb-4 w-fit mt-6 bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
  Quick Access
</h1>

    </div>
  )
}

export default Sidebarr
