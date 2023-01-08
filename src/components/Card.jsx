import s from "./styles/Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={s.Card}>
      <button onClick={props.onClose}>X</button>

      <Link to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
        <img src={props.image} alt="imagen not found" />
        <div className={s.H2}>
          <p>{props.species}</p>
          <p>{props.gender}</p>
        </div>
      </Link>
    </div>
  );
}
