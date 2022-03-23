import './App.css';
import React from 'react';
import PersonCard from './componentes/PersonCard/PersonCard';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      usuarios:[{
        nombre: 'Jane',
        apellido: 'Doe',
        edad:45,
        colorCabello: 'Black'
      },
      {
        nombre: 'John',
        apellido: 'Smith',
        edad:88,
        colorCabello: 'Brown'
      },
      {
        nombre: 'Millard',
        apellido: 'Fillmore',
        edad:50,
        colorCabello: 'Brown'
      },
      {
        nombre: 'Maria',
        apellido: 'Smith',
        edad:62,
        colorCabello: 'Brown'
      }]
    }
  
  }
  actualizarTodo = (nombreUsuario) =>{
    let usuariosActulizado = this.state.usuarios;

    for (let i = 0; i<usuariosActulizado.length;i++){
      if(usuariosActulizado[i].nombre == nombreUsuario){
        usuariosActulizado[i].edad+=1;
      }
    }

    this.setState({
      usuarios : usuariosActulizado
    })
  }
  render() {
    const{usuarios}=this.state
    return(
        <div className='usuario'>
          {
            usuarios.map((usuario,indice)=>{
              return(
                <PersonCard usuario={usuario} actualizarTodo={this.actualizarTodo} key={'usuario_' + indice}/>
              )
            })
          }
        </div>
    ) 
  }
}
export default App;
