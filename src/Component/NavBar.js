import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../Style.css"
export default function NavBar({setToken ,token,Admin}) {
    const [user, setUser] = useState([])
    useEffect(async() => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
    headers: {authorization: `Bearer ${token}` },
  });
  console.log(user);
  setUser(res.data);
    }, [])
    return (
        <div>
         {token ? (<>
            <ul>
            <li className='active'>  <Link to ="/home"> Home</Link>   </li>
            <li>   <Link to ="/ToDoList"> ToDoList</Link> </li> 
            <li>   <Link to ="/Artical"> Artical</Link>  </li>
            {Admin==true?( <li>   <Link to ="/Admin"> Admin</Link> </li>  ):("")}  
            <li>   <Link  to="login" onClick={()=>{setToken("")}} >log out</Link> </li>  
            </ul>
   </>  ):<>
   <ul>
  <li>    <Link to ="/signup"> SingUp</Link>  </li>
  <li>   <Link to ="/login"> LogIn</Link>  </li>
 
  
</ul>
   </>}

        </div>
    )
}
