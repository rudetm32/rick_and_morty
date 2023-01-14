import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={styles.nav}>
        <ul>
          <li>
            <Link to="/home">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button>About</button>
            </Link>
          </li>
          <li>
            <Link to ="/favorites">
              <button>Favorites</button>
            </Link>
          </li>
          <li>
            <SearchBar onSearch={props.onSearch} />
          </li>
        </ul>
    </div>
  );
}
