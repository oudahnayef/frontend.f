import React , {useState , useEffect} from 'react'
import axios from 'axios'



export default function ToDoList({token}) {
const [Todo, setTodo] = useState([])
const [task , setTask] = useState ("")
const [name , setName] = useState ("")
// const [lastName, setlastName] = useState("")
// const [ task , setTask] = useState ("")

// console.log(token);
// useEffect(async () => {
//   console.log(Todo,"cccccccc");
//     // console.log("http://localhost:5000/task");
//     const res = await axios.get("http://localhost:5000/task",{
//       headers:{authorization: "Bearer " + token},

//     });

//     setTodo(res.data);
//     console.log("data",res.data);

//   }, []); 
useEffect(async () => {
  const res = await axios.get("http://localhost:5000/task", {
    headers: {authorization: `Bearer ${token}` },
  });
  console.log(Todo);
  setTodo(res.data);
}, []);

console.log(task,"hhhhhhh");
console.log(name,"hhhhhhhh");
console.log(Todo);

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


          setTodo(result.data);
          console.log(result.data);
        
    } catch (error) {
        // console.log(error);
    }
     
  }

  const deletAllTask = async() =>{

    const deleted = await axios.delete(`http://localhost:5000/task`,{
      headers:{authorization: "Bearer " + token},
     });
    //  setTodo(deleted.data);
       const copiedArray = [...task];
       copiedArray.splice(0,task.length);
       setTodo(copiedArray);
     
    
  }


const deletone= async (id)=>{
  const deleted = await axios.delete(`http://localhost:5000/task/${id}`,{
    headers:{authorization: "Bearer " + token},
   });
   setTodo(deleted.data)

}




///////////////////////////
const changeName = (e) => {
    setName(e.target.value)
}
 const changeTask = (e) => {
     setTask(e.target.value)
 };



    return (

        <div>
            <p>{Todo.name}</p>
            <input onChange={(e)=>{changeName(e)}} type="text" placeholder="name" />
            <br />
            <input onChange={(e)=>{changeTask(e)}} type="text" placeholder="AddTask" />
            <br />
            <button onClick={(e)=>{pushTask()}} >ADD</button>
            <button onClick={()=>{deletAllTask()}} >REMOVEAlltask</button>

{Todo.map((elme)=> {
return (
  <>

  <h1>{elme.name}</h1>

  <h3>{elme.task}</h3>
  <button onClick={()=>{deletone(elme._id)}}>remove</button>
  <hr />
  </>
)
}

)}           

        </div>
    )
}
