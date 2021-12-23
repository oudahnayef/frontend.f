import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";



export default function SingUp() {
const [ FristName, setFristName] = useState(" ");
const [email , setemail] = useState(" ");
const  [password , setpassword] = useState("");
//////////////////////////////////////////////////////////////////////////////////////////////////
const history = useHistory();

const changeFristName = (e) => {
    setFristName(e.target.value)
};

const changeemail = (e) => {
    setemail(e.target.value)
};
const changePass=(e)=>{
    setpassword(e.target.value)

}
const signUpNew=async()=>{
const result =await  axios.post("http://localhost:5000/signUp",{FristName,email,password})
if( result.status===200){
    history.push("/login")
}
}


    return (
        <div>
    <input onChange={(e)=>{changeFristName(e)}} type="text" placeholder="name" />
    <input onChange={(e)=>{changeemail(e)}} type="text" placeholder="email" />
    <input onChange={(e)=>{changePass(e)}} type="password" placeholder="pass" />

       <button onClick={()=>{signUpNew()}} >signUp</button>



        </div>
    )
}
