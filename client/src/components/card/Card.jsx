import s from "../card/Card.module.css";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/action";

export default function Card(props) {
const [isFav, SetIsFav]=useState(false);
const dispatch = useDispatch();
const myFavorites =useSelector((s)=>s.myFavorites);

function handleFavorite(ch){
  if(isFav){
    SetIsFav(false);
    dispatch(deleteFavorites(ch.id))
  }else{
    SetIsFav(true);
    dispatch(addFavorites(ch));
  }
}
useEffect(()=>{
  myFavorites.forEach((ch)=>{
    if(ch.id === props.id){
      SetIsFav(true)
    }
  })
},[myFavorites, props.id])

  return (
    <div className={s.Card}>
     <div>
      {isFav ? (
      <button  onClick={()=>handleFavorite(props)}>💚</button>
      ) : (
        <button onClick={()=>handleFavorite(props)}>♡</button>
      )}
     <button className={s.btn} onClick={props.onClose}>X</button>
     </div>
        <h2>{props.name}</h2>
        <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt="imagen no encontrada" />
        </Link>
        <div className={s.H2}>
          <p>{props.species}</p>
          <p>{props.gender}</p>
        </div>
      
    </div>
  );
}
