import { useState, useEffect } from "react"

export default function Counter(){
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);


    let incCountx=()=>{
        setCountx(currCount=> currCount+1);
    }

    let incCounty=()=>{
        setCounty(currCount=> currCount+1);
    }    

    useEffect(function print(){
        console.log("this is side-effect");  
    },[countx] );

    return(
        <div>
            <h3>Countx={countx}</h3>
            <button onClick={incCountx}>+1x</button>
             <h3>County={county}</h3>
            <button onClick={incCounty}>+1y</button>
        </div>
    )
}