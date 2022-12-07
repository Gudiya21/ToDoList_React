import React,{ useState } from 'react';
import './App.css'
function App(){
const [task,setTask]=useState("")
const [alltasks,setAllTasks]=useState([])
  return (
    <center>
      <h1 id='headname'>TODO LIST APP</h1>
    <div id='container'>
      <input id='inputbox' type="text" placeholder='Enter Your Task' onChange={(element)=>{
        setTask(element.target.value)
      }}/>
    <button id='add' onClick={()=>{
      if(task.length>0){
      setAllTasks([...alltasks,task])
      }
    }}>Add ToDo</button>
    {
      alltasks.map((item,index)=>{
        return(
          <div>
            <h3>{item}</h3>

            <button id='delete' onClick={()=>{

              let storeData=[...alltasks]
              storeData.splice(index,1); 
              setAllTasks(storeData)
            }}>Delete</button>
             
            <button id='edit' onClick={()=>{
              let newArr=[...alltasks];
              let editvalue = prompt("enter the edited todo")
              newArr[index]=editvalue
              setAllTasks(newArr)
            }}>EDIT</button>
            <button id='complete' onClick={()=>{
              let newArr = [...alltasks];
              newArr[index]=<strike>{newArr[index]}</strike>
              setAllTasks(newArr)    
            }}>Complete</button>
          </div>
        )
      })
    }
    </div>
    </center>
  )
}
export default App



