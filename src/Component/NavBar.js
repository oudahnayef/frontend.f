import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (

        <div>
            <ul>
                <li>
          <Link to ="/signup"> SingUp</Link>  
         </li>
         <li>
          <Link to ="/login"> LogIn</Link>  

         </li>

            <li>
            <Link to ="/home"> home</Link>   
            
            </li>
               
               <li>
              <Link to ="/ToDoList"> ToDoList</Link>     
               </li>

         </ul>
        </div>
    )
}
