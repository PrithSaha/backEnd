import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
    const [task,setTask]= useState("");
    const dispatch=useDispatch();

    const submitHandeler=(event)=>{
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
    }

    return(
        <>
        <form onSubmit={submitHandeler}>
            <input type="text" onChange={(e) => setTask(e.target.value)}/> &nbsp;
            <button>Add Task</button>
        </form>
        </>
    )
}