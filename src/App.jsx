import { Sidebar } from "lucide-react"
import Form from "./components/Form"
import Header from "./components/Header"
import Sidebarr from "./components/Sidebar"
import ItemCard from "./components/ItemCard"
import Itemlist from "./components/Itemlist"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup"
import Ap from "./Ap"
import Signin from "./components/Signin"
import Profile from "./components/profile"

function App() {


  return (
    <BrowserRouter basename="/">
    <Routes>
       <Route path="/" element={<Ap/>} />
   <Route path="/signup" element={<Signup/>} />
   <Route path="/signin" element={<Signin/>}/>
   <Route path="/profile" element={<Profile/>}/>
   
    </Routes>
    </BrowserRouter>
  )
}

export default App
