import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={styles.nav}>
        <ul>
          <li className={styles.a}>
            <Link to="/home">Home</Link>
          </li>
          <li  >
            < Link to="/about">About</Link>
          </li>
          <li>
            <Link to ="/favorites">Favorites</Link>
          </li>
          <li>
            <SearchBar onSearch={props.onSearch} />
          </li>
        </ul>
    </div>
  );
}
