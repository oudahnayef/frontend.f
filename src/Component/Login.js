import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";



export default function Login({ setToken }) {

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

    
    const result = await axios.post("http://localhost:5000/login",{email:email,password:password})
    // console.log(result.data.token);
    // console.log(result.status);
    if( result.status===200){
        setToken(result.data.token)
        
        
        history.push("/")
    }
    
}
    return (

        <div>
            
            <input onChange={(e)=>{changeemail(e)}} type="text" placeholder="email" />
            <input onChange={(e)=>{changePass(e)}} type="password" placeholder="pass" />
            <button onClick={(e)=>{loginNew(e)}} >login</button> 
        </div>
    )
}
