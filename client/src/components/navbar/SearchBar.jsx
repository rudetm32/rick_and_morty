
import { useState } from "react";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");
  function handleInput(e) {
    setCharacter(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Ingrese un id... "
        onChange={(e) => handleInput(e)}
        value={character}
      />
      <button onClick={() => props.onSearch(character)}>Enviar</button>
    </div>
  );
}
