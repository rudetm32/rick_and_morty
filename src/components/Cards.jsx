import Card from "./Card";
import s from "./Cards.module.css"

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={s.cards}>
      {characters.map((el) => {
        return (
          <Card
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
