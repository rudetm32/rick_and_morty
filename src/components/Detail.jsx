import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";

export default function Detail() {
  const { dId } = useParams()
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${dId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("no hay personaje")
        }
      })
      .catch((error) => {
         window.alert( error)
      });
    return setCharacter({})
  }, [dId]);

  return (
    <>
      <h1>{character.name}</h1>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <p>{character.origin?.name}</p>
      <div>
        <img src={character.image} alt="" />
      </div>
    </>
  );
}



