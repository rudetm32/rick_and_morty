export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <button onClick={()=>props.onSearch("no hay id")}>Agregar</button> 
      </div>
   );
}
