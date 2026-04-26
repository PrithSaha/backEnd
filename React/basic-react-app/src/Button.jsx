function handleClick(event){
  console.log("Hello");
  console.log(event);
}

function handleMouseOver(){
    console.log("Bye");
}

function handleDblClick(){
    console.log("you double clicked");
}

export default function Button(){
    return(
        <div>
            <>
            <button onClick={handleClick}>Click me!</button>
        <p onMouseOver={handleMouseOver}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum facilis atque qui quasi assumenda. Quod, obcaecati ad ut voluptate quas quis eos minima et natus magnam quia explicabo molestias dolores!</p>
            <button onDoubleClick={handleDblClick}>Dbl Click</button>
            </>
        </div>
    )
}