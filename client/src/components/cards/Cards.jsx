import Card from "../card/Card";
import s from "./Cards.module.css";


export default function Cards(props) {
  const { character } = props;
  return (
    <div className={s.Cards}>
      {character.map((el) => {
        return (
          <Card
            key={el.id}
            id={el.id}
            name={el.name}
            species={el.species}
            gender={el.gender}
            image={el.image}
            onClose={()=>props.onClose(el.id)}
          />
        );
      })}
    </div>
  );
}
