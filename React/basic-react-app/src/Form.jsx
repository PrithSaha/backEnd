function handleFormSubmit(event){
    console.log("form was sumbitted");
    event.preventDefault();
}

export default function Form(){
    return(
        <form>
            <input type="text" placeholder="Write something"/>
            <button onClick={handleFormSubmit}>Submit!</button>
        </form>
    )
}