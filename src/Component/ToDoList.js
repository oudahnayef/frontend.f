import React , {useState , useEffect} from 'react'
import axios from 'axios'



export default function ToDoList({token}) {
const [task , setTask] = useState ([])
const [name , setName] = useState ("")
// const [ task , setTask] = useState ("")

// console.log(token);
useEffect(async () => {
    // console.log(token,"token");
    const res = await axios.get(`http://localhost:5000/task`,{
      headers:{authorization: "Bearer " + token},

    });

    setTask(res.data);

  }, []); 




  const pushTask = async () =>{
    // console.log(token);
    try {

        const result = await axios.post(`http://localhost:5000/task`, {
            newName:name,
            newTask:task,
          },
          {
          headers:{authorization: "Bearer " + token},
          }
          );


          setTask(result.data);
        //   console.log(result.data);
        
    } catch (error) {
        // console.log(error);
    }
     
  
      
   
      
  }


const changeName = (e) => {
    setName(e.target.value)
}
 const changeTask = (e) => {
     setTask(e.target.value)
 };



    return (
        <div>
            
            <input onChange={(e)=>{changeName(e)}} type="text" placeholder="name" />
            <input onChange={(e)=>{changeTask(e)}} type="text" placeholder="AddTask" />
            <button onClick={()=>{pushTask()}} >task</button>

        </div>
    )
}
