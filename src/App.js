import React,{useState} from 'react'
import SingUp from './Component/SingUp'
import home from './Component/home'
import { Route } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Login from "./Component/Login"
import ToDoList from './Component/ToDoList'


export default function App() {
    const [ token , setToken] = useState("");



    return (
        <div>
            
       <NavBar token={token} setToken={setToken} />
       <Route exect path = "/ToDoList" render={ ()=> {
          return <ToDoList token = {token} />
      }}/>
       <Route exect path = "/home" component={home}/>
      <Route exect path = "/signup" component={SingUp}/>
      <Route exect path = "/login" render={ ()=> {
          return <Login setToken = {setToken} />
      }}/>


{token}

        </div>
    )
}
