import { useState } from "react"
import "./Comment.css"
import CommentForm from "./CommentForm";

export default function Comments(){
    let [comments,setComments]=useState([{ 
        username:"@sk",
        remarks: "great job!",
        rating: 4
       }]);
    
    let addNewComment=(comment)=>{
        setComments((currComments)=>[
            ...currComments,comment
        ])
    }

    return(
        <>
        <div>
            <h1>All comments!</h1>
            {
                comments.map((comment, idx)=>(
                    <div className="comment" key={idx}>
                <span><i>{comment.remarks}</i></span>&nbsp;
                <span>(rating={comment.rating})</span> <br />&nbsp;
                <span>{comment.username}</span>
                
            </div>
                ))
            }
            <hr/>
        <hr/>
        </div>
        <CommentForm addNewComment={addNewComment}/>
        </>
    )
}