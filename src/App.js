/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import s from "./App.module.css";

import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form"


function App() {
  const Location =useLocation()
  const [character, setCharacter] = useState([]);
  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          let existe = character.find((e) => e.id === data.id);
          if (existe) {
            window.alert("personaje ya existe");
          }
          setCharacter((oldChars) => [...oldChars, data]);
        } else {
          window.alert("no hay personaje con ese id");
        }
      });
  }
  function onClose(id) {
    setCharacter((data) => {
      return data.filter((e) => e.id !== id);
    });
  }
  return (
    <div className={s.App}>
      <div className={s.Conteiner}>
        <div>
          {
            Location.pathname === "/" ? null :
              <NavBar onSearch={onSearch} />
        }
        </div>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route
            path="/home"
            element={<Cards character={character} onClose={onClose} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/detail/:dId" element={<Detail />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
