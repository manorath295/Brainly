import { Hash, Twitter, Youtube, Globe, Github, Linkedin, Instagram, MoreHorizontal } from 'lucide-react'

import React from 'react'

const Sidebarr = () => {

const categories = [
  {
    name: 'All Links',
    icon: <Hash />,
    count: 2
  },
  {
    name: 'Twitter',
    icon: <Twitter />,
    count: 1
  },
  {
    name: 'Youtube',
    icon: <Youtube />,
    count: 1
  },
  {
    name: 'Website',
    icon: <Globe />,
    count: 0
  },
  {
    name: 'Github',
    icon: <Github />,
    count: 0
  },
  {
    name: 'Linkedin',
    icon: <Linkedin />,
    count: 0
  },
  {
    name: 'Instagram',
    icon: <Instagram />,
    count: 0
  },
  {
    name: 'Other',
    icon: <MoreHorizontal />,
    count: 0
  }
]


  return (
    <div>
      <h1>Overview</h1>

      <div className="p-2 bg-gray-400 w-fit rounded-lg mb-4">
        <h1 className="text-lg font-bold">2</h1>
        <h5>Total Links</h5>
      </div>

      <div className="flex flex-col gap-2">
        {categories.map((ele, i) => (
          <div key={i} className=" w-fit flex items-center gap-2 p-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
            {ele.icon}
            <span>{ele.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebarr
