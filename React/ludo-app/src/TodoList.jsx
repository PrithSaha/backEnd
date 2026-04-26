import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos,setTodos] =useState([{task: "sample task",id:uuidv4() ,isDone: false }]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTodo=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task: newTodo,id:uuidv4()}];
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) =>{
     setTodos( (prevTodos) => todos.filter((prevTodos)=> prevTodos.id!= id));
       
    }

    let upperCaseAll=() =>{
        let newArr=todos.map((todo) => {
            return { 
                ...todo,
                task: todo.task.toUpperCase(),
            };
        });
        setTodos(newArr)
    };

    let UpperCaseOne = (id) =>{
       setTodos((todos)=> todos.map((todo) => {
            if(todo.id === id){
            return { 
                ...todo,
                task: todo.task.toUpperCase(),
            };
        }
            else{
                return todo;
            }
        })
       );
    };

    let MarkAsDone= (id)=>{
        setTodos((todos)=> todos.map((todo) => {
            if(todo.id=== id){
            return{
                ...todo,
               isDone:true
            }
        };
            return todo;
        }))
        }

    let markDoneAll= ()=>{
        setTodos((todos)=>
        todos.map((todo)=>{
            return{
                ...todo,
                isDone:true
            };
        }
        
    ))
    }    

    return(
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTodo}>Add Task</button>
            <br /><br />
            <hr />
            <h4>Todo List</h4>
            <ul>Task to do</ul>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span style={ { textDecoration : todo.isDone? "line-Through": "none"}}>{todo.task}</span>&nbsp;&nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>&nbsp;&nbsp;
                             <button onClick={()=>UpperCaseOne(todo.id)}>UpperCase One</button>&nbsp;&nbsp;
                             <button onClick={()=>MarkAsDone(todo.id)}>Mark as Done</button>
                        </li>
                    ))
                }
            </ul>
                <br /><br />
                <button onClick={upperCaseAll}>
                    UpperCase All
                </button><br /><br />
                <button onClick={markDoneAll}>
                    Mark all as Done
                </button>
        </div>
    );
}