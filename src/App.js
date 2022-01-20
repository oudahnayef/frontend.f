import React,{useState} from 'react'
import SingUp from './Component/SingUp'
import Home from './Component/Home'
import { Route } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Login from "./Component/Login"
import ToDoList from './Component/ToDoList'
import AdminPage from './Component/AdminPage'
import Artical from './Component/Artical'
import "./Style.css"

require("dotenv").config();

export default function App() {
    console.log(process.env.REACT_APP_BACKEND_URL);
    // const [ token , setToken] = useState("");

//////////////////////////////////////////////
    const [token, setToken] = useState(() => {
        const saved = localStorage.getItem("token");
        const initialValue = JSON.parse(saved);
        return initialValue ; });

const [Admin, setAdmin] = useState("")


    return (
        <div>
            
       <NavBar token={token} setToken={setToken}  Admin={Admin}/>
       <Route exect path = "/ToDoList" render={ ()=> {
          return <ToDoList token = {token} />
      }}/>
       <Route exect path = "/Admin" render={ ()=> {
          return <AdminPage token = {token} Admin={Admin} />
      }}/>
       <Route exect path = "/Artical" render={ ()=> {
          return <Artical token = {token}  />
      }}/>
      <Route exect path = "/Home" render={ ()=> {
          return <Home token = {token} />
      }}/>
      <Route exect path = "/signup" component={SingUp}/>
      <Route exect path = "/login" render={ ()=> {
          return <Login setToken = {setToken} setAdmin={setAdmin} />
      }}/>


{/* {token} */}

        </div>
    )
}
