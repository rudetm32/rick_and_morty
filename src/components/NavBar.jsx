import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import s from "./styles/NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={s.nav}>
      <div>
        <Link to="/home">
          <button>Home</button>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
      <div>
        <Link to ="/favorites">
          <button>Favorites</button>
        </Link>
      </div>
      <div>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}
