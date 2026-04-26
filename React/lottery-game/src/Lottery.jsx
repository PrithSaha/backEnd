import { useState } from "react"
// import "./Lottery.css";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket.jsx";


export default function Lottery({n=3,winCondition}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=winCondition(ticket)? true: false;

    let buyTicket= ()=>{
        setTicket(genTicket(n))
    };

    return (
        <div>
        <h1>Lottery Game!</h1>
        <div className="ticket">
           <Ticket ticket={ticket}/>
        </div>
        <h3>{ isWinning && "Congratulations, you won!"} </h3>
        <button onClick={buyTicket}>Buy New Ticket</button>
        </div>
   )
}