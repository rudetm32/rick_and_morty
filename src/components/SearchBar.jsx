import s from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("")
  function handleInput(e) {
    setCharacter(e.target.value)
  }
  return (
      <div>
      <input type='text' name='search' placeholder="escribe " onChange={(e) => handleInput(e)} value={ character} />
      <button onClick={()=>props.onSearch(character)}>Agregar</button> 
      </div>
   );
}



