import { Sidebar } from "lucide-react"
import Form from "./components/Form"
import Header from "./components/Header"
import Sidebarr from "./components/Sidebar"
import ItemCard from "./components/ItemCard"
import Itemlist from "./components/Itemlist"
import { useState } from "react"

const Ap = () => {
  const item = {
  title: "hello",
  link: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7337098597248708608?collapsed=1" height="670" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  type: "image",
  description: "vgg",
  tags: []
};
const [val,setval]=useState('all');
const [num,setnum]=useState({});
// const [categoryCounts, setCategoryCounts] = useState({}); // 👈 new
const [refresh, setRefresh] = useState(false);

  return (
     <div>
      <Header setRefresh={setRefresh} />
      {/* <Form/> */}
      <div className="flex">
     <Sidebarr val={val} setval={setval} num={num}  />
     <Itemlist val={val} setnum={setnum} refresh={refresh}  />
     {/* <ItemCard item={item}/>
      */}
      
     </div>
    </div>
  )
}

export default Ap