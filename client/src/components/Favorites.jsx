import React from"react";
import {useSelector, useDispatch} from "react-redux";
import Card from "./Card";
import { filterCards, orderCards, reset } from "../redux/action";
import s from "../components/styles/Cards.module.css"

export default function Favorites(props) {
    const dispatch = useDispatch();
    const myFavorites = useSelector((s)=>s.myFavorites);

    function handleClick(e){
        e.preventDefault();
        const {name, value} = e.target;
        if(name ==='filter'){
            return dispatch(filterCards(value));
        }
        if(name ==='order'){
            dispatch(orderCards(value))
        }
    }
    return(
        <>
        <div className= {s.Cards}>
        <div>
            <select name="order" defaultValue={"DEFAULT"} onChange={handleClick}>
                <option value="DEFAULT" disabled>
                    select order
                </option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="filter" defaultValue={"DEFAULT"} onChange={handleClick}>
                <option value="DEFAULT" disabled>
                    Select filter
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknow">UnKnow</option>
            </select>
            <div>
                <button onClick={()=>dispatch(reset())}>Reset</button>
            </div>
        </div>
        {myFavorites?.map((el)=>{
    return(
    <Card
    Key={el.id}
    id={el.id}
    name={el.name}
    species={el.species}
    gender={el.gender}
    image={el.image}
    onclose={()=>props.onClose(el.id)}
    />
);
    })}
        </div>
        
        </>
)
}