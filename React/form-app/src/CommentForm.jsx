import { useState } from "react";
import { useFormik } from "formik";

export default function CommentForm({addNewComment}){

    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating: 5
    });

    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return({...currData,[event.target.name]:event.target.value})
        })
    }

    let handleSubmit=()=>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
        username:"",
        remarks:"",
        rating: 5
        })
    }

    return(<div>
        <h4>Give a comment!</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
            <br /><br />
            <label htmlFor="remarks">Remarks</label>
            <textarea name="" id="" value={formData.remarks} placeholder="add few remarks" onChange={handleInputChange} id="remarks" name="remarks">Renmarks</textarea>
            <br /><br />
            <label htmlFor="rating">Rating</label>
            <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
            <br /><br />
            <button>Add Comment</button>
        </form>
    </div> )
}