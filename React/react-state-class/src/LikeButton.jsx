import {useState} from "react";

export default function LikeButton(){

    let [isLike,setIsLike]= useState(false);

        let toogleLike = () => {
            console.log("we are going to toogle");
           setIsLike(!isLike)
        };
        
        let likeStyle={ color:"red"};

    return(
        <div>
            <p onClick={toogleLike}>
              {
                isLike? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart"></i> 
              }
           </p>
        </div>
    )
}