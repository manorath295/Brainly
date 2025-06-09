import { Sidebar } from "lucide-react"
import Form from "./components/Form"
import Header from "./components/Header"
import Sidebarr from "./components/Sidebar"
import ItemCard from "./components/ItemCard"
import Itemlist from "./components/Itemlist"

const Ap = () => {
     const item={
  title:"hello",
  url:"ffb",
  description:"vgg",
  category:"fvd"
 }
  return (
     <div>
      <Header/>
      {/* <Form/> */}
      <div className="flex">
     <Sidebarr/>
     {/* <Itemlist/> */}
     <ItemCard item={item}/>
     </div>
    </div>
  )
}

export default Ap