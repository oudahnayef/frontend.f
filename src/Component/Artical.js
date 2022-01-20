import React,{useState,useEffect} from "react";
import axios from "axios";




export default function Artical({token}) {
const [Artical, setArtical] = useState([])
const [addArtical  , setaddArtical] = useState("")
const [nameArtical, setNameArtical] = useState("")
 const [deleteArt, setDeleteArt] = useState("")

useEffect(async() => {
    const addArtical = await axios.get (`${process.env.REACT_APP_BACKEND_URL}/articl`
        
    );
    setArtical(addArtical.data);
    console.log(addArtical.data);
},[])

const postArtical= async()=> {
    const posts = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/articl`,{article :addArtical, name: nameArtical},{
        headers:{authorization: "Bearer " + token},
       });
setArtical(posts.data);
console.log(posts.data);
    
}

 const deleteArticac = async(id) =>{
 const deeell = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/articl/${id}`,{
    headers:{authorization: "Bearer " + token},
     
 });
 
 setArtical(deeell.data) 
 }





const ChangeaddArtical =(e) =>{
    setaddArtical(e.target.value);
};

const ChangenameArtical =(e)=>{
    setNameArtical(e.target.value);
};

//  const ChangedeleteArt= (e) => {
//      setDeleteArt(e.target.value);
//  };


    return (
        <div>
             <input className='input' onChange={(e)=>{ChangeaddArtical(e)}} type="text" placeholder="Add your name" />
             <input className='input' onChange={(e)=>{ChangenameArtical(e)}} type="text" placeholder="Add your story" />
                         
                             <button className='butt' onClick={()=>{postArtical()}}>add</button>
                             
            {
              Artical.map((element,i)=>{
                  return(
                      <div>
                          
                          <h1>{element.name}</h1>
                          <h3>{element.article}</h3>

                          <button className='butt' onClick={(e)=>{deleteArticac(element._id,element.deeell)}}>delete</button>
                         
                      </div>


                  )

              })  
            }
        </div>
    )
}
