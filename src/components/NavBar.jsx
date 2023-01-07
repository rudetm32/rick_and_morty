import React from "react";
import SearchBar from "./SearchBar";
import s from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={s.nav}>
      <div>
        <button>Home</button>
      </div>
      <div>
        <button>filter</button>
      </div>
      <div>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}
