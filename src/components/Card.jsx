import s from "./Card.module.css";

export default function Card(props) {
  return (
    <>
      <div className={s.card}>
        <button onClick={props.onClose}>X</button>
        <h1>{props.name}</h1>
        <div className={s.h1}>
          <h2 >{props.species}</h2>
          <h2>{props.gender}</h2>
        </div>

        <img src={props.image} alt="imagen not found" />
      </div>
    </>
  );
}
