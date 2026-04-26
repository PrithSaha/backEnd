import { useEffect, useState } from "react";

export default function Joker(){
    const URL="https://official-joke-api.appspot.com/jokes/random";

    let [joke,setJoke]=useState({});

    const getNewJoke=async()=>{
       let result= await fetch(URL);
       let jsonResponse = await result.json();
       console.log(jsonResponse);
       setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    };

    useEffect(()=>{ async function getFirstJoke() {
        let result= await fetch(URL);
       let jsonResponse = await result.json();
       console.log(jsonResponse);
       setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    } getFirstJoke()},
    [])

    return(<div>
        <h3>Joker!</h3>
        <h2>Setup: &nbsp; <i>{joke.setup}</i></h2>
        <h2>Punchline:  &nbsp;<b>{joke.punchline}</b></h2>
        <button onClick={getNewJoke}>New Joke!</button>
        
    </div>)
}