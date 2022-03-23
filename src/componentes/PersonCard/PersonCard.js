import './PersonCard.css';
function PersonCard (props){
    return(
        <div>
        <div className='personas'>
            <h1> {props.usuario.apellido} ,{props.usuario.nombre}</h1>
            <p>Age : {props.usuario.edad}</p>
            <p>Hair Color : {props.usuario.colorCabello}</p>
        </div>
        <button onClick={()=> props.actualizarTodo(props.usuario.nombre)}>
            Birthay button for {props.usuario.nombre} {props.usuario.apellido} 
        </button>
        </div>
    )

}
export default PersonCard;