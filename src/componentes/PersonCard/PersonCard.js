import './PersonCard.css';
function PersonCard (props){
    return(
        <div className='personas'>
            <h1> {props.usuario.apellido} ,{props.usuario.nombre}</h1>
            <p>Age : {props.usuario.edad}</p>
            <p>Hair Color : {props.usuario.colorCabello}</p>
        </div>
    )

}
export default PersonCard;