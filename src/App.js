/* eslint-disable no-unused-expressions */
import {useState} from "react"
import './App.css'
import Cards from './components/Cards.jsx'
//import SearchBar from './components/SearchBar.jsx'
import NavBar from './components/NavBar.jsx'

function App () {

  const [character, setCharacter] = useState([])
  function onSearch(id) {
    fetch(`htpps://rickandmortyapicom/api/character/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      if(data.name){
        let existe=character.find((e)=>e.id===data.id)
        if(existe){
          alert('personaje ya existe')
        }
        setCharacter((oldChars)=>[...oldChars,data]);
      }
      else{
        alert("no hay personaje con ese id")
      }
    })
    }
    function onClose(id){
setCharacter((data)=>{
  return data.filter((e)=>e.id !== id)
})
    }
  return (
    <div className="App">
      <div>
        <NavBar onSearch={onSearch} />
      </div>
      <div>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  );
}

export default App
