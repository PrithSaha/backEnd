import { useState } from "react";

export default function Form(){

    let [formData,setFormData]=useState({
        fullName:"",username:""
    });


    let handleInputChange=(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;
        
        setFormData((currData)=>{
            return{...currData, [fieldName]: newValue}
        })

    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: ""
        });
    }

   
    return (
    <form onSubmit={handleSubmit}>
        <br /><br />
        <label htmlFor="fullname">Fullname</label>
        <input type="text" placeholder="enter your fullname" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName"/><br /><br />
       <br /><br />
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="enter your username" value={formData.username} onChange={handleInputChange} id="username" name="username"/><br /><br />
        <button>Submit</button>
    </form>)
}