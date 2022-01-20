import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ToDoList({ token }) {
  const [Todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [name, setName] = useState("");

  const [nameInput, setNameInput] = useState("");
  const [taskInput, setTaskInput] = useState("");
  const [togle, setTogle] = useState(false);
  // const [towTogle, setTowTogle] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/task`, {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(Todo);
    setTodo(res.data);
  }, []);
  console.log(token);
  console.log(task, "hhhhhhh");
  console.log(name, "hhhhhhhh");
  console.log(Todo);

  const pushTask = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/task`,
        {
          newName: name,
          newTask: task,
        },
        {
          headers: { authorization: "Bearer " + token },
        }
      );

      setTodo(result.data);
      console.log(result.data);
    } catch (error) {
      // console.log(error);
    }
  };

  const deletAllTask = async () => {
    const deleted = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/task`, {
      headers: { authorization: "Bearer " + token },
    });
    //  setTodo(deleted.data);
    const copiedArray = [...task];
    copiedArray.splice(0, task.length);
    setTodo(copiedArray);
  };

  const deletone = async (id) => {
    const deleted = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/task/${id}`, {
      headers: { authorization: "Bearer " + token },
    });
    setTodo(deleted.data);
  };

  const updateTask = async (id) => {
    setTogle(false);
    const upTask = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/task`,
      { id: id, name: nameInput, task: taskInput },

      { headers: { authorization: "Bearer " + token } }
    );

    setTodo(upTask.data);
  };

  const updatComplete = async (id) => {
    const result = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/task/${id}`,
      { fenishTask: true },
      {
        headers: { authorization: "Bearer " + token },
      }
    );

    setTodo(result.data);

 
  };


  const CompleteFalse = async (id) => {
    const result = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/task/${id}`,
      { fenishTask: false },
      {
        headers: { authorization: "Bearer " + token },
      }
    );

    setTodo(result.data);

 
  };



  ///////////////////////////
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeTask = (e) => {
    setTask(e.target.value);
  };

  // const changeTogle = (id, i) => {
  //   setTogle(true);
  // };

  const completeTasks = (e) => {
    setComplete(e.target.value);
    // setComplete(false);
  };

  return (
    <div>
      <div className="div">
        <p>{Todo.name}</p>
        <input
          className="input"
          onChange={(e) => {
            changeName(e);
          }}
          type="text"
          placeholder="name of the day"
        />
        <input
          className="input"
          onChange={(e) => {
            changeTask(e);
          }}
          type="text"
          placeholder="AddTask"
        />
        <button
          className="butt"
          onClick={(e) => {
            pushTask();
          }}
        >
          ADD
        </button>
        <button
          className="butt"
          onClick={() => {
            deletAllTask();
          }}
        >
          REMOVE All task
        </button>
        {/* <input className='input' onChange={(e)=>{completeTasks(e)}} type="checkbox" placeholder="AddTask" /> */}
      </div>
      {Todo.map((elme) => {
        return (
          <>
            <div className="divv">
              {elme.complete == true ? 
              <h1 className="completedTask">{elme.name}</h1>
            :
            <h1>{elme.name}</h1>}
              <h3>{elme.task}</h3>
              {/* <input className='input' onChange={(e)=>{completeTasks(e)}} type="checkbox" placeholder="AddTask" /> */}
              
              
              <button
                className="butt"
                onClick={() => {
                  deletone(elme._id);
                }}
              >
                remove
              </button>

              {togle ? (
                <>
                  {/* <button
                    className="butt"
                    onClick={() => {
                      updateTask(elme._id);
                    }}
                  >
                    UpDATE
                  </button> */}
                  
                  <br />

                  <input className="but"
                    type="text"
                    placeholder="name"
                    onChange={(e) => {
                      setNameInput(e.target.value);
                    }}
                  />
                  <br />
                  <input className="but"
                    type="text"
                    placeholder="task"
                    onChange={(e) => {
                      setTaskInput(e.target.value);
                    }}
                  />
                </>
              ) : (
                ""
              )}

              <button
                className="butshow"
                onClick={() => {
                  {
                    updateTask(elme._id);
                  }
                  setTogle(!togle);
                }}
              >
                UPDATE
              </button>

              {elme.complete == true ? <button className="butshow" onClick={() => {CompleteFalse(elme._id,elme.CompleteFalse)}}>uncomplete</button>:



              <button
              className="butt"
              onClick={() => {
                updatComplete(elme._id, elme.complete);
              }}
            >
              complete
            </button>}
              
            </div>
          </>
        );
      })}
    </div>
  );
}
