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
const result =await  axios.post(`${process.env.REACT_APP_BACKEND_URL}/signUp`,{FristName,email,password})
if( result.status===200){
    history.push("/login")
}
}


    return (
        <div className="div">
    <input className="input" onChange={(e)=>{changeFristName(e)}} type="text" placeholder="name" />
    <input  className="input" onChange={(e)=>{changeemail(e)}} type="text" placeholder="email" />
    <input  className="input" onChange={(e)=>{changePass(e)}} type="password" placeholder="pass" />

       <button  className="but" onClick={()=>{signUpNew()}} >signUp</button>



        </div>
    )
}
