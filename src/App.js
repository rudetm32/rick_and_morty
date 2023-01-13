import s from "./App.module.css";

import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";


import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form"
import Favorites from "./components/Favorites"

function App() {
  const [access, setAccess]=useState(false)
  const username="jruiz@gmail.com";
  const password ="Ju1872an"
  const navigate=useNavigate();

  function login(userData){
    if(userData.password === password && userData.username === username){
      setAccess(true);
      navigate("/home");
    }else{
      window.alert("username y password incorrectos")
    }
  }

  function logout(){
    setAccess(false);
    navigate("/");
  }

  useEffect(()=>{
    !access && navigate("/");
  }, [access]);

  const Location =useLocation()
  const [character, setCharacter] = useState([]);
  
  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          let found = character.find((e) => e.id === data.id);
          if (found) {
            window.alert('Personaje ya existe');
          }
          setCharacter((characters) => [...characters, data]);
        } else {
          window.alert("No existe personaje con ese id");
        }
      });
  }
  function onClose(id) {
    setCharacter((data) => {
      return data.filter((el) => el.id !== id);
    });
  }
  return (
    <div className={s.App}>
      <div className={s.Conteiner}>
        <div>
          {
            Location.pathname === "/" ?
             null
             : <NavBar  logout={logout} onSearch={onSearch} />
        }
        </div>
        <Routes>
          <Route 
          path="/" element={<Form login={login}/>}>
          </Route>
          <Route
            path="/home"
            element={<Cards character={character} onClose={onClose} />}>
          </Route>
          <Route 
            path="/about" element={<About />}>
          </Route>
          <Route 
            path="/favorites" element={<Favorites character={character} onClose={onClose}/>}>
          </Route>
          <Route
            path="/detail/:dId" element={<Detail/>}>

            </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
