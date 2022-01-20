import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

export default function Login({ setToken ,setAdmin}) {

const [ email , setemail] = useState("");
const [ password , setpassword] = useState ("");
const history = useHistory()
//////////////////////////
 const changeemail = (e) => {
     setemail (e.target.value)
 };

const changePass = (e) => {
    setpassword (e.target.value)
};

const loginNew=async()=>{
    console.log(email,password);

    
    const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,{email:email,password:password})
    // console.log(result.data.token);
     console.log(result.data);
   
        setToken(result.data.token)
        setAdmin(result.data.payload.Admin)
        localStorage.setItem("token",JSON.stringify(result.data.token))
        history.push("/ToDoList")
    
    
}
    return (

        <div className="div"> 
            
            <input className="input" onChange={(e)=>{changeemail(e)}} type="text" placeholder="email" />
            <input className="input"onChange={(e)=>{changePass(e)}} type="password" placeholder="pass" /> 
            <button className="but" onClick={(e)=>{loginNew(e)}} >login</button> 
            
        </div>
    )
}
